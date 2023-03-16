<template>
    <div>
        <h2>Login Page</h2>
        <div class="container">
            <div class="row">
                <form @submit.prevent="submit" class="col-6">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <input type="text" name="username" class="form-control" v-model="email" required />
                        <label class="form-label">Username</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <input type="password" name="password" class="form-control" v-model="password" />
                        <label class="form-label">Password</label>
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
                    <button class="btn btn-primary btn-block mb-4" @click="handlesubmit(), initializeUser()">Sign
                        in</button>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <RouterLink to="/register">Register</RouterLink>
                        </p>
                    </div>


                </form>

                <div class="col-6">
                    <button @click="anonymousLogin()" v-if="!anonymous">Anonymous identification</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { mapState, mapMutations } from '@/lib';

const { user, anonymous } = mapState()
const { checkAnonymous, uncheckAnonymous, uncheckRegister } = mapMutations()
const store = useStore()
const router = useRouter()

let email = ref('');
let password = ref('');
let error = ref(null)

const anonymousLogin = async () => {
    try {
        await store.dispatch('anonymous')
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
        router.push('/')
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