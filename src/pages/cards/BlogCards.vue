<script setup>
// filecard 
defineProps({
    title: String,
    date: String
})
</script>

<template>
    <!-- blogcard -->
    <div class="card-container">
        <div class="top">
            <img src="../../media/coding.jpg" alt="picture of code">
        </div>
        <div class="bottom">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
            <button>læs mere</button>
        </div>
    </div>

    <!-- filecard -->
    <div class="file-card">
        <div class="file-card-icon">
            <font-awesome-icon :icon="['far', 'file']" />
        </div>
        <button class="menu-icon">
            <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
        </button>
        <h3>{{ title }}</h3>
        <div class="file-card__date">
            <font-awesome-icon :icon="['fas', 'calendar-days']" />
            <span> Gemt den: <br>{{ date }}</span>
        </div>
    </div>

</template>

<style scoped>
/* blogcard */
.card-container {
    background-color: rgb(226, 226, 221);
    height: 18rem;
    width: 17rem;
    border-radius: 15px;
    position: relative;
}
.card-container .bottom h3{
    color: black;
    margin-top: 0;
}

img {
    width: 100%;
}

h3 {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    padding: 15px;
}

button {
    border-radius: 10px;
    padding: 10px 20px;
    border: 2px solid rgb(209, 122, 15);
    background-color: rgb(206, 105, 23);
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
}

/* filecard */

.file-card {
    background: #55ac91;
    margin: 50px 0 0 0;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: inset 0px 2px 4px rgba(101, 101, 101, 0.2);
    height: 10rem;
    width: 9rem;
    position: relative;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.file-card-icon {
    position: absolute;
    left: 20px;
}

.menu-icon {
    position: absolute;
    right: 15px;
    border: none;
    background-color: #55ac91;
    color: white;
}

h3 {
    color: white;
    margin-top: 2.5rem;
    font-weight: lighter;

}

.file-card__date {
    position: absolute;
    bottom: 15px;
}

.file-card__date svg {
    margin-top: 3.5rem;
    font-size: 13px;
}

.file-card__date span {
    margin-top: 3.5rem;
    font-size: 13px;
}
</style>
