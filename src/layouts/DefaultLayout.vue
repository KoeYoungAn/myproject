<!-- src/layouts/DefaultLayout.vue -->
<template>
  <v-app>
    <div class="layout-root">
      <AppSidebar />
      <div class="main-area">
        <AppNavbar />
        <v-main class="pa-6">
          <router-view />
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<style scoped>
.layout-root {
  display: flex;
  min-height: 100vh;
  background: #f6f7f8;
}

/* Sidebar fixed width */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* ensure main area content has spacing like screenshot */
.v-main {
  background: transparent;
}
</style>
