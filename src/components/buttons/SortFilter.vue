<script setup>
</script>

<template>
    <div class="dropdown">
    <button class="dropbtn">
        Sortér efter 
        <font-awesome-icon class="icon" icon="fa-solid fa-angle-down" />
    </button>
    <div class="dropdown-content">
        <a href="#">Vis alle</a>
        <a href="#">Mest anvendte...</a>
        <a href="#">Nyeste</a>
        <a href="#">Ældste</a> 
        <a href="#">billigste</a>
    </div>
    </div>
</template>

<style scoped>
.dropbtn {
  background-color: #2b65b1;
  color: white;
  padding: 10px 25px;
  font-size: 16px;
  border: 2px solid rgb(30, 73, 166);
  border-radius: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: center;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border: 1px solid #d1d8d1;

}
.dropdown-content a:hover {
    background-color: #4b85d0;
    color: white;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.icon{
    margin-left: 5px;
}

</style>