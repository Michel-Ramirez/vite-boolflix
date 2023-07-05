<script>
import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar },
    emits: ['term-serched'],
    data() {
        return {}
    },
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
        <SearchBar @term-serched="onSerchedTerm" />
    </header>
</template>

<style scoped></style>