<script>
import AppMain from './components/AppMain.vue';
import { store } from './data/store';
export default {
  components: { AppMain },
  data() {
    return {
      queryTerm: '',
      endpoint: '',
      api_key: 'da87ac9b75d421e9c6d3a9d1100a0dc4',
    }
  },
  methods: {
    onSearchTerm(term) {
      this.queryTerm = term;
      this.endpoint = `https://api.themoviedb.org/3//search/movie?api_key=${this.api_key}&query=${this.queryTerm}`;
      console.log(endpoint);

      axios.get(endpoint).then(res => {
        store.contentSerched = res.data.results;
      })
    },

  }

}
</script>

<template>
  {{ queryTerm }}
  {{ endpoint }}
  <AppMain @term-serched="onSearchTerm" />
</template>

<style></style>
