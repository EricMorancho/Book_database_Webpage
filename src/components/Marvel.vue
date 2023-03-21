<template>
    <div>
		<header>
			<h1>The <strong>Marvel</strong> Database</h1>
			<h3 v-for="marvel in comicList2" >
			
			
			
			</h3>
            
		</header>

		<form class="search-box" @submit.prevent="handleSearch">
			<input type="search" class="search-field" 
			placeholder="Search for a Marvel comic..." 
			v-model="search_query"
			required>
		</form>

		<main>
			<div class="cards">
				<CardComic v-for="(marvel, index) in comicList2" :key="index"
				:marvel="marvel"/>
			</div>
		</main>

		<button class="btn btn-dark mt-5 p-2" @click="showMore()" v-if="showButton"><span class="m-5">Show More Marvel Comics</span></button>
        
		
       
		
    </div>
</template>
  
<script setup>
import CardComic from '@/components/CardComic.vue'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mapState } from '@/lib';

const router = useRouter()
const {user, anonymous} = mapState()


let comicList = ref('');
let comicList2 = ref('');
let search_query = ref('')
let num = 20

let showButton = ref(false)

const hola = () => {
	showButton = true
}



const handleSearch = async () => {
	comicList.value = await fetch(`https://gateway.marvel.com:443/v1/public/comics?title=${search_query.value}&limit=${num}&ts=1&apikey=573085dec0a3a2c807faa226858f8f7a&hash=882d6694afbc6ec56320ac77f2417749`)
	.then(res => res.json())
	.then(data => {
		comicList.value = data
		comicList2.value = comicList.value.data.results
		hola()
		
	})
	.catch(err => console.error(err));
}

const showMore = async () => {
	num += 20;
	
	comicList.value = await fetch(`https://gateway.marvel.com:443/v1/public/comics?title=${search_query.value}&limit=${num}&ts=1&apikey=573085dec0a3a2c807faa226858f8f7a&hash=882d6694afbc6ec56320ac77f2417749`)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		console.log(search_query.value)
		comicList.value = data
		console.log(comicList.value)
		comicList2.value = comicList.value.data.results
		console.log(comicList.value.data.results)
		console.log(comicList2.value)
		
	})
	.catch(err => console.error(err));
}

onMounted(() => {
    if (user.value == null && anonymous.value == false) {
        router.push({ path: '/Login' })
    }
})


</script>

<style scoped>
	*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'KoHo', sans-serif;
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