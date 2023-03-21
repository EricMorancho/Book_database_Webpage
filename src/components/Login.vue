<template>
        <div class="container">
            <div class="row">
                <form @submit.prevent="submit" class="col-12 col-md-6 normalLogin">
                    <div class="text-start text-justify">
                        <h5 class="mb-4 mt-5 text-center">Login into your account:</h5>

                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Search for Books</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Search for Manga</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Search for Marvel Comics</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Full access to Books information</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Full access to Manga information</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Full access to Marvel Comics information
                        </ul>
                    </div>
                    <!-- Email input -->
                    <div class="form-outline mb-4 mt-5">
                        <input type="text" name="username" class="form-control" placeholder="email" v-model="email" required />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <input type="password" name="password" class="form-control" placeholder="Password" v-model="password" />
                    </div>

                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" checked />
                                <label class="form-check-label"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">
                            <!-- Simple link -->
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <button class="btn btn-dark btn-block mb-4" @click="handlesubmit(), initializeUser()">Sign
                        in</button>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <RouterLink to="/register">Register</RouterLink>
                        </p>
                    </div>


                </form>

                <div class="col-12 col-md-6 anonymousLogin">
                    <div class="text-start text-justify">
                        <h5 class="mb-4 mt-5 text-center">Login Anonymously:</h5>

                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Search for Books</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Search for Manga</ul>
                        <ul><img src="@/assets/tickcircleflat_105996.svg" alt="">Search for Marvel Comics</ul>
                        <ul><img src="@/assets/crosscircleflat_106051.svg" alt=""> Full access to Books information</ul>
                        <ul><img src="@/assets/crosscircleflat_106051.svg" alt=""> Full access to Manga information</ul>
                        <ul><img src="@/assets/crosscircleflat_106051.svg" alt=""> Full access to Marvel Comics information
                        </ul>
                    </div>
                    <button @click="anonymousLogin()" v-if="!anonymous" class=" btn btn-dark mt-5 mb-5">Anonymous identification</button>
                </div>
            </div>
        </div>


  
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { mapState, mapMutations } from '@/lib';



const { anonymous } = mapState()
const { checkAnonymous, uncheckAnonymous, uncheckRegister } = mapMutations()
const store = useStore()
const router = useRouter()



let email = ref('');
let password = ref('');
let error = ref(null)

const anonymousLogin = async () => {
    try {
        await store.dispatch('anonymous')
        router.push('/books')
    } catch (err) {
        error.value = err.message
        console.log('error')
    }

    checkAnonymous();
    uncheckRegister()

}


const handlesubmit = async () => {
    try {
        await store.dispatch('login', { email: email.value, password: password.value })
        router.push('/books')
    } catch (err) {
        error.value = err.message
        console.log('error')
    }
}

const initializeUser = () => {
    uncheckAnonymous()
    uncheckRegister()
}

</script>

<style>
    

    .normalLogin {
        background-color: rgb(241, 200, 185);
    }

    .anonymousLogin {
        background-color: rgb(177, 241, 241);
    }

</style>