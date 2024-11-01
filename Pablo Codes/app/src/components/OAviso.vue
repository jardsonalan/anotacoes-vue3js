<script setup lang="ts">
import { inject } from 'vue'

// Inject
const aviso = inject('aviso')

// Template Refs
const chamaAlert = () => {
  alert('Clicou');
};

// Expõe para o componente pai os membros e métodos internos de um componente
defineExpose({aviso, chamaAlert});
</script>

<template>
  <div class="aviso">
    {{ aviso }}
  </div>
</template>

<style scoped>
.aviso {
  font-size: 0.575em;
  text-align: center;
}
</style>
