<template>
    <div class="card">
        <RouterLink :to="{name: 'mangaInfo', params:{id: anime.mal_id}}">
            <img :src="anime.images.jpg.image_url" alt="Anime Poster Image">
            <h3><strong>{{ anime.title }}</strong></h3>
            <h3>{{ anime.authors[0].name }}</h3>
        </RouterLink>
    </div>
</template>

<script setup>


    const props = defineProps({
    anime: Object
});


</script>

<style scoped>
    .card {
        flex: 1 1 33%;
        width: 33%;
        max-width: 33%;
        padding: 0px 8px;
        margin: 16px 1px 16px 1px;
        border: 1px solid black; 
    }

    img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 16px;
            box-shadow: 0px 4px 8px rgb(0, 0, 0, 0.15);
            transition: 0.4s;
        }

    h3 {
        padding: 16px;
        color: #313131;
    }

    .card:hover {
        transform: scale(1.05);
    }

    h3:hover {
        color: #24C444;
    }

    a {
        text-decoration: none;
    }
    
</style>