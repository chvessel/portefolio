<script setup>
</script>

<template>
    <button class="save-btn">
        <font-awesome-icon class="icon" icon="fa-regular fa-floppy-disk" />
        <p>Gem</p>
    </button>
</template>

<style scoped>
.save-btn{
    display: flex;
    background-color: #297d29;
    border: 2px solid rgb(28, 97, 15);
    border-radius: 20px;
    width: 6rem;
    height: 2.5rem;
    padding-right: 1.2rem;
    align-items: center;
    justify-content: space-between;
    color: white;
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);
    transition: all 250ms;
    cursor: pointer;
}
.save-btn:hover{
    background-color: #2aa32a
}

.icon{
    font-size: 1.5rem;
    margin-left: 0.5rem;
}
</style>