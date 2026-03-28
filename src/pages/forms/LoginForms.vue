<script setup>
import FormToggle from '@/components/forms/FormToggle.vue';
import Login1 from '@/components/forms/Login1.vue';
import LoginOrSignUpForm from '@/components/forms/LoginOrSignUpForm.vue';


</script>

<template>
  <div class="login-forms">
    <Login1 />
    <FormToggle />
    <LoginOrSignUpForm />
  </div>
</template>

<style scoped>
.login-forms {
  display: flex;
  margin: 40px 40px 40px 40px;
  width: 90%;
}
  </style>