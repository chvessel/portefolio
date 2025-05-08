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
            <h3>I dette projekt havde vi fået til opgave at udvikle et dashboard til styring
                 og drift af containere for brugere af et dashboard.
                 Dashboardet skulle give brugerne mulighed for at kunne starte 
                 og stoppe containere samt overvåge status.
                Af teknologi er der blevet brugt Vue.js og Sass/Scss.
            </h3>
        </div>
        <div class="project-box">
            <h2># Dashboard projekt 2</h2>
            <br>
            <a href="https://github.com/SebbeDK/DBI-egenkontrol" class="link-btn">Dashboard</a>
            <br>
            <br>
            <h3>I dette projekt skulle vi kode et design som andre havde stået for at lave. 
                Den kodede udgave, måtte ikke afvige fra det givne design, men fokuseres på kodestruktur.
                Af teknologi er der blevet brugt Vue.js og Css.
            </h3>
        </div>
        <div class="project-box">
            <h2># Todo app</h2>
            <br>
            <a href="https://github.com/chvessel/ToDo_v1" class="link-btn">To-do app</a>
            <br>
            <br>
            <h3>En simpel To-do app hvor man kan se sin liste af ting og redigere i dem,
                 slette opgaver og tilføje nye opgaver.
                 Af teknologi er er blevet brugt Vue 3 og Scss/Sass.
            </h3>
        </div>
        <div class="project-box project-box--large">
            <h2># Pet adoption shop</h2>
            <br>
            <a href="https://github.com/chvessel/petshop" class="link-btn">Pet adopt shop</a>
            <br>
            <br>
            <h3>Her har jeg oprettet en kæledyrsportal hvor det er muligt, at se kæledyr der er til adoption.
                Derudover kan man også læse mere detajleret om dem hver især og tilføje nye dyr + 
                man kan se om et kæledyr er blevet adopteret. 
                Af teknologi er der blevet brugt Vite, Vue 3 samt firebase. 
            </h3>
        </div>
    </div>
 

</template>


<style scoped>
.projects-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 columns */
  gap: 0.2rem 1rem;
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