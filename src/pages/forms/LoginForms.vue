<script setup>
import FormToggle from '@/components/forms/FormToggle.vue';
import Login1 from '@/components/forms/Login1.vue';


</script>

<template>
  <div class="login-forms">

    <Login1 />
    <FormToggle />
  </div>
</template>

<style scoped>
.login-forms {
  display: grid;
  grid-template-rows: 100px 300px;
  grid-template-columns: 1.5fr 1fr;
}
</style>