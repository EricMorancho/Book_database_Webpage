<template>
    <div>
        <h3>Are you sure you want to Log Out?</h3>
        <button class="btn btn-primary" @click=handleClick>Log Out</button>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { mapMutations } from '@/lib';

    const store = useStore()

    const { uncheckAnonymous, uncheckRegister } = mapMutations()

    const handleClick = () => {
        store.dispatch('logout')
        uncheckAnonymous()
        uncheckRegister()
    }


</script>

<style  scoped>

</style>