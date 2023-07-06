<script>

import MoviesSection from './MoviesSection.vue';
import SeriesSection from './SeriesSection.vue';

export default {
    components: { MoviesSection, SeriesSection },
}
</script>

<template>
    <main>
        <div class="container">
            <MoviesSection />
            <SeriesSection />
        </div>
    </main>
</template>

<style scoped>
main {
    background-image: linear-gradient(0deg, rgba(58, 58, 59, 1) 2%, rgba(0, 0, 0, 1) 60%, rgba(112, 112, 112, 1) 100%);
    height: 100vh;
    overflow: auto;
}
</style>