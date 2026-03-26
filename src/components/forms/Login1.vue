<template>
    <div class="form-wrapper"> <div id="form-container">
            <div class="formular-card">
                <h1>Create an account</h1>
                <h3>To continue, fill out your personal info</h3>
                
                <form @submit.prevent> <div class="input-group">
                        <label for="fullName">Full name</label>
                        <input type="text" id="fullName" placeholder="Name">
                    </div>

                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" placeholder="Best_wizard421">
                    </div>

                    <div class="input-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="Email@email.com">
                    </div>

                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="************">
                    </div>

                    <div class="input-group">
                        <label for="repeatPassword">Repeat password</label>
                        <input type="password" id="repeatPassword" placeholder="************">
                    </div>

                    <p class="terms">
                        By clicking Continue, you agree to our Terms and
                        Conditions, confirm you have read our Policy Privacy
                        Notice
                    </p>

                    <button class="signup-button">Sign up</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

#form-container {
    width: 100%;
    max-width: 450px; 
    padding: 30px;
    background-color: white; 
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.formular-card {
    width: 100%;
}

h1 {
    font-family: Arial, sans-serif;
    font-size: 28px; 
    color: #333;
    text-align: center;
    margin-bottom: 10px;
}

h3 {
    font-family: Arial, sans-serif;
    font-size: 14px; 
    color: grey;
    text-align: center;
    margin-bottom: 30px;
}

form {
    display: grid;
    gap: 15px;
}

.input-group {
    display: flex;
    flex-direction: column;
}

label {
    font-family: Arial, sans-serif;
    margin-bottom: 5px;
    font-size: 14px;
    color: #666;
}

input {
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 12px;
    font-size: 16px; 
}

.terms {
    font-family: Arial, sans-serif;
    color: #777;
    font-size: 11px; 
    line-height: 1.4;
    margin: 10px 0;
}

.signup-button {
    background-color: rgb(64, 67, 241);
    border-radius: 8px;
    padding: 14px;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

.signup-button:hover {
    background-color: rgb(44, 47, 211);
}
</style>