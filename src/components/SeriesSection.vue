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
    <CardComponent v-for="serie in store.seriesList" :item="serie" />
</template>