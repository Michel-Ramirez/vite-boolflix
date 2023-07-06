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
    <!-- <h2 class="my-5 text-white">SERIES</h2> -->
    <div class="wrapper-series d-flex">
        <CardComponent v-for="serie in store.seriesList" :item="serie" />
    </div>
</template>

<style scoped>
.wrapper-series {
    max-width: 100%;
    flex-wrap: wrap;
}
</style>