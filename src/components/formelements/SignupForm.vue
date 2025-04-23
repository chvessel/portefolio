<script setup>
   
</script>

<template>
  <div class="form">
    <div id="form-container">
      <div class="formular-card">
        <h1>Create an account</h1>
        <h3>To continue, fill out your personal info</h3>
        <form>
          <div>
            <label for="fullName">Full name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Name Surname">
          </div>

          <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="best_wizard421">
          </div>

          <div>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="email@email.com">
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
    

  
#form-container {
    width: 100%;
    padding: 10px;
    position: relative;
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
    margin-bottom: 40px;
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
    font-family: arial;
    margin-bottom: 5px;
    font-size: 15px;
    color: grey;
}

input {
    border-radius: 5px;
    border: 1px solid grey;
    padding: 13px 10px;
}

p {
    font-family: arial;
    color: rgb(19, 19, 164);
    font-size: 5px;
    margin-top: 20px;
}

.signup-button {
    background-color: rgb(65, 78, 201);
    border-radius: 10px;
    padding: 10px;
    color: white;
    border: none;
    cursor: pointer;
}
      
</style>