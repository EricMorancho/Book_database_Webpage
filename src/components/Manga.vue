<template>
    <div>
		<header>
			<h1>The <strong>Manga</strong> Database</h1>
		</header>
        
		<form class="search-box" @submit.prevent="handleSearch">
			<input type="search" class="search-field" 
			placeholder="Search for a Manga..." 
			v-model="search_query"
			required>
		</form>
       
		<main>
			
			<div class="cards">
				<CardManga v-for="(anime, index) in animeList2" :key="index"
				:anime="anime"/>
			</div>
		</main>

		<button class="btn btn-dark mt-5 p-2" @click="showMore()"><span class="m-5">Show More Mangas</span></button>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import CardManga from '@/components/CardManga.vue';
import { useRouter } from 'vue-router';
import { mapState } from '@/lib';

const router = useRouter()
const {user, anonymous} = mapState()

let search_query = ref('');
let animeList = ref('');
let animeList2 = ref('');
let limit = 18;

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
	limit += 18;
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

onMounted(() => {
    if (user.value == null && anonymous.value == false) {
        router.push({ path: '/Login' })
    }
})


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
	flex-wrap: wrap;
	margin: 0 -8px;
}
</style>
  