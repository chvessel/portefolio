<script setup>
   
</script>

<template>
   <div class="card-container">
    <div class="top">
        <img src="../../media/coding.jpg" alt="picture of code">
    </div>
    <div class="bottom">
        <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
        <button>læs mere</button>
    </div>
   </div>
</template>

<style scoped>
.card-container{
    background-color: beige;
    height: 18rem;
    width: 17rem;
    border-radius: 15px;
    position: relative;
}

img{
width: 100%;
}

h3{
    font-family:Arial, Helvetica, sans-serif;
    color: black;
    padding: 15px;
}

button{
    border-radius: 10px;
    padding: 10px 20px;
    border: 2px solid rgb(173, 128, 69);
    background-color: rgb(190, 153, 104);
    font-family:Arial, Helvetica, sans-serif;
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
}
</style>