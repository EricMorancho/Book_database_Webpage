<template>
            <div class="col-12">
                <h4 v-if="!user">Login into your account in order to see the content</h4>
            </div>
            <div v-for="books in bookInfo2" v-if="user && !anonymous" class="col-12 col-md-12 offset-md-0">
                <img :src="`https://covers.openlibrary.org/b/isbn/${books.canonical_isbn}-M.jpg`" alt="Book cover"
                    @error="errorImg">

                <p class="mt-5 col-12"><strong>TITLE: </strong>{{ books.title }}</p>
                <p v-for="author in books.authors"><strong>AUTHOR: </strong>{{ author }}</p>
                <p><strong>SYNOPSIS: </strong></p>
                <p class="ms-1 me-3 ms-md-5 me-md-5 ps-md-5 pe-md-5 text">{{ books.summary }}</p>
                <p><strong>PAGES: </strong>{{ books.page_count }}</p>
                <p><strong>COPYRIGHT: </strong>{{ books.copyright }}</p>

                <a :href="`https://www.isbnsearcher.com/books/${books.canonical_isbn}`" target="_blank">
                    <h5>Link to ISBN Search</h5>
                </a>
            </div>
            <button class="btn btn-dark mt-5 mb-5">
                <RouterLink to="/books" class="text-white">Go back to Books</RouterLink>
            </button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { mapState } from '@/lib';

const route = useRoute();
const { user, anonymous } = mapState()

let bookInfo = ref('');
let bookInfo2 = ref('');

onMounted(() => {

    fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${route.params.title}&results_per_page=1`, options)
        .then(response => response.json())
        .then((data) => {
            bookInfo.value = data
            console.log(bookInfo.value)
            bookInfo2.value = bookInfo.value.results
            console.log(bookInfo2.value)
        })
        .catch(err => console.error(err));
})

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '50e00edb91msha28d25e2fd677cap158ff8jsn08fd7406bb83',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
    }
};
</script>

<style scoped>
*{
    font-family: 'Caveat', cursive;
    font-size: 1.5rem;
}

a {
    text-decoration: none;
}

button {
    text-decoration: none;
    
}

.container {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}


</style>