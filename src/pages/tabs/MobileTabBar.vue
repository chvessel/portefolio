<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const menuItems = ref([
    { name: 'Home', icon: 'house' },
    { name: 'Profile', icon: 'user' },
    { name: 'Tasks', icon: 'tasks' },
    { name: 'Calendar', icon: 'calendar-days' },
    { name: 'Settings', icon: 'gear' }
])

const setActive = (index) => {
    activeIndex.value = index
}
</script>

<template>
    <div class="navigation-container">
        <div class="navigation">
            <ul>
                <div class="indicator" :style="{ transform: `translateX(${activeIndex * 70}px)` }"></div>

                <li v-for="(item, index) in menuItems" :key="index" :class="{ active: activeIndex === index }"
                    @click="setActive(index)">
                    <a href="#">
                        <span class="icon">
                            <font-awesome-icon :icon="['fas', item.icon]" />
                        </span>
                        <span class="text">{{ item.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.navigation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background: #f0f0f0;
    border-radius: 20px;
    margin: 60px 20px 0px 50px;
}

.navigation {
    position: relative;
    width: 400px;
    height: 75px;
    background: #3d3d3d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.navigation ul {
    display: flex;
    width: 350px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.navigation ul li {
    position: relative;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-decoration: none;
    background: transparent !important;
    -webkit-tap-highlight-color: transparent;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 70px;
    font-size: 1.5em;
    transition: 0.3s ease-in-out; 
    color: #1e1e1e;
}

.navigation ul li:not(.active) a:hover .icon {
    transform: scale(1.3); 
    color: #6d6c6c; 
}

.navigation ul li.active a .icon {
    transform: translateY(-35px) scale(1);
    color: #fff;
}

.navigation ul li a .text {
    position: absolute;
    color: #e2e2e2;
    font-weight: 500;
    font-size: 0.75em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
}

.navigation ul li.active a .text {
    opacity: 1;
    transform: translateY(15px);
}

.indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #e31ab4;
    border-radius: 50%;
    border: 6px solid #f0f0f0;
    transition: 0.5s;
}

.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 #f0f0f0;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 #f0f0f0;
}

.navigation ul li a:hover {
    background-color: transparent !important;
}
</style>