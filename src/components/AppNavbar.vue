<!-- src/components/Navbar.vue -->
<template>
  <v-toolbar flat class="navbar">
    <v-btn icon @click="toggleMenu">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <div class="breadcrumbs">
      <v-breadcrumbs divider=">">
        <v-breadcrumbs-item disabled>
          Home
        </v-breadcrumbs-item>
        <v-breadcrumbs-item>
          Patient List
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>

    <div class="spacer"></div>

    <v-btn icon>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <div class="user">
      <v-avatar size="30">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
      </v-avatar>
      <span class="username">Nurse</span>
    </div>
  </v-toolbar>
</template>

<script setup>
const toggleMenu = () => {
  // left menu toggling would go here (not implemented)
}
</script>

<style scoped>
.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
}

.breadcrumbs {
  margin-left: 8px;
  color: #6b7280;
}

.spacer { flex:1; }

.user {
  display:flex;
  align-items:center;
  gap:8px;
  margin-left:8px;
  color:#333;
  font-weight:600;
}
.username { font-size:14px; }
</style>
