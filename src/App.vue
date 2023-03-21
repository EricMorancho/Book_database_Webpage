<template>
  <div class="back container">
    <div class="row">
    <nav>
      <div>
        <div class="col-12 offset-md-5" v-if="register">
          <router-link to="/login">Login</router-link> /
          <router-link to="/register"> Register</router-link>
        </div>
        <div class="col-12 offset-md-4" v-if="user && !anonymous">
          <span>Log in as: {{ user.email }} /</span>

          <router-link to="/Logout"> Log Out</router-link>
        </div>

        <div class="col-12 offset-md-4" v-if="anonymous">
          <span>Log in as: Anonymous /</span>

          <router-link to="/Logout"> Log Out</router-link>
        </div>
      </div>
    </nav>
    <nav class="col-12 font">
      <router-link to="/books">Books</router-link> |
      <router-link to="/manga">Manga</router-link> |
      <router-link to="/marvel">Marvel</router-link>
    </nav>
    <div class="col-12">
      <router-view />
    </div>
    
  </div>
  </div>
</template>

<script setup>
import { mapState } from '@/lib';
//import { onMounted } from 'vue';
//import { auth } from '@/firebase/config'
import { useStore } from 'vuex'

const store = useStore()

const { user, anonymous, register } = mapState()



//Preserva el usuario cuando se recarga la página, pero causa problemas con "Anonymous login"
/*
onMounted(() => {
    const unsub = auth.onAuthStateChanged(user => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    if(user){
      uncheckRegister()
    }
    unsub()
  })
  console.log('userInfo'+user.value)
})*/


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');

#app {
  font-family: 'KoHo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.back {
  background-color: burlywood;
  min-width: 100vw;
  min-height: 100vh;
  margin:0;
  padding:0;

}

.text {
    text-align: justify;
}

.font{
  font-family: 'Beth Ellen', cursive;
}
</style>
