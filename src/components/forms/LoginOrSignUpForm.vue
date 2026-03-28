<script setup>
import { ref } from 'vue'

const isLoginMode = ref(true)

const toggleAuth = () => {
    isLoginMode.value = !isLoginMode.value
}

const handleAuthAction = () => {
    alert(isLoginMode.value ? "Logging in..." : "Creating account...")
}
</script>

<template>
    <div class="auth-container" :class="{ 'show-signup': !isLoginMode }">

        <div class="overlay-section">
            <div class="overlay-panel">
                <div class="overlay-content">
                    <h2>{{ isLoginMode ? 'New here?' : 'Welcome back!' }}</h2>
                    <p>
                        {{ isLoginMode
                            ? 'Join today and go explore.'
                            : 'Already have an account? Sign in right here.'
                        }}
                    </p>
                    <button class="switch-btn" @click="toggleAuth">
                        {{ isLoginMode ? 'Sign up' : 'Sign in' }}
                    </button>
                </div>
            </div>
        </div>

        <div class="form-panel login-form">
            <h2>Welcome back</h2>
            <div class="input-field">
                <input type="email" placeholder="email@example.com">
            </div>
            <div class="input-field">
                <input type="password" placeholder="••••••••">
            </div>
            <div class="form-options">
                <label><input type="checkbox"> Remember me</label>
            </div>
            <button class="signin-btn login-color" @click="handleAuthAction">Sign in</button>
                <a class="forgot" href="#">Forgot password?</a>
        </div>

        <div class="form-panel signup-form">
            <h2>Create account</h2>
            <div class="input-field">
                <input type="text" placeholder="Your name">
            </div>
            <div class="input-field">
                <input type="email" placeholder="email@example.com">
            </div>
            <div class="input-field">
                <input type="password" placeholder="Create password">
            </div>
            <button class="signin-btn signup-color" @click="handleAuthAction">Sign up</button>
        </div>

    </div>
</template>

<style scoped>
.auth-container {
    position: relative;
    width: 830px;
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    margin-top: 35px;
}

.form-panel {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: all 0.6s ease-in-out;
    background: #2c2c2c;
}

.login-form {
    left: 0;
    z-index: 2;
}

.signup-form {
    left: 0;
    opacity: 0;
    z-index: 1;
}

.show-signup .login-form {
    transform: translateX(100%);
    opacity: 0;
}

.show-signup .signup-form {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

.input-field {
    width: 100%;
    max-width: 280px;
    margin-bottom: 20px;
}

.input-field label {
    display: block;
    color: #959393;
    font-size: 0.8rem;
    margin-bottom: 5px;
}

.input-field input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #444;
    padding: 8px 0;
    color: white;
    outline: none;
    transition: border-color 0.3s;
}

.input-field input:focus {
    border-bottom: 1px solid #2a3bf9;
}

.forgot{
    color: grey;
    margin: 40px 0px 20px 0px;
    padding: none;
    font-size: 0.75rem;
}

.forgot:hover {
    justify-content: space-between;
    font-size: 0.77rem;
    color: #0dc9b3;
    background: none;
    margin: 40px 0px 20px 0px;
}

.overlay-section {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.show-signup .overlay-section {
    transform: translateX(-100%);
}

.overlay-panel {
    background: linear-gradient(144deg, #2a3bf9, #0dc9b3);
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.overlay-content {
    padding: 40px;
}

.overlay-content h2{
    padding: 6px;
    font-weight: bold;
    font-size: 1.5rem;
}

.signin-btn {
    width: 100%;
    max-width: 280px;
    padding: 12px;
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    background: #2a3bf9;
}

.signin-btn:hover {
    cursor: pointer;
    margin-top: 10px;
    background: #2294ff;
}


.signup-color {
    background: #0dc9b3;
}

.switch-btn {
    background: transparent;
    border: 2px solid white;
    padding: 10px 30px;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    margin-top: 40px;
    font-size: 1rem;
}

.switch-btn:hover{
    background-color: rgba(255, 255, 255, 0.275);
    font-size: 1.05rem;
}

.form-options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 280px;
    font-size: 0.75rem;
    color: #888;
    margin-bottom: 15px;
}

h2 {
    color: white;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 1.2rem;
}
</style>