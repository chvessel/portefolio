<script setup>

</script>

<template>
    <div class="toggle-btn">
        <input type="checkbox" id="toggle_btn">
        <label for="toggle_btn"></label>
    </div>
</template>

<style scoped>

.toggle-btn label {
  position:relative;
  display:block;
  width:100px;
  height:50px;
  background:#aaa;
  border-radius:30px;
  transition:all 200ms linear;
}

.toggle-btn label:before {
  position:relative;
  content:"";
  width:40px;
  height:40px;
  background:#ddd;
  display:block;
  border-radius:50%;
  top:5px;
  left:6px;
  transition:all 200ms linear;
  cursor: pointer;
}

.toggle-btn input:checked + label {
  background:rgb(37, 172, 57);
}

.toggle-btn input:checked + label:before {
  left:55px;
}

.toggle-btn input {
  display:none;

}</style>