<script setup>
import RegisterForm from "@/components/formelements/RegisterForm.vue"
import CheckboxForm from "@/components/formelements/CheckboxForm.vue"
import SignupForm from "@/components/formelements/SignupForm.vue"
</script>

<template>
<signup-form></signup-form>
<register-form></register-form>
<checkbox-form></checkbox-form>
</template>

<style scoped>
.form {
  width: 70%;
  position: relative;
  left: 20px;
  top: 10px;
  background-color: rgb(231, 229, 229);
  min-height: 30rem;
  border-radius: 20px;
}

.contact_form{
    position:relative;
    left: 25rem;
    top: -42rem;
}
.checkbox-wrapper{
    position: relative;
    left: 25rem;
    top: -40rem;
}
</style>
