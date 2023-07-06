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

<style scoped></style>