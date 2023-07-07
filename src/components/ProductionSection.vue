<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';

export default {
    components: {
        CardComponent,
    },
    props: {
        collection: String,
        title: String,
    },
    data() {
        return { store }
    }
}
</script>

<template>
    <h2 v-if="store[collection].length" class="mb-5 text-white">{{ title }}</h2>
    <div class="wrapper-movie d-flex">
        <CardComponent v-for="production in store[collection]" :key="production.id" :item="production" />
    </div>
</template>

<style>
.wrapper-movie {
    max-width: 100%;
    flex-wrap: wrap;
}
</style>