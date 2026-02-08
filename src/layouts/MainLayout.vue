<script setup lang="ts">
import SideNavigation from "./SideNavigation.vue";
</script>

<template>
  <div class="layout">
    <aside class="sidebar-wrapper">
      <SideNavigation />
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  
}

.sidebar-wrapper {
  flex-shrink: 0;
}

.content {
  padding: 50px;
  overflow-y: auto;
  margin: 80px 0 0px 0px;
}
</style>
