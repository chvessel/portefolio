<script setup>
   
</script>

<template>
   <div class="card-container">
    <div class="top">
        <img src="../../media/coding.jpg" alt="">
    </div>
    <div class="bottom">
        <h3>her er noget tekst</h3>
        <button>læs mere</button>
    </div>
   </div>
</template>

<style scoped>
.card-container{
    display: flex;
    background-color: beige;
    height: 20rem;
    width: 20rem;
    border-radius: 15px;
    position: relative;
}

.top{

}

img{
width: 100%;
}

.bottom{

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
}
</style>