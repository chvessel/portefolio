<script setup>
import { ref } from 'vue';

const isDownloading = ref(false);
const isFinished = ref(false);

const startDownload = () => {

    if (isDownloading.value || isFinished.value) return;

    isDownloading.value = true;


    setTimeout(() => {
        isDownloading.value = false;
        isFinished.value = true;


        setTimeout(() => {
            isFinished.value = false;
        }, 4000);

    }, 5000);
};
</script>

<template>
    <div class="wrapper">
        <button class="download-button" :class="{
            'is-active': isDownloading,
            'is-finished': isFinished
        }" @click="startDownload">
            <span class="label-default">
                Download
            </span>

            <span class="label-loading">
                <i class="fa fa-refresh"></i>
            </span>

            <span class="label-success">
                <i class="fa fa-check"></i>
                Download Complete
            </span>
        </button>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
}

.download-button {
    position: relative;
    width: 400px;
    height: 50px;
    background-color: #2563eb;
    border: none;
    border-radius: 50px;
    letter-spacing: 0.7px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease;
}

.download-button:not(.is-active):not(.is-finished):hover {
    background-color: #1d4ed8;
}

.download-button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.download-button.is-active::before {
    width: 100%;
    transition: width 5s linear;
}

.download-button:not(.is-active):not(.is-finished)::before {
    width: 0%;
    transition: width 0s;
}

.download-button span {
    position: absolute;
    z-index: 2;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    gap: 10px;
}

.label-default {
    top: 50%;
    transform: translateY(-50%);
}

.label-loading {
    top: 100%;
    font-size: 24px;
    opacity: 0;
}

.label-success {
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
}

.download-button.is-active .label-default {
    top: -100%;
}

.download-button.is-active .label-loading {
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
}

.download-button.is-active .label-loading i {
    display: inline-block;
    animation: rotate-loader 0.8s linear infinite;
}


.download-button.is-finished {
    background-color: #059669;
}

.download-button.is-finished .label-default {
    top: -100%;
    opacity: 0;
    transition: all 0.5s ease;
}

.download-button.is-finished .label-loading {
    top: -100%;
    opacity: 0;
}

.download-button.is-finished .label-success {
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    visibility: visible;
    animation: scale-check-icon 0.5s ease-out forwards;
}


@keyframes rotate-loader {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes scale-check-icon {
    0% {
        transform: translateY(-50%) scale(5);
        opacity: 0;
    }

    50% {
        transform: translateY(-50%) scale(0.2);
        opacity: 1;
    }

    75% {
        transform: translateY(-50%) scale(1.1);
    }

    100% {
        transform: translateY(-50%) scale(1);
        opacity: 1;
    }
}
</style>