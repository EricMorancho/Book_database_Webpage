<template>
    <div>
       <h4 v-if="!user">Login into your account in order to see the content</h4> 
    </div>
    <div v-if="user && !anonymous">
        <img :src="imagen" alt="">

        <p><strong>TITLE: </strong>{{mangaInfo2.title}}</p>
        <p v-for="author in mangaInfo2.authors"><strong>AUTHOR: </strong>{{ author.name }}</p>
        <p><strong>BACKGROUND: </strong></p>
        <p class="ms-5 me-5 ps-5 pe-5 text-justify text-start">{{mangaInfo2.background}}</p>
        <p><strong>SYNOPSIS: </strong></p>
        <p class="ms-5 me-5 ps-5 pe-5 text-justify">{{mangaInfo2.synopsis}}</p>
        <p><strong>CHAPTERS: </strong>{{mangaInfo2.chapters}}</p>
        <p><strong>STATUS: </strong>{{mangaInfo2.status}}</p>
        <a :href="mangaInfo2.url" target="_blank"><h5>Link to MyAnimeList</h5></a>
    </div>
    <button class="btn btn-dark mt-5"><RouterLink to="/manga" class="text-white">Go back to Manga</RouterLink></button>
</template>

<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import { useRoute } from 'vue-router';
    import { mapState } from '@/lib';

    const route = useRoute();
    const {user, anonymous} = mapState()

    let mangaInfo = ref('');
    let mangaInfo2 = ref('');
    let imagen = ref('')
    let array = reactive([])

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