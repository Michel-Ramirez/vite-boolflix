<script>

import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar },
    emits: ['term-serched'],
    methods: {
        onSerchedTerm(term) {
            this.$emit('term-serched', term)
            console.log(term)
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <h1>BOOLFLIX</h1>
            </div>
            <SearchBar @term-serched="onSerchedTerm" />
        </div>
    </header>
</template>

<style scoped>
header {
    height: 100px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(58, 58, 59, 1) 55%, rgba(112, 112, 112, 1) 100%);
}

.container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    color: red;
}
</style>