<template>
    <div>
       <h4 v-if="!user">Login into your account in order to see the content</h4> 
    </div>
    <div class="container" v-if="user && !anonymous">
        <div class="row">

            <div v-for="comic in comicList2">
                <div v-for="images in comic.images" class="col-12">
                    <img :src="images.path + '.' + images.extension" alt="">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-11 col-md-6 mt-5 border border-dark">
                            <h5 class="mt-2"><strong>IMFORMATION:</strong></h5>
                            <p class="mt-5"><strong>TITLE: </strong>{{ comic.title }}</p>
                            <p class="mt-5"><strong>SERIE: </strong>{{ comic.series.name }}</p>
                            <p class="mt-5"><strong>Pages: </strong>{{ comic.pageCount }}</p>
                        </div>


                        <div class="col-11 col-md-6 mt-5 border border-dark">
                            <h5 class="mt-2 mb-4"><strong>CREATORS:</strong></h5>
                            <div v-for="creators in comic.creators.items">
                                <p><strong>{{ creators.role }}:</strong> {{ creators.name }}</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div v-for="url in comic.urls" class="mt-5">
                    <a :href="url.url" target="_blank"><h5>Link to {{ url.type }}</h5></a>
                </div>
            </div>
        </div>
    </div>
    <button class="btn btn-dark mt-5"><RouterLink to="/marvel" class="text-white">Go back to Comics</RouterLink></button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { mapState } from '@/lib';

const route = useRoute();
const { user, anonymous} = mapState()

let comicList2 = ref('');

onMounted(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/comics/${route.params.id}?&ts=1&apikey=573085dec0a3a2c807faa226858f8f7a&hash=882d6694afbc6ec56320ac77f2417749`)
        .then(res => res.json())
        .then(data => {
            let comicList = ref('');
            comicList.value = data
            console.log(comicList.value)
            comicList2.value = comicList.value.data.results
            console.log(comicList2.value)
        })
        .catch(err => console.error(err));
})

</script>

<style scoped>
*{
    font-family: 'Caveat', cursive;
    font-size: 1.5rem;
}

img {
    height: 30rem;
}

a {
    text-decoration: none;
}

button {
    text-decoration: none;
}


</style>