<template>
    <div>
		<header>
			<h1>The <strong>Manga</strong> Database</h1>
		</header>
        
		<form class="search-box" @submit.prevent="handleSearch">
			<input type="search" class="search-field" 
			placeholder="Search for an anime..." 
			v-model="search_query"
			required>
		</form>
       
		<main>
			<div class="cards">
				<CardManga v-for="(anime, index) in animeList2" :key="index"
				:anime="anime"/>
			</div>
		</main>

		<button class="btn" @click="showMore()">Show More</button>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import CardManga from '@/components/CardManga.vue';


let search_query = ref('');
let animeList = ref('');
let animeList2 = ref('');
let limit = 20;

const handleSearch = async () => {
	animeList.value = await fetch(`https://api.jikan.moe/v4/manga?q=${search_query.value}&limit=${limit}`)
	.then(res => res.json())
	.then(data => {
		animeList.value = data
		console.log(animeList.value)
		animeList2.value = animeList.value.data
		console.log(animeList.value)
		
		
	})
	.catch(err => console.error(err));
}

const showMore = async () => {
	limit += 20;
	animeList.value = await fetch(`https://api.jikan.moe/v4/manga?q=${search_query.value}&limit=${limit}`)
	.then(res => res.json())
	.then(data => {
		animeList.value = data
		console.log(animeList.value)
		animeList2.value = animeList.value.data
		console.log(animeList.value)
		
	})
	.catch(err => console.error(err));
}











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

	background-color: #F3f3f3;
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
	flex-wrap: wrap;
	margin: 0 -8px;
}
</style>
  