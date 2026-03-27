<script setup>
import { ref, computed } from 'vue';

const currentStep = ref(1);
const totalSteps = 4;

const form = ref({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
});

const progressPercentage = computed(() => {
    return ((currentStep.value - 1) / (totalSteps - 1)) * 100;
});

const goToNextStep = () => {
    if (currentStep.value < totalSteps) currentStep.value++;
};

const goToPreviousStep = () => {
    if (currentStep.value > 1) currentStep.value--;
};

const submitForm = () => {
    console.log('Form Data Submitted:', form.value);
    alert('Registration Successful!');
};
</script>

<template>
    <div class="registration-container">
        <div class="form-card">
            <h2 class="title">Create account</h2>
            <p class="subtitle">Step {{ currentStep }} of {{ totalSteps }}</p>


            <nav class="stepper">
                <ul class="step-list">
                    <li :class="{ active: currentStep >= 1 }"><span>Account</span></li>
                    <li :class="{ active: currentStep >= 2 }"><span>Personal</span></li>
                    <li :class="{ active: currentStep >= 3 }"><span>Files</span></li>
                    <li :class="{ active: currentStep >= 4 }"><span>Finish</span></li>
                </ul>
                <div class="progress-track">
                    <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
                </div>
            </nav>

            <form @submit.prevent class="multi-step-form">

                <section v-if="currentStep === 1" class="form-step">
                    <h3 class="step-title">Account details</h3>
                    <div class="input-group">
                        <input type="email" v-model="form.email" placeholder="Email" />
                    </div>
                    <div class="input-group">
                        <input type="text" v-model="form.username" placeholder="Username" />
                    </div>
                    <div class="input-group">
                        <input type="password" v-model="form.password" placeholder="Password" />
                    </div>
                    <div class="input-group">
                        <input type="password" v-model="form.confirmPassword" placeholder="Repeat password" />
                    </div>
                    <div class="button-actions">
                        <button type="button" class="btn btn-next" @click="goToNextStep">Next Step</button>
                    </div>
                </section>

                <section v-if="currentStep === 2" class="form-step">
                    <h3 class="step-title">Personal info</h3>
                    <div class="input-group">
                        <input type="text" v-model="form.firstName" placeholder="First name" />
                    </div>
                    <div class="input-group">
                        <input type="text" v-model="form.lastName" placeholder="Last name" />
                    </div>
                    <div class="input-group">
                        <input type="tel" v-model="form.phone" placeholder="Phone number" />
                    </div>
                    <div class="button-actions">
                        <button type="button" class="btn btn-prev" @click="goToPreviousStep">Back</button>
                        <button type="button" class="btn btn-next" @click="goToNextStep">Next step</button>
                    </div>
                </section>

                <section v-if="currentStep === 3" class="form-step">
                    <h3 class="step-title">File upload</h3>
                    <div class="input-group">
                        <input type="file" accept="image/*" />
                    </div>
                    <div class="button-actions">
                        <button type="button" class="btn btn-prev" @click="goToPreviousStep">Back</button>
                        <button type="button" class="btn btn-submit" @click="goToNextStep">Finish</button>
                    </div>
                </section>

                <section v-if="currentStep === 4" class="form-step success-screen">
                    <h3 class="step-title">Success!</h3>
                    <p>Congratulation! <br> Your account has been created successfully.</p>
                    <button type="button" class="btn btn-next" @click="submitForm">Go to dashboard</button>
                </section>

            </form>
        </div>
    </div>
</template>

<style scoped>
.registration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 20px;
    width: 100%; 
    margin: 50px 50px 0px -100px;
}

.form-card {
    background: white;
    width: 100%;
    max-width: 500px;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    text-align: center;
    margin-bottom: 40px;
}

.title {
    color: #24cd54;
    font-size: 30px;
    margin: 20px 40px 10px 40px;
}

.subtitle {
    color: #888;
    font-size: 0.7rem;
    margin: 10px 40px 60px 40px;
}


.stepper {
    margin-bottom: 30px;
    position: relative;
}

.step-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
}

.step-list li {
    font-size: 0.75rem;
    font-weight: 500;
    color: #ccc;
    text-transform: capitalize;
}

.step-list li.active {
    color: #24cd54;
}

.progress-track {
    height: 15px;
    background: #eee;
    border-radius: 50px;
}

.progress-bar {
    height: 100%;
    background: #24cd54;
    transition: width 0.4s ease-in-out;
}

.form-step {
    display: flex;
    flex-direction:
        column;
    gap: 20px;
}

.step-title {
    color: #a6a6a6;
    font-size: 16px;
    margin: 0;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-group input {
    padding: 12px 0;
    border: none;
    border-bottom: 2px solid #ececec;
    background: transparent;
    font-size: 16px;
    color: #586d83;
    outline: none;
    transition: all 0.3s ease;
}

.input-group input:focus {
    border-bottom: 2px solid #24cd54;
}

.input-group input:focus::placeholder {
    color: transparent;
}

.button-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 40px;
}

.btn {
    padding: 10px 25px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
}

.btn-next {
    background: #24cd54;
    color: white;
}

.button-actions .btn-next:hover {
    color: #24cd54;
    border: 2px solid #24cd54;
    background-color: white;
}

.btn-prev {
    background: #eee;
    color: #666;
}

.btn-prev:hover {
    color: #24cd54;
    border: 2px solid #24cd54;
    background-color: white;
}

.btn-submit {
    background: #24cd54;
    color: white;
}

.success-screen {
    text-align: center;
    color: grey;
    font-weight: 800;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 60px 40px 10px 40px;
}
</style>