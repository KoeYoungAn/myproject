pipeline {
    agent any

    environment {
        IMAGE_NAME = "koeyoungan/myapp"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {

                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $IMAGE_NAME:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Deploy to EC2') {

            steps {

                sshagent(['ec2-ssh']) {

                    sh '''

                    ssh -o StrictHostKeyChecking=no ubuntu@51.21.252.151 "

                    docker pull $IMAGE_NAME:$IMAGE_TAG

                    docker stop myapp || true

                    docker rm myapp || true

                    docker run -d \
                    --name myapp \
                    -p 80:80 \
                    --restart always \
                    $IMAGE_NAME:$IMAGE_TAG

                    "

                    '''
                }
            }
        }
    }
}