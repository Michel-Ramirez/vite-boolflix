<script>
import AppMain from './components/AppMain.vue';
import { store } from './data/store';
import axios from 'axios';




// CHIAMARE SOTORE
// CREARE PROPS TO APPMAIN DESTRUTTURANDO GLI ELEMENTI DI CUI HO BISOGNO





export default {
  components: { AppMain },
  data() {
    return {

    }
  },
  methods: {
    onSearchTerm(term) {
      const movieEndpoint = `https://api.themoviedb.org/3//search/movie?api_key=${store.apiKey}&query=${term}`;
      const seriesEndpoint = `https://api.themoviedb.org/3//search/tv?api_key=${store.apiKey}&query=${term}`;

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
  <AppMain @term-serched="onSearchTerm" />
</template>

<style></style>
