<script setup>
import { ref } from 'vue';

const progress = ref(0);
const isSaving = ref(false); 
const isSuccess = ref(false);

const startSaving = () => {
    if (isSaving.value || isSuccess.value) return;

    isSaving.value = true; 
    progress.value = 0;

    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += 1;
        } else {
            clearInterval(interval);
            isSaving.value = false;
            isSuccess.value = true;

            setTimeout(() => {
                isSuccess.value = false;
                progress.value = 0;
            }, 10000);
        }
    }, 100);
}; 
</script>

<template>
    <div class="container">
        <button 
            class="save-button" 
            :class="{
                'is-saving': isSaving,
                'is-success': isSuccess
            }" 
            :disabled="isSaving || isSuccess" 
            @click="startSaving" 
            :style="{ '--progress': progress + '%' }"
        >
            <span v-if="!isSaving && !isSuccess">Save</span>
            <span v-else-if="isSaving">Saving {{ progress }}%</span>
            <span v-else>Success!</span>

            <div v-if="isSaving" class="progress-bar"></div>
        </button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    margin-left: -50px;
    align-items: center;
    min-height: 100px;
    padding: 50px;
}

.save-button {
    position: relative;
    width: 180px;
    height: 50px;
    background-color: #2a2a2a;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.10s ease; 
}

.save-button:hover:not(:disabled) {
    width: 200px; 
    height: 60px;
    background-color: #5f5f5f;
}

.save-button:disabled {
    cursor: not-allowed;
    width: 200px;
    height: 50px;
}

.save-button.is-success {
    background-color: #28a745;
}

.progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8px;
    background-color: #4CAF50;
    width: var(--progress);
    transition: width 0.10s linear; 
}

.save-button span {
    position: relative;
    z-index: 1;
}
</style>