<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';

export default {
    components: {
        CardComponent,
    },
    data() {
        return { store }
    }
}
</script>

<template>
    <!-- <h2 class="mb-5 text-white">MOVIES</h2> -->
    <div class="wrapper-movie d-flex">
        <CardComponent v-for="movie in store.movieList" :item="movie" />
    </div>
</template>

<style>
.wrapper-movie {
    max-width: 100%;
    flex-wrap: wrap;
}
</style>