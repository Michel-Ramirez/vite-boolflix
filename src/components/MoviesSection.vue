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
    <CardComponent v-for="movie in store.movieList" :item="movie" />
</template>