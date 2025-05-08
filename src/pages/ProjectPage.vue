<script setup>
   
</script>

<template>
    <div class="intro-container">
        <h1>Her vil du/i kunne se projekter jeg har lavet i forbindelse med mit studie som webudvikler, men også egne hobby projekter som jeg som webudvikler har udviklet.</h1>
    </div>
    <div class="projects-container">
        <div class="project-box project-box--large">
            <h2># Dashboard projekt 1</h2>
            <br>
            <a href="https://github.com/Isabella1807/kubeFrontend" class="link-btn">KubeFrontend</a>
            <a href="https://github.com/Isabella1807/kubeBackend" class="link-btn">KubeBackend</a>
            <br>
            <br>
            <h3>I dette studieprojekt havde vi fået til opgave både at skulle designe og kode dashboard.
                Af teknologi er der blevet brugt Vue.js og Scss.
            </h3>
        </div>
        <div class="project-box">
            <h2># Dashboard projekt 2</h2>
            <a href=""></a>
            <br>
            <h3>I dette studieprojekt havde vi fået til opgave, at skulle kode et design som andre havde stået for at lave. Her handlede det derfor om 
                at få kodet designet om til en teknisk løsning.
                Af teknologi er der blevet brugt Vue.js og Css.
            </h3>
        </div>
    </div>
 

</template>


<style scoped>
.projects-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 columns */
  gap: 1rem;
  grid-auto-flow: dense;
}

.project-box--large{
    grid-column: span 2;
}

.intro-container{
    border: 2px solid rgb(99, 103, 102);
    border-radius: 25px;
    padding: 1rem;
    margin-top: 1rem;
    background-color: rgb(48, 48, 47);
}

.project-box{
    border: 2px solid rgb(103, 202, 10);
    border-radius: 25px;
    padding: 1rem;
    margin-top: 1rem;
}

.link-btn{
    color: white;
    background-color: rgb(21, 174, 123);
    padding: 0.3rem;
    border-radius: 8px;
    margin-left: 0.5rem;
}

.link-btn:first-of-type{
    margin-left:0;
}

</style>