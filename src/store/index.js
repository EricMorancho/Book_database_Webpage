import { createStore, useStore } from 'vuex'


//firebase import

import { auth } from '@/firebase/config'
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
signInAnonymously
} from 'firebase/auth'


let store = useStore()

export default createStore({
  state: {
    user: null,
    authIsReady: false,
    anonymous: false,
    register: true
  },
  getters: {


  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    },
    setAuthIsReady(state, payload){
      state.authIsReady = payload
    },
    checkAnonymous(state) {
      state.anonymous = true
    },
    uncheckAnonymous(state) {
      state.anonymous = false
    },
    uncheckRegister(state){
      state.register = !state.register
    }
  },
  actions: {
    async signup(context, {email, password}){
      console.log('signup action')

      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res)
      if (res) {
        context.commit('setUser', res.user)
        
      } else {
        throw new Error('could not complete signup')
      }
    },
    async login(context, {email, password,}) {
      console.log('login action')

      //async code
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    },
    async logout(context) {
      console.log('logout action');
      await signOut(auth)
      context.commit('setUser', null)
    },
    async anonymous() {
      await signInAnonymously(auth)
      .then(() => {
        // Signed in..
        
        console.log('You are Logged in Anonymously')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
    }
  },

  modules: {
  },
  
})




