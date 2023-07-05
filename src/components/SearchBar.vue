<script>
export default {
    data() {
        return {
            inputWord: '',

        }
    }
}
</script>

<template>
    <form>
        <input type="text" placeholder='Digita per cercare...' v-model.trim="inputWord">
    </form>
</template>

<style>
input {
    margin: 50px 50px;
}
</style>