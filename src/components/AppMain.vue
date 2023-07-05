<script>



// RICEVERE I PROPS
// REGISTRARLI ED INVIARLI A COMPONENT CARD



import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar, CardComponent },
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
    <main>
        <CardComponent />
    </main>
</template>

<style scoped></style>