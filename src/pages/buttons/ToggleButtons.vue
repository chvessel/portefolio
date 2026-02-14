<script setup>
import DayNightToggle from '@/components/buttons/DayNightToggle.vue';
import RegularToggle from '@/components/buttons/RegularToggle.vue';


</script>

<template>
  <div class="toggle-buttons">

    <RegularToggle />
    <DayNightToggle />

  </div>
</template>

<style scoped>
.toggle-buttons {
  display: grid;
  grid-template-rows: 100px 300px;
  grid-template-columns: 1.5fr 1fr;
}
</style>