<script setup>
    
</script>

<template>
    <div class="contact_form">
  
    <h1>Sign up here!</h1>
    
    <div class="form-control--pair">
        <div class="form-control">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname">
        </div>
        <div class="form-control">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname">
        </div>  
        </div>
        <div class="form-control">
            <label for="email">Email Adress</label>
            <input type="text" id="email" name="email">
        </div>
        <div class="form-control">
            <label for="account">Account Number</label>
            <input type="text" id="account" name="account">
        </div>
        <div class="form-control">
            <label for="routing">Routing Number</label>
            <input type="text" id="routing" name="routing">
        </div>
        <div class="form-control">
            <label for="date">Start date</label>
            <input type="date" id="date">
        </div>
        
        <button input type="submit" value="Submit">Register now</button>
    </div>
</template>

<style scoped>

.contact_form{
  background-color: white;
  border-radius:5px;
  color: rgb(106, 106, 106);
  font-family: arial;
  padding: 20px;
  width: 350px;
  margin-top: 3rem;
}
  
h1{
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;

}
  
.form-control--pair{
    display:flex;
}
  
.form-control{
    margin: 10px;
}

label{
    font-family: arial;
    font-size: 12px;
} 

input{
    display:block;
    border:none;
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: none;
    width:100%;
    padding: 5px 0;
    font-family: arial;
} 

input [type="date"]{
    margin-bottom:40px;
}

button{
  background-color: #e8821c;
  border: none;
  border-radius: 6px;
  font-family: arial;
  padding: 15px 30px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
}
</style>