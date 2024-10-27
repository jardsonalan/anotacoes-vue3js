<script setup lang="ts">
import Cabecalho from './components/OCabecalho.vue';
</script> <!-- Toda lógica: JavaScript ou TypeScript -->

<template>
  <NavBar />
  <header>
    <Cabecalho />
  </header>
</template> <!-- Camada de visualização: HTML -->

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  line-height: 1.5;
}
</style> <!-- Camada de estilo: CSS -->
