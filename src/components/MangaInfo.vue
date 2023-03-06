<template>
    <div>
        <img :src="imagen" alt="">

        <p><span>TITLE: </span>{{mangaInfo2.title}}</p>
        <p><span>BACKGROUND: </span>{{mangaInfo2.background}}</p>
        <p><span>SYNOPSIS: </span>{{mangaInfo2.synopsis}}</p>
        <p><span>CHAPTERS: </span>{{mangaInfo2.chapters}}</p>
        <p><span>STATUS: </span>{{mangaInfo2.status}}</p>
        <a :href="mangaInfo2.url" target="_blank">Link to MyAnimeList</a>

        
        
        
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

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

<style lang="scss" scoped>

</style>