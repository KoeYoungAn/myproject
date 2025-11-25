// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PatientList from '@/views/PatientList.vue'
import VisitQueue from '@/views/VisitQueue.vue'
import HospitalVisit from '@/views/HospitalVisit.vue'
import ServiceBooking from '@/views/ServiceBooking.vue'
import InPatient from '@/views/InPatient.vue'
import BedManagement from '@/views/BedManagement.vue'




const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'PatientList', component: PatientList },
      { path: 'visit-queue', name: 'VisitQueue', component: VisitQueue },
      { path: 'hospital-visit', name: 'HospitalVisit', component: HospitalVisit },
      { path: 'service-booking', name: 'ServiceBooking', component: ServiceBooking },
      { path: 'in-patient', name: 'InPatient', component: InPatient },
      { path: 'bed-management', name: 'BedManagement', component: BedManagement },
      {
  path: '/patients/:id',
  name: 'PatientDetails',
  component: () => import('../views/PatientDetails.vue'),
  props: true
}

      
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})


