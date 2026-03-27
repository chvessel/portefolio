<script setup>
import { ref } from 'vue'

const currentStep = ref(2)

const steps = ref([
    { id: 1, label: 'Billing info' },
    { id: 2, label: 'Payment method' },
    { id: 3, label: 'Checkout' },
    { id: 4, label: 'Success' }
])

const getStepStatus = (stepId) => {
    if (stepId === currentStep.value) return 'is-active'
    if (stepId > currentStep.value) return 'is-upcoming'
    return 'is-completed'
}
</script>

<template>
    <section class="wizard-container">
        <ul class="wizard-list">
            <li v-for="step in steps" :key="step.id" class="wizard-item" :class="getStepStatus(step.id)">
                <span class="step-indicator">{{ step.id }}</span>
                <span class="step-label">{{ step.label }}</span>
            </li>
        </ul>

        <div class="wizard-controls">
            <button @click="currentStep--" :disabled="currentStep <= 1">Previous</button>
            <button @click="currentStep++" :disabled="currentStep >= steps.length">Next</button>
        </div>
    </section>
</template>

<style scoped>
.wizard-container {
    width: 100%; 
    padding: 20px 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.wizard-list {
   background: #fff;
    box-shadow: 0 15px 25px rgba(143, 119, 119, 0.1);
    display: flex;
    padding: 20px;
    border-radius: 10px;
    list-style: none;
    margin: 0 auto; 
    max-width: fit-content;
}

.wizard-item {
    padding: 0 20px;
    flex: 1;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.wizard-item+.wizard-item:after {
    content: "";
    position: absolute;
    left: 0;
    top: 24px;
    background: #fdb021;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    z-index: 1;
}

.step-indicator {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    font-size: 20px;
    position: relative;
    z-index: 10;
    background: #fdb021;
    color: white;
    transition: all 0.3s ease;
}

.step-label {
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
    color: #333333;
}

.is-completed .step-indicator {
    color: transparent;
}

.is-completed .step-indicator:before {
    content: "";
    height: 10px;
    width: 20px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    position: absolute;
    transform: translate(0, -2px) rotate(-45deg);
}

.is-active .step-indicator {
    background: #ffd484;
    border: 2px solid #fdb021;
    color: white;
}

.is-upcoming .step-indicator {
    background: #fdb021;
    width: 14px;
    height: 14px;
    margin: 17.5px 0;
    color: transparent;
}

.is-upcoming .step-label {
    opacity: 0.5;
}

.wizard-controls {
    margin-top: 20px;
    text-align: center;
}

button {
    padding: 10px 30px 10px 40px;
    margin: 0 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    background: white;
    border-radius: 18px;
}

button:hover {
    padding: 10px 30px 10px 40px;
    margin: 0 10px;
    cursor: pointer;
    color: white;
    background: #fdb021;
    border-radius: 18px;
    font-weight: 800;
    border: none;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>