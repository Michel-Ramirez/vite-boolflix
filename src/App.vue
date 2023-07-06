<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store';
import axios from 'axios';

export default {
  components: { AppMain, AppHeader },

  methods: {
    onSearchTerm(term) {
      const movieEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${term}&language=it-IT`;
      const seriesEndpoint = `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${term}&language=it-IT`;

      axios.get(movieEndpoint).then(res => {
        store.movieList = res.data.results;
        console.log(store.movieList)
      });
      axios.get(seriesEndpoint).then(res => {
        store.seriesList = res.data.results;
        console.log(store.seriesList)
      })
    },

  }

}
</script>

<template>
  <AppHeader @term-serched="onSearchTerm" />
  <AppMain />
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
