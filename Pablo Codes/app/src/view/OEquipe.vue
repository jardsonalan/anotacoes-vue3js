<script setup lang="ts">
import { useCargos } from '@/stores/cargos';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

// Pinia - Composition API
const store = useCargos();
const { cargos, cores } = storeToRefs(store); // Tranforma a store em reativo

const title: string = 'Equipe';

// CSS Bind
const corSelecionada = ref('fff');
const mudarCor = (cor) => {
  corSelecionada.value = cor;
};
</script>

<template>
  <h1>{{title}}</h1>
  <div v-for="c in cargos" :key="c.id">
    {{ c.cargo }} {{ c.nome }}
    <button v-on:click="store.removeCargo(c.id)">Remover</button>
  </div>
  <div v-for="cs in cores" :key="cs">
    {{ cs }}
    <button v-on:click="mudarCor(cs)">Mudar cor</button>
  </div>
  <div class="painel"></div>
</template>

<style scoped>
.painel {
  width: 70px;
  height: 30px;
  border: 1px solid;
  /* CSS Bind */
  background: v-bind(corSelecionada);
}
</style>
