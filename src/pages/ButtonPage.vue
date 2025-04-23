<script setup>
import SortFilter from "@/components/buttons/SortFilter.vue";
import SaveButton from "@/components/buttons/SaveButton.vue";
import OutlineButton from "@/components/buttons/OutlineButton.vue";
import ToggleButtons from "@/components/buttons/ToggleButtons.vue";
</script>

<template>
<div class="position">
    <save-button></save-button>
    <sort-filter></sort-filter>
    <outline-button></outline-button>
    <toggle-buttons></toggle-buttons>
</div>




</template>

<style scoped>
.position{
    margin: 70px 20px 30px 40px;
    display: flex;
    gap: 30px;
}

.toggle-buttons {
  position:absolute;
  top:15%;
  left:58%;
}
</style>