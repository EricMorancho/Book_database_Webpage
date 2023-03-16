import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBONEiJtSJh6TRoJ1H0mLgUH9Nu3ASTmeI",
    authDomain: "vue-authentification-26a4a.firebaseapp.com",
    projectId: "vue-authentification-26a4a",
    storageBucket: "vue-authentification-26a4a.appspot.com",
    messagingSenderId: "834264654465",
    appId: "1:834264654465:web:115a526d3553e7048fe380"
  };

  // init firebase

  initializeApp(firebaseConfig)

  // init firebase auth

  const auth = getAuth()

  export { auth }