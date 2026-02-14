<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);
const emit = defineEmits(['themeChanged']);

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    emit('themeChanged', isDarkMode.value);
};
</script>

<template>
    <div class="toggle-container" @click="toggleTheme">
        <div class="toggle-track" :class="{ 'is-dark': isDarkMode }">
            <div class="toggle-thumb">
                <div v-if="!isDarkMode" class="sun-details">
                    <div class="cloud"></div>
                </div>
                <div v-else class="moon-details">
                    <div class="crater"></div>
                </div>
            </div>
            <div class="stars" v-if="isDarkMode"></div>
        </div>
    </div>
</template>

<style scoped>
.hidden-input {
    display: none;
}


.toggle-track {
    display: block;
    width: 100px;
    height: 50px;
    background-color: #87ceeb;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    overflow: hidden;
    
}


.toggle-track.is-dark {
    background-color: #2c3e50;
}


.toggle-thumb {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    background-color: #ffd700;
    border-radius: 50%;
    transition: transform 0.4s ease-in-out, background-color 0.4s ease-in-out;
    z-index: 2;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
}


.is-dark .toggle-thumb {
    transform: translateX(50px);
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}


.cloud {
    position: absolute;
    bottom: 5px;
    left: 15px;
    width: 30px;
    height: 12px;
    background: white;
    border-radius: 10px;
    opacity: 0.9;
    transition: opacity 0.3s;
}

.moon-details .crater {
    position: absolute;
    background-color: #d1d1d1;
    border-radius: 50%;
}

.crater:nth-child(1) {
    width: 8px;
    height: 8px;
    top: 8px;
    left: 8px;
}

.crater:nth-child(2) {
    width: 5px;
    height: 5px;
    bottom: 10px;
    right: 10px;
}


.star {
    position: absolute;
    background: white;
    width: 3px;
    height: 3px;
    border-radius: 50%;
}

.star:nth-child(1) {
    top: 15px;
    left: 20px;
}

.star:nth-child(2) {
    top: 30px;
    left: 35px;
}
</style>