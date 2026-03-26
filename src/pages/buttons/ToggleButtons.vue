<script setup>
import DayNightToggle from '@/components/buttons/DayNightToggle.vue';
import RegularToggle from '@/components/buttons/RegularToggle.vue';
import ShiftToggle from '@/components/buttons/ShiftToggle.vue';
import FlipToggle from './FlipToggle.vue';
import ChooseToggle from './ChooseToggle.vue';


</script>

<template>
  <div class="toggle-buttons">

    <RegularToggle />
    <DayNightToggle />
    <ShiftToggle />
    <FlipToggle />
    <ChooseToggle />
  </div>
</template>

<style scoped>
.toggle-buttons {
  display: grid;
  grid-template-rows: 100px 300px;
  grid-template-columns: 1.5fr 1fr;
}
</style>