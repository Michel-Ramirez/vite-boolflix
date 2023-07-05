<script>
import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar },
    data() {
        return {}
    },
    methods: {
        onSerchedTerm(term) {
            console.log(term)
        }
    }
}
</script>

<template>
    <header>
        <SearchBar @term-serched="onSerchedTerm()" />
    </header>
</template>

<style scoped></style>