<template>
  <v-container class="pa-6" style="max-width: 700px;">
    <h2 class="text-h5 font-weight-bold mb-4">Student Form</h2>

    <v-row dense>
      <!-- Name -->
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.name"
          label="Name"
          variant="outlined"
        />
      </v-col>

      <!-- Age -->
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.age"
          label="Age"
          variant="outlined"
          type="number"
        />
      </v-col>

      <!-- Gender -->
      <v-col cols="12" sm="6">
        <v-select
          v-model="form.gender"
          :items="['Male', 'Female']"
          label="Gender"
          variant="outlined"
        />
      </v-col>

      <!-- Phone -->
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.phone"
          label="Phone"
          variant="outlined"
        />
      </v-col>

      <!-- Address -->
      <v-col cols="12">
        <v-textarea
          v-model="form.address"
          label="Address"
          variant="outlined"
          rows="3"
        />
      </v-col>

      <!-- Submit Button -->
      <v-col cols="12" class="text-end mt-2">
        <v-btn color="green" @click="submitForm">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  age: '',
  gender: '',
  phone: '',
  address: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  alert('Form submitted! Check console for data.')
}
</script>
