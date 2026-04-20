<script setup>
import { ref } from 'vue';
import ProjectGallery from '@/components/projects/ProjectGallery.vue';

const expanded = ref({
    dash1: false,
    pet: false,
    todo: false,
    dash2: false
});

const toggle = (id) => {
    expanded.value[id] = !expanded.value[id];
};

const dashboard1Photos = [
    { id: 1, filename: "Login_picture.png", date: "Login" },
    { id: 2, filename: "Frontpage_picture.png", date: "Frontpage" },
    { id: 3, filename: "Dashboard_lightmode.png", date: "Light mode" },
    { id: 4, filename: "Dashboard_darkmode.png", date: "Dark mode" }
];

const petPhotos = [
    { id: 1, filename: "Frontpage_petshop.png", date: "Frontpage" },
    { id: 2, filename: "Petlist_petshop.png", date: "List" },
    { id: 3, filename: "Petcard_petshop.png", date: "Card" },
    { id: 4, filename: "Add_pet_petshop.png", date: "Add" }
];

const todoPhotos = [
    { id: 1, filename: "xxxx.png", date: "xxx" }
];

const dashboard2Photos = [
    { id: 1, filename: "xxx.png", date: "xxx" },
    { id: 2, filename: "xxx.png", date: "xxx" }
];
</script>

<template>
    <div class="projects-container">

        <div class="project-box project-box--large">
            <div class="project-header">
                <div class="project-title-area">
                    <h2># Dashboard - Kubelab</h2>
                    <div class="button-group">
                        <a href="https://github.com/Isabella1807/kubeFrontend" target="_blank" class="link-btn">Frontend
                            code</a>
                        <a href="https://github.com/Isabella1807/kubeBackend" target="_blank" class="link-btn">Backend
                            code</a>
                    </div>
                </div>
                <ProjectGallery :photos="dashboard1Photos" />
            </div>

            <div class="project-description">
                <h3>
                    I dette projekt udviklede min gruppe og jeg et dashboard til containerstyring med fokus på at skabe
                    et intuitivt interface til komplekse backend-processer.
                    Her var det vigtigt at der blev lagt vægt på at gøre brugeroplevelsen let for "ikke-tekniske"
                    brugere.
                    <span v-if="expanded.dash1" class="process-text">
                        <br><br>
                        <strong>Processen:</strong> For at sikre øjeblikkelige statusopdateringer er der blevet arbejdet
                        med reaktivitet i Vue.
                        Udfordringen var at gøre teknisk data overskuelig, hvilket lykkedes via et rent design og
                        konsistente SCSS-komponenter.
                    </span>
                </h3>
                <button class="read-more-btn" @click="toggle('dash1')">
                    {{ expanded.dash1 ? 'Vis mindre' : 'Læs om processen' }}
                </button>
            </div>
        </div>

        <div class="project-box">
            <div class="project-header project-header--column">
                <div class="project-title-area">
                    <h2># Kæledyrsportal</h2>
                    <div class="button-group">
                        <a href="https://github.com/chvessel/petshop" target="_blank"
                            class="link-btn">Kæledyrsportal</a>
                    </div>
                </div>
                <ProjectGallery :photos="petPhotos" folder="petshop" class="mt-2" />
            </div>
            <div class="project-description">
                <h3>
                   Dette var en opgave som mest af alt gik ud på, at blive fortrolig med integrationen af firebase som backend. 
                   Der er derfor heller ikke lagt de fleste kræfter i designet af projektet, men derimod fokuseret på logikken. 
                    <span v-if="expanded.petshop" class="process-text">
                        <br><br>
                        <strong>Processen:</strong> Her lå udfordringen med at få dataen fra firebase til at snakke med, vores petshop.
                        At få den til at vise de korrekte data, samt reagere på CRUD efterspørgsler. 
                    </span>
                </h3>
                <button class="read-more-btn" @click="toggle('petshop')">
                    {{ expanded.dash1 ? 'Vis mindre' : 'Læs om processen' }}
                </button>
            </div>
        </div>


        <div class="project-box">
            <div class="project-header project-header--column">
                <h2># Todo liste</h2>
                <div class="button-group">
                    <a href="https://github.com/chvessel/ToDo_v1" target="_blank" class="link-btn">To-do liste</a>
                </div>
                <ProjectGallery :photos="todoPhotos" class="mt-2" />
            </div>
            <div class="project-description">
                <h3>
                    En klassisk øvelse i CRUD-funktionalitet, hvor jeg implementerede følgende; oprettelse, redigering
                    og sletning af data.
                    <span v-if="expanded.todo" class="process-text">
                        <br><br>
                        <strong>Processen:</strong> Ved at bruge Vue 3's reaktive system lærte jeg at håndtere state
                        effektivt, så brugeroplevelsen føltes hurtig og fejlfri.
                    </span>
                </h3>
                <button class="read-more-btn" @click="toggle('todo')">
                    {{ expanded.todo ? 'Vis mindre' : 'Læs om processen' }}
                </button>
            </div>
        </div>

        <div class="project-box project-box--large">
            <div class="project-header">
                <div class="project-title-area">
                    <h2># Dashboard - Portfolio </h2>
                    <div class="button-group">
                        <a href="/" target="_blank" class="link-btn">Dashboard</a>
                    </div>
                </div>
                <ProjectGallery :photos="dashboard2Photos" />
            </div>
            <div class="project-description">
                <h3>
                    tekst kommer senere
                    <span v-if="expanded.dash2" class="process-text">
                        <br><br>
                        <strong>Processen:</strong> tekst kommer senere.
                    </span>
                </h3>
                <button class="read-more-btn" @click="toggle('dash3')">
                    {{ expanded.dash2 ? 'Vis mindre' : 'Læs om processen' }}
                </button>
            </div>
        </div>


    </div>
</template>

<style lang="scss">
.projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2rem;
}

.project-box--large {
    grid-column: span 2;
}

.project-box {
    border: 4px dotted rgb(134, 134, 134);
    border-radius: 15px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.project-header--column {
    flex-direction: column;
    align-items: flex-start;
}

.button-group {
    margin: 1rem 0;
}

.link-btn {
    color: white;
    background-color: rgb(36, 134, 102);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-decoration: none;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    display: inline-block;

    &:hover {
        background-color: darken(rgb(36, 134, 102), 10%);
    }
}

.project-description h3 {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: #ffffff;
}

.process-text {
    display: block;
    color: #e4e4e4;
    font-style: normal;

    strong {
    font-weight: 800; 
    font-style: normal; 
    color: rgb(36, 134, 102); 
    font-size: 1.1rem;
  }
}

.read-more-btn {
    background: none;
    border: none;
    color: rgb(36, 134, 102);
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
    padding: 0;
    text-align: left;
    font-size: 1rem;

    &:hover {
        color: white
    }
}

.mt-2 {
    margin-top: 1rem;
}
</style>