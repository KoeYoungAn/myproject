<!-- src/components/Sidebar.vue -->
<template>
  <aside class="sidebar">
    <div class="brand">
      <!-- Use the uploaded image path as the logo src -->
      <img :src="logoUrl" alt="Logo" class="logo" />
      <div class="brand-text">THE HANDA<br/><span>MEDICAL CENTER</span></div>
    </div>

    <div class="role">Nurse Dashboard</div>

    <nav class="menu">
      <div class="menu-section">Patient</div>
      <ul>
         

        <li @click="$router.push('/')"><span class="icon">📋</span> Patient List</li>
        <li @click="$router.push('/visit-queue')"><span class="icon">📊</span> Visit Queue</li>
        <li @click="$router.push('/hospital-visit')"><span class="icon">🏥</span> Hospital Visit</li>
        <li @click="$router.push('/service-booking')"><span class="icon">🔧</span> Service Booking</li>
        <li @click="$router.push('/in-patient')"><span class="icon">🛌</span> In-Patient</li>
        <li @click="$router.push('/bed-management')"><span class="icon">📦</span> Bed Management</li>

        


      </ul>

      <div class="menu-section">Reports</div>
      <ul>
        <li @click="$router.push('/patient-visit-report')">
  <span class="icon">📁</span> Patient Visit
         </li>
      </ul>
    </nav>

    <div class="sidebar-footer">ICT Department — The Handa Foundation</div>
  </aside>
</template>

<script setup>
const logoUrl = '/mnt/data/photo_2025-11-21_14-45-47.jpg'

</script>

<style scoped>
.sidebar {
  width: 240px;
  background: #ffffff;
  border-right: 1px solid #eee;
  padding: 20px;
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.brand {
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom: 12px;
}

.logo {
  width:48px;
  height:48px;
  object-fit:cover;
  border-radius:4px;
  background:#fff;
  border:1px solid #eee;
}

.brand-text {
  font-weight:700;
  font-size:12px;
  color:#333;
  line-height:1;
}

.role {
  font-size:13px;
  color:#666;
  margin-bottom:14px;
}

.menu {
  flex:1;
}

.menu-section {
  color:#8b98a8;
  font-weight:600;
  font-size:12px;
  margin-top:14px;
  margin-bottom:8px;
}

ul {
  list-style:none;
  padding:0;
  margin:0 0 10px 0;
}

li {
  padding:10px 8px;
  border-radius:6px;
  color:#333;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
}

li.active {
  background:#e9f4ff;
  color:#0b82ff;
}

.icon { width:18px; text-align:center; font-size:14px; }

.sidebar-footer {
  font-size:12px;
  color:#9aa3ab;
  text-align:center;
  margin-top:20px;
}
</style>
