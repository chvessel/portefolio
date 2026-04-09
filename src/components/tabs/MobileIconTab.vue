<script setup>
import { ref } from 'vue'

const navigationItems = ref([
  { id: 1, icon: 'house', label: 'Home', color: '#E8C3A9' },      
  { id: 2, icon: 'envelope', label: 'Mail', color: '#D6A5B5' },   
  { id: 3, icon: 'bell', label: 'Alerts', color: '#A5A9D6' },    
  { id: 4, icon: 'calendar', label: 'Events', color: '#E8D9A9' }, 
  { id: 5, icon: 'user', label: 'Profile', color: '#99BDB4' }    
])

const activeIndex = ref(0)

const selectMenu = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="wrapper">
    
    <nav class="nav-bar">
      <ul class="nav-list">
        
        <div 
          class="nav-indicator" 
          :style="{ 
            transform: `translateX(${activeIndex * 70}px)`,
            '--current-color': navigationItems[activeIndex].color 
          }"
        ></div>

        <li 
          v-for="(item, index) in navigationItems" 
          :key="item.id"
          class="nav-item"
          :class="{ 'is-active': activeIndex === index }"
          @click="selectMenu(index)"
        >
          <div class="nav-content">
            <span class="nav-icon">
              <font-awesome-icon :icon="['fas', item.icon]" />
            </span>
            <span class="nav-label">{{ item.label }}</span>
          </div>
        </li>

      </ul>
    </nav>

  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
}

.nav-bar {
  position: relative;
  width: 450px; 
  height: 90px;
  background-color: #1d1d27;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center; 
}

.nav-list {
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 350px; 
}

.nav-item {
  width: 70px;
  height: 70px;
  display: flex;
  cursor: pointer;
  z-index: 10;
}

.nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-item.is-active .nav-content {
  transform: translateY(-38px);
}

.nav-icon {
  font-size: 1.3rem;
  color: #ffffff;
  transition: color 0.4s;
}

.nav-label {
  font-size: 0.65rem;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 4px;
}

.nav-item.is-active .nav-label {
  margin-top: 14px;
  color: #54d775; 
}

.nav-indicator {
  position: absolute;
  top: -45px;
  left: 7.5px; 
  width: 55px;
  height: 55px;
  background-color: var(--current-color);
  border: 3px solid #54d775; 
  border-radius: 50%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), background-color 0.5s ease;
  z-index: 5;
}
</style>