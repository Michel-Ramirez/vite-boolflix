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
    <form>
        <input type="text" placeholder='Digita per cercare...' v-model.trim="inputWord"
            @keyup="$emit('term-serched', inputWord)">
    </form>
</template>

<style>
input {
    margin: 50px 50px;
}
</style>