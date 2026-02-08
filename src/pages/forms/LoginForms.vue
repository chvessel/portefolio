<script setup>

</script>

<template>
    <!-- signupform -->
<div class="form">
    <div id="form-container">
      <div class="formular-card">
        <h1>Create an account</h1>
        <h3>To continue, fill out your personal info</h3>
        <form>
          <div>
            <label for="fullName">Full name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Name">
          </div>

          <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Best_wizard421">
          </div>

          <div>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Email@email.com">
          </div>

          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="************">
          </div>

          <div>
            <label for="repeatPassword">Repeat password</label>
            <input type="password" id="repeatPassword" name="repeatPassword" placeholder="************">
          </div>

          <p>By clicking Continue, you agree to our Terms and
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
    /*signupform*/ 
#form-container {
    width: 90%;
    height: 10%;
    padding: 10px;
    position: relative;
    background-color: rgb(220, 220, 220);
    border-radius: 20px;
}

.formular-card {
    width: 80%;
    margin: 0 auto;
}

h1 {
    font-family: arial;
    font-size: 40px;
    color: black;
    text-align: center;
    margin-top: 1rem;
}

h3 {
    font-family: arial;
    font-size: 5px;
    color: grey;
    text-align: center;
    margin-bottom: 30px;
}
        
form {
    display: grid;
    gap: 20px;
    border-radius: 30px;
    max-width: 40em;
}

div {
    display: flex;
    flex-direction: column;
}

label {
    font-family:Arial, Helvetica, sans-serif;
    margin-bottom: 2px;
    font-size: 15px;
    color: grey;
}

input {
    border-radius: 10px;
    border: 1px solid grey;
    padding: 13px 15px;
}

p {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(63, 63, 64);
    font-size: 5px;
    margin-top: 10px;
}

.signup-button {
    background-color: rgb(64, 67, 241);
    border-radius: 10px;
    padding: 10px;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
}
      
</style>