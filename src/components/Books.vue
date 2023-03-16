<template>
  <div>
    <header>
      <h1>The <strong>Book</strong> Database</h1>
    </header>

    <form class="search-box" @submit.prevent="handleSearch">
      <input type="search" class="search-field" placeholder="Search for a book..." v-model="search_query2" required>
    </form>

    <main>
      <div class="cards">
        <CardBook v-for="(lib, index) in libros2" :key="index" :lib="lib" />
      </div>
    </main>

	<button class="btn" @click="showMore()">Show More</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CardBook from './CardBook.vue';


let search_query2 = ref('')
let libros = ref('');
let libros2 = ref('');
let page = 25;

const handleSearch = async () => {
  await fetch(`https://book-finder1.p.rapidapi.com/api/search?author=${search_query2.value.replace(" ", "%20")}&results_per_page=25&page=1`, options)
    .then(response => response.json())
    .then((data) => {
      libros.value = data
		console.log(libros.value)
      libros2.value = libros.value.results
      console.log(libros2.value)
    })
    .catch(err => console.error(err));
}

const showMore = async () => {
	page += 25;
	await fetch(`https://book-finder1.p.rapidapi.com/api/search?author=${search_query2.value.replace(" ", "%20")}&results_per_page=${page}`, options)
    .then(response => response.json())
    .then((data) => {
      libros.value = data
		console.log(libros.value)
      libros2.value = libros.value.results
      console.log(libros2.value)
    })
    .catch(err => console.error(err));
}






const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '50e00edb91msha28d25e2fd677cap158ff8jsn08fd7406bb83',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira Sans', sans-serif;
}

a {
	text-decoration: none;
}

header {
	padding-top: 50px;
	padding-bottom: 50px;
}

h1 {
	color: #888;
	font-size: 42px;
	font-weight: 400;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 30px;
}

strong {
	color: #313131;
}

.search-box {
	display: flex;
	justify-content: center;
	padding-left: 30px;
	padding-right: 30px;
	
}

.search-field {
	appearance: none;
	background: none;
	border: none;
	outline: none;

	background-color: rgb(223, 216, 216);
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

	display: block;
	width: 100%;
	max-width: 600px;
	padding: 15px;
	border-radius: 8px;

	color: #313131;
	font-size: 20px;

	transition: 0.4s;
}

.search-field:focus, .search-field:valid {
	color: #fff;
	background-color: #313131;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
}

main {
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 30px;
	padding-right: 30px;
}

.cards {
	display: flex;
  flex-direction: row;
	flex-wrap: wrap;
	margin: 0 -8px;
}
</style>
