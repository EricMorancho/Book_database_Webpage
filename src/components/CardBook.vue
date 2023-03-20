<template>
    <div class="card ">
        <RouterLink :to="{ name: 'bookInfo', params: { title: lib.title } }">

            <img :src="`https://covers.openlibrary.org/b/isbn/${lib.canonical_isbn}-M.jpg`" alt="Book cover"
                @error="errorImg">
            <h3><strong>{{ lib.title }}</strong></h3>
            <h3 v-for="author in lib.authors">{{ author }}</h3>
        </RouterLink>
    </div>
</template>

<script setup>
import img from '@/assets/cover_not_avayable.jpg'

const props = defineProps({
    lib: Object
})



const errorImg = (e) => {
    e.target.src = img
}
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
    height: 40rem;
    object-fit: cover;
    border-radius: 16px;
    margin-top: 1rem;
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

@media (max-width: 600px) {
    .card {
        flex: 1 1 100%;
        width: 100%;
        max-width: 100%;
        padding: 0px 8px;
        margin: 5px 1px 5px 1px;
        border: 1px solid black;
    }

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        border-radius: 10px;
        margin-top: 1rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 0, 0.15);
        transition: 0.4s;
    }
}
</style>