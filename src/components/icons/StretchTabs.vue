<script setup>
import { ref, onMounted, nextTick } from 'vue';

const menuItems = ref([
  { id: 1, name: 'Dashboard', icon: 'fas fa-chart-line' },
  { id: 2, name: 'Projects', icon: 'fas fa-tasks' },
  { id: 3, name: 'Team', icon: 'fas fa-users' },
  { id: 4, name: 'Settings', icon: 'fas fa-cog' },
]);

const activeIndex = ref(0);
const selectorStyle = ref({
  left: '0px',
  width: '0px'
});

const updateSelector = (index) => {
  activeIndex.value = index;
  
  nextTick(() => {
    const activeElement = document.querySelectorAll('.tabs a')[index];
    if (activeElement) {
      selectorStyle.value = {
        left: `${activeElement.offsetLeft}px`,
        width: `${activeElement.offsetWidth}px`
      };
    }
  });
};

onMounted(() => {
  updateSelector(0);
});
</script>

<template>
  <div class="wrapper">
    <nav class="tabs">
      <div class="selector" :style="selectorStyle"></div>
      
      <a 
        v-for="(item, index) in menuItems" 
        :key="item.id"
        href="#"
        :class="{ active: activeIndex === index }"
        @click.prevent="updateSelector(index)"
      >
        <i :class="item.icon"></i>
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
  margin: 50px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.tabs {
  margin-top: 50px;
  font-size: 15px;
  padding: 0;
  background: #262626;
  box-shadow: 0px 10px 30px rgba(10, 10, 15, 0.60);
  display: inline-block;
  border-radius: 50px;
  position: relative;
  overflow: hidden; 
}

.tabs a {
  text-decoration: none;
  color: #777;
  text-transform: capitalize;
  padding: 12px 25px;
  display: inline-block;
  position: relative;
  z-index: 2;
  transition: color 0.4s ease;
  font-weight: 500;
  letter-spacing: 1.5px;
  background-color: transparent !important;
  outline: none;
}

.tabs a:hover {
  background-color: transparent !important;
  color: #777; 
}

.tabs a.active:hover {
  color: #fff;
}


.tabs a.active {
  color: #fff;
  font-weight: 800;
}

.tabs a i {
  margin-right: 8px;
}

.tabs .selector {
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  border-radius: 50px;
  background: linear-gradient(45deg, #2c90e7 0%, #073b7b 100%);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>