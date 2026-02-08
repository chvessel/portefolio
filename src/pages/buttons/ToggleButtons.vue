<script setup>
    
</script>

<template>
   <div class="toggle-buttons">
        <div class="toggle-btn">
            <input type="checkbox" id="toggle_btn">
            <label for="toggle_btn"></label>
        </div>
    </div>
</template>

<style scoped>

.toggle-btn {
  margin:20px;
}
.toggle-btn label {
  position:relative;
  display:block;
  width:100px;
  height:50px;
  background:#aaa;
  border-radius:30px;
  transition:all 200ms linear;
}
/* toggle kuglen */
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
}

.toggle-btn input:checked + label {
  background:rgb(43, 192, 65);
}

.toggle-btn input:checked + label:before {
  left:55px;
}

.toggle-btn input {
  display:none;
}
</style>