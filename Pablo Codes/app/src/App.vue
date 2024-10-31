<script setup lang="ts">
import OVisualizacao from './components/OVisualizacao.vue';
import OCabecalho from './components/OCabecalho.vue';
</script>
<!-- Toda lógica: JavaScript ou TypeScript -->

<template>
  <OVisualizacao>
    <!-- 1° Forma - Slot Nomeado -->
    <template #footer>
      Rodapé página
    </template>
    <!-- 2° Forma - Slot Nomeado -->
    <template v-slot:cabecalho>
      <OCabecalho>
        <!-- Scoped Slot -->
        <template v-slot="{mensagem, funcao}">
          <p class="titulo">{{ mensagem }}</p>
          <button @click="funcao">Clique aqui</button>
        </template>
      </OCabecalho>
    </template>
    <RouterView />
  </OVisualizacao>
</template>
<!-- Camada de visualização: HTML -->

<!-- <style>
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
  color: #111;
}
</style> -->
<!-- Camada de estilo: CSS -->
