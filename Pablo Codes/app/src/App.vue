<script setup lang="ts">
import Cabecalho from './components/OCabecalho.vue';
// import Usuario from './components/OUsuario.vue';
import ListaUsuario from './components/ListaUsuario.vue';
</script> <!-- Toda lógica: JavaScript ou TypeScript -->

<template>
  <!-- v-once: serve para renderizar uma única vez um elemento/componente -->
  <NavBar v-once/>

  <header>
    <Cabecalho />
  </header>

  <main>
    <!-- <Usuario /> -->
    <ListaUsuario />
  </main>
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

/* VueUse - useDark */
[color-scheme='dark'] {
    background-color: black;
    color: white;
}
[color-scheme='light'] {
    background-color: #eee;
    color:#111;
}
</style> <!-- Camada de estilo: CSS -->
