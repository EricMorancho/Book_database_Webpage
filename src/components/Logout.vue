<template>
    <div>
        <h3>Are you sure you want to Log Out?</h3>
        <button class="btn btn-dark" @click=handleClick>Log Out</button>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { mapMutations } from '@/lib';
    import { useRouter } from 'vue-router';

    const store = useStore()
    const router = useRouter()

    const { uncheckAnonymous, checkRegister } = mapMutations()

    const handleClick = () => {
        store.dispatch('logout')
        uncheckAnonymous()
        checkRegister()
        router.push('/')
    }


</script>

<style  scoped>

</style>