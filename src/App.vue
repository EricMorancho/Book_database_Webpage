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
    <nav class="col-12">
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



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
