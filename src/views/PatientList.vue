<!-- src/views/PatientList.vue -->
<template>
  <div class="patient-page">
    <v-card class="page-card">
      <!-- Top section -->
      <div class="page-top">
        <div class="page-title">
          <v-icon class="mr-2">mdi-account-multiple</v-icon>
          <span class="title-text">Patient Records</span>
        </div>

        <v-btn color="primary" class="add-btn" rounded @click="openAdd">
          <v-icon left>mdi-plus</v-icon> Add New
        </v-btn>
      </div>

      <!-- Filters -->
      <div class="filters">
        <v-text-field
          v-model="searchText"
          placeholder="Search patients..."
          clearable
          hide-details
          dense
          append-icon="mdi-magnify"
          style="flex:1; max-width:520px;"
        />
      </div>

      <!-- Patient Table -->
      <div class="table-wrapper">
        <table class="patient-table">
          <thead>
            <tr>
              <th>CODE</th>
              <th>NAME EN</th>
              <th>NAME KH</th>
              <th>DATE OF BIRTH</th>
              <th>GENDER</th>
              <th>AGE</th>
              <th>PHONE</th>
              <th>PROVINCE</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="p in filteredPatients" :key="p.code">
              <td class="code">
                <a href="#" @click.prevent="viewPatient(p)">{{ p.code }}</a>
              </td>

              <td>{{ p.nameEn }}</td>
              <td class="kh">{{ p.nameKh }}</td>
              <td>{{ p.dob }}</td>
              <td>{{ p.gender }}</td>
              <td>{{ p.age }}</td>
              <td>{{ p.phone }}</td>
              <td>{{ p.province }}</td>

              <td class="actions">
                <v-btn icon small color="teal" @click="viewPatient(p)">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>

                <v-btn icon small color="orange" @click="openEdit(p)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn icon small color="red" @click="removePatient(p)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-card>

    <!-- ======================= -->
    <!-- ADD / EDIT PATIENT MODAL -->
    <!-- ======================= -->
    <v-dialog v-model="dialog" max-width="650px">
      <v-card class="pa-4">
        <h3 class="mb-3">{{ isEdit ? "Edit Patient" : "Add New Patient" }}</h3>

        <v-form ref="formRef">
          <v-row dense>
            <v-col cols="6">
              <v-text-field label="Name (EN)" v-model="form.nameEn" required />
            </v-col>

            <v-col cols="6">
              <v-text-field label="Name (KH)" v-model="form.nameKh" required />
            </v-col>

            <v-col cols="6">
              <v-text-field type="date" label="Date of Birth" v-model="form.dob" required />
            </v-col>

            <v-col cols="6">
              <v-select
                label="Gender"
                :items="['Male','Female']"
                v-model="form.gender"
                required
              />
            </v-col>

            <v-col cols="6">
              <v-text-field label="Phone" v-model="form.phone" />
            </v-col>

            <v-col cols="6">
              <v-text-field label="Province" v-model="form.province" />
            </v-col>
          </v-row>
        </v-form>

        <v-card-actions class="justify-end mt-3">
          <v-btn text @click="closeDialog">Cancel</v-btn>
          <v-btn color="primary" @click="savePatient">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* =======================
    States
======================= */
const dialog = ref(false);
const isEdit = ref(false);

const form = ref({
  code: "",
  nameEn: "",
  nameKh: "",
  dob: "",
  gender: "",
  phone: "",
  province: "",
  age: 0
});

/* =======================
    Patient Data
======================= */
const patients = ref([
  { code: "P00001", nameEn: "Sokha Chan", nameKh: "សុខា ចាន់", dob: "1999-04-12", gender: "Male", age: 26, phone: "012345678", province: "Phnom Penh" },
  { code: "P00002", nameEn: "Dara Kim", nameKh: "ដារ៉ា គឹម", dob: "1995-07-08", gender: "Female", age: 30, phone: "098765432", province: "Kampong Cham" },
  { code: "P00003", nameEn: "Lina Meas", nameKh: "លីណា ម៉ាស", dob: "2002-01-15", gender: "Female", age: 23, phone: "011223344", province: "Siem Reap" }
]);

/* =======================
    Add / Edit Modal
======================= */
function openAdd() {
  isEdit.value = false;
  resetForm();
  form.value.code = generateNextCode();
  dialog.value = true;
}

function openEdit(p) {
  isEdit.value = true;
  form.value = { ...p };
  dialog.value = true;
}

function closeDialog() {
  dialog.value = false;
}

/* =======================
    Save Patient
======================= */
function savePatient() {
  form.value.age = calculateAge(form.value.dob);

  if (isEdit.value) {
    const index = patients.value.findIndex(x => x.code === form.value.code);
    if (index !== -1) patients.value[index] = { ...form.value };
  } else {
    patients.value.push({ ...form.value });
  }

  dialog.value = false;
}

function resetForm() {
  form.value = {
    code: "",
    nameEn: "",
    nameKh: "",
    dob: "",
    gender: "",
    phone: "",
    province: "",
    age: 0
  };
}

/* =======================
    Utility
======================= */
function generateNextCode() {
  if (patients.value.length === 0) return "P00001";

  const last = patients.value[patients.value.length - 1].code;
  const num = parseInt(last.replace("P", "")) + 1;

  return "P" + num.toString().padStart(5, "0");
}

function calculateAge(dob) {
  const d = new Date(dob);
  const diff = Date.now() - d.getTime();
  return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}

function removePatient(p) {
  if (confirm("Delete " + p.nameEn + "?")) {
    patients.value = patients.value.filter(x => x.code !== p.code);
  }
}

function viewPatient(p) {
  router.push(`/patients/${p.code}`);
}

/* =======================
    Filtering
======================= */
const searchText = ref("");

const filteredPatients = computed(() => {
  const t = searchText.value.toLowerCase();

  return patients.value.filter(p =>
    !t ||
    p.code.toLowerCase().includes(t) ||
    p.nameEn.toLowerCase().includes(t) ||
    p.phone.includes(t)
  );
});
</script>

<style scoped>
.page-card {
  padding: 20px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(16,24,40,0.04);
}

.page-top {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: 18px;
}

.page-title {
  display:flex;
  align-items:center;
  gap:8px;
  color:#1e3a8a;
  font-weight:700;
}

.title-text { font-size:16px; }

.table-wrapper {
  overflow:auto;
  border-top:1px solid #f0f2f4;
}

.patient-table {
  width:100%;
  border-collapse:collapse;
  min-width:900px;
}

.patient-table th {
  padding:12px;
  background:#fafbfd;
  font-weight:700;
  color:#6b7280;
  font-size:13px;
}

.patient-table td {
  padding:12px;
  border-bottom:1px solid #f1f5f9;
  font-size:14px;
  color:#374151;
}

.patient-table td.code a {
  color:#0b82ff;
  font-weight:600;
  text-decoration:none;
}

.patient-table td.kh {
  font-family: 'Noto Sans Khmer', sans-serif;
}

.actions { display:flex; gap:6px; }
</style>
