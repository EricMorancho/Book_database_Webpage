<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 v-if="!user">Login into your account in order to see the content</h4>
            </div>
            <div v-if="user && !anonymous" class="col-10 offset-1 col-md-12 offset-md-0">
                <img :src="imagen" alt="" class="mb-5">
                <p><strong>TITLE: </strong>{{ mangaInfo2.title }}</p>
                <p v-for="author in mangaInfo2.authors"><strong>AUTHOR: </strong>{{ author.name }}</p>
                <p><strong>BACKGROUND: </strong></p>
                <p class="ms-1 me-3 ms-md-5 me-md-5 ps-md-5 pe-md-5 text">{{ mangaInfo2.background }}</p>
                <p><strong>SYNOPSIS: </strong></p>
                <p class="ms-1 me-3 ms-md-5 me-md-5 ps-md-5 pe-md-5 text">{{ mangaInfo2.synopsis }}</p>
                <p><strong>CHAPTERS: </strong>{{ mangaInfo2.chapters }}</p>
                <p><strong>STATUS: </strong>{{ mangaInfo2.status }}</p>
                <a :href="mangaInfo2.url" target="_blank">
                    <h5>Link to MyAnimeList</h5>
                </a>
            </div>
            <button class="btn btn-dark mt-5 mb-5 col-6 offset-3 col-md-4 offset-md-4">
                <RouterLink to="/manga" class="text-white">Go back to Manga</RouterLink>
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { mapState } from '@/lib';

const route = useRoute();
const { user, anonymous } = mapState()

let mangaInfo = ref('');
let mangaInfo2 = ref('');
let imagen = ref('')


onMounted(() => {
    fetch(`https://api.jikan.moe/v4/manga/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
            mangaInfo.value = data;
            mangaInfo2.value = mangaInfo.value.data
            console.log(mangaInfo2.value)
            imagen.value = mangaInfo2.value.images.jpg.image_url
        })
})

</script>

<style scoped>
a {
    text-decoration: none;
}

button {
    text-decoration: none;
}


</style>