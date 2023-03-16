<template>
    <div class="card ">
        <RouterLink :to="{name: 'comicInfo', params: {id: marvel.id}}">
            <img :src="marvel.thumbnail.path+'.'+marvel.thumbnail.extension " alt="">
            <h3>{{ marvel.title }}</h3>
        </RouterLink>   
    </div>
</template>

<script setup>

const props = defineProps({
marvel: Object
})


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


</style>