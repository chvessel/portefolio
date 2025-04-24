<script setup>
import BlogCard from "@/components/cards/BlogCard.vue";
import FileCard from '@/components/cards/FileCard.vue';

</script>

<template>
<div class="card-positon">
    <FileCard></FileCard>
    <blog-card></blog-card>
</div>

</template>

<style>
.card-positon{
    margin: 70px 20px 30px 40px;
    display: flex;
    gap: 30px;
}

</style>