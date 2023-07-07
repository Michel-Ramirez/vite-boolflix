<script>
import { store } from '../data/store';
</script>

<template>
    <div class="container">
        <h2>Benvenuto in </h2>
        <h1>BOOLFLIX</h1>
        <p>Usa la barra di ricerca per trovare i contenuti che desideri</p>
    </div>
</template>

<style scoped>
.container {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    color: white;
}

h1 {
    color: red;
    font-size: 5rem;
}

p {
    color: gray;
}
</style>