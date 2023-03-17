<template>
    <div>
       <h4 v-if="!user">Login into your account in order to see the content</h4> 
    </div>
    <div v-for="books in bookInfo2" v-if="user && !anonymous">
        <img :src="`https://covers.openlibrary.org/b/isbn/${books.canonical_isbn}-M.jpg`" alt="Book cover" @error="errorImg">
        
        <p><span>TITLE: </span>{{ books.title }}</p>
        <p v-for="author in books.authors"><span>AUTHOR: </span>{{ author }}</p>
        <p><span>SYNOPSIS: </span>{{ books.summary }}</p>
        <p><span>PAGES: </span>{{ books.page_count }}</p>
        <p><span>COPYRIGHT:</span>{{ books.copyright }}</p>
        
        <a :href="`https://www.isbnsearcher.com/books/${books.canonical_isbn}`" target="_blank"><h5>Link to ISBN Search</h5></a>
    </div>
    <button class="btn btn-dark mt-5"><RouterLink to="/books" class="text-white">Go back to Books</RouterLink></button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

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
a {
    text-decoration: none;
}

button {
    text-decoration: none;
}
</style>