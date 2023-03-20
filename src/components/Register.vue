<template>
    <div>
        <h2>Registration Page</h2>
        <form @submit.prevent="submit">
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
                </div>
            </div>

            <!-- Submit button -->
            <button class="btn btn-dark btn-block mb-4" @click="handlesubmit(), initializeUser()">Create Acount</button>
            <div v-if="error">{{ error }}</div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { mapMutations } from '@/lib';
import { useStore } from 'vuex'


const router = useRouter()
const store = useStore()
const { uncheckAnonymous, uncheckRegister } = mapMutations()

let email = ref('')
let password = ref('');
let error = ref(null)




const handlesubmit = async () => {
    try {
        await store.dispatch('signup', { email: email.value, password: password.value })
        console.log('you have been registered')
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