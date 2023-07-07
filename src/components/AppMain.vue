<script>

import ProductionSection from './ProductionSection.vue';

export default {
    components: { ProductionSection },
}
</script>

<template>
    <main>
        <div class="container">
            <ProductionSection title="Movies" collection="moviesList" />
            <ProductionSection title="Series" collection="seriesList" />
        </div>
    </main>
</template>

<style scoped>
main {
    background-image: linear-gradient(0deg, rgba(58, 58, 59, 1) 2%, rgba(0, 0, 0, 1) 60%, rgba(112, 112, 112, 1) 100%);
    height: calc(100vh - 100px);
    overflow: auto;
}
</style>