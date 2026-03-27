<script setup>
import { ref } from 'vue';

const isLoading = ref(false);
const isDone = ref(false);

const startProcess = () => {
    if (!isLoading.value && !isDone.value) {
        isLoading.value = true;
        setTimeout(() => {
            isLoading.value = false;
            isDone.value = true;
        }, 2500);
    } else if (isDone.value) {
        isDone.value = false;
        isLoading.value = false;
    }
};
</script>

<template>
    <div class="main-container">
        <div class="action-button" :class="{ 'is-loading': isLoading, 'is-done': isDone }" @click="startProcess">
            <div class="icon-circle">
                <font-awesome-icon :icon="isDone ? 'fa-solid fa-arrows-rotate' : 'fa-solid fa-arrow-up'"
                    class="inner-icon" :class="{ 'is-rotated': isDone }" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
}

.action-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 18rem;
    height: 4rem;
    border-radius: 10rem;
    background-color: rgb(255, 64, 0);
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    border: 5px solid rgb(219, 58, 5);
    letter-spacing: 0.2em;
    font-weight: 200;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    user-select: none;
    cursor: pointer;
    transition: all 400ms ease;
}

.action-button.is-done {
    background-color: rgb(5, 174, 44);
    border-color: rgb(4, 140, 36);
}

.action-button:hover {
    transform: scale(1.05);
}

.action-button::before {
    content: "LOADING";
    position: absolute;
    background-color: white;
    height: 100%;
    width: 3.4rem;
    color: black;
    display: flex;
    border-radius: 10rem;
    align-items: center;
    overflow: hidden;
    padding-left: 1.2rem;
    box-sizing: border-box;
    z-index: 1;
    font-size: 0.9rem;
    font-weight: bold;
}

.is-loading.action-button::before {
    animation: revealEffect 2s ease-in-out 0.5s forwards;
}

.is-done.action-button::before {
    display: none;
}

.icon-circle {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    background-color: rgb(5, 174, 44);
    color: white;
    z-index: 2;
    transition: left 0.5s ease;
}

.is-done.action-button .icon-circle {
    background-color: white;
    color: rgb(5, 174, 44);
    left: calc(100% - 3.5rem);
}

.inner-icon {
    font-size: 1.5rem;
    transform: rotate(180deg);
    transition: transform 400ms;
}

.inner-icon.is-rotated {
    transform: rotate(0deg);
}

.is-loading.action-button .icon-circle {
    animation: moveIcon 2s ease-in-out 0.5s forwards;
}

.is-loading.action-button .inner-icon {
    transform: rotate(90deg);
}

.action-button::after {
    content: "START";
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 5rem;
}

.is-done.action-button::after {
    content: "DONE";
    justify-content: center;
    padding-left: 0;
    padding-right: 2rem;
}

@keyframes moveIcon {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(14rem);
    }
}

@keyframes revealEffect {
    0% {
        width: 3.4rem;
    }

    100% {
        width: 100%;
    }
}
</style>