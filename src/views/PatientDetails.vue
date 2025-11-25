<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12">
        <h2 class="text-primary">Patient Details</h2>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-5" elevation="3">

          <v-row>
            <v-col cols="12" md="6">
              <h3 class="font-weight-bold">Personal Information</h3>
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title><b>Patient Code:</b> {{ patient.code }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Name (KH):</b> {{ patient.nameKH }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Name (EN):</b> {{ patient.nameEN }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Gender:</b> {{ patient.gender }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Date of Birth:</b> {{ patient.dob }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Age:</b> {{ patient.age }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <v-col cols="12" md="6">
              <h3 class="font-weight-bold">Contact Information</h3>
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title><b>Phone:</b> {{ patient.phone }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Province:</b> {{ patient.province }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><b>Address:</b> {{ patient.address }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

        </v-card>
      </v-col>

      <v-col cols="12" class="mt-4">
        <v-btn color="primary" @click="goBack">
          <v-icon left>mdi-arrow-left</v-icon>
          Back to Patient List
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const patient = ref({});

onMounted(() => {
  // In a real project you fetch from API:
  // axios.get(`/api/patients/${route.params.id}`)
  // For now, pulling from localStorage mock:
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  patient.value = patients.find(p => p.id == route.params.id) || {};
});

const goBack = () => {
  router.push("/patients");
};
</script>

<style scoped>
.text-primary {
  color: #1976d2;
}
</style>
