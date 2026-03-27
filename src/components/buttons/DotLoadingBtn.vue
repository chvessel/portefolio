<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const startDownload = () => {

    isLoading.value = true;


    setTimeout(() => {
        isLoading.value = false;
    }, 10000);
};
</script>

<template>
    <div class="page-wrapper">
        <div class="header-section">
            <button class="download-button" @click="startDownload" :disabled="isLoading">
                {{ isLoading ? 'Downloading...' : 'Download' }}
            </button>
        </div>

        <div :class="['dot-container', { 'is-animating': isLoading }]">
            <span class="dot dot-1"></span>
            <span class="dot dot-2"></span>
            <span class="dot dot-3"></span>
            <span class="dot dot-4"></span>
            <span class="dot dot-5"></span>
        </div>
    </div>
</template>

<style scoped>
.page-wrapper {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Tahoma', sans-serif;
}

.header-section {
    margin-bottom: 60px;
    text-align: center;
}

.download-button {
    background-color: #17703b;
    color: white;
    padding: 15px 30px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 0 0 #1d5032;
    transition: all 0.2s ease;
}

.download-button:hover {
    background-color: #3cb16b;
}

.download-button:active {
    transform: translateY(3px);
    box-shadow: 0 2px 0 0 #4e8e68;
}

.download-button:disabled {
    background-color: #ccc;
    box-shadow: 0 5px 0 0 #999;
    cursor: not-allowed;
}

.dot-container {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    visibility: hidden;
}

.dot-container.is-animating {
    visibility: visible;
}

.dot {
    height: 20px;
    width: 20px;
    margin: 0 8px;
    border-radius: 50%;
    background-color: #37a439;
    opacity: 0.10;
}

.is-animating .dot-1 {
    animation: jumpUp 1.2s ease infinite 0.3s;
}

.is-animating .dot-2 {
    animation: jumpUp 1.2s ease infinite 0.4s;
}

.is-animating .dot-3 {
    animation: jumpUp 1.2s ease infinite 0.5s;
}

.is-animating .dot-4 {
    animation: jumpUp 1.2s ease infinite 0.6s;
}

.is-animating .dot-5 {
    animation: jumpUp 1.2s ease infinite 0.7s;
}


@keyframes jumpUp {
    0% {
        transform: translateY(0);
        opacity: 0.5;
    }

    30% {
        transform: translateY(-40px);
        opacity: 1;
    }

    60% {
        transform: translateY(0);
        opacity: 0.5;
    }

    100% {
        transform: translateY(0);
        opacity: 0.10;
    }
}
</style>