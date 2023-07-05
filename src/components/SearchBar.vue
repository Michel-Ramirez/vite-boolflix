<script>
export default {
    data() {
        return {
            inputWord: '',

        }
    },
    emits: ['term-serched']
}
</script>

<template>
    <form @submit.prevent="$emit('term-serched', inputWord)">
        <input type="text" placeholder='Digita per cercare...' v-model.trim="inputWord">
    </form>
</template>

<style>
input {
    margin: 50px 50px;
}
</style>