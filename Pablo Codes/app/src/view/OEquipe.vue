<script setup lang="ts">
import { useCargos } from '@/stores/cargos';
import { storeToRefs } from 'pinia';

// Pinia - Composition API
const store = useCargos();
const { cargos, cores } = storeToRefs(store); // Tranforma a store em reativo

const title: string = 'Equipe';
</script>

<template>
  <h1>{{title}}</h1>
  <div v-for="c in cargos" :key="c.id">
    {{ c.cargo }} {{ c.nome }}
    <button v-on:click="store.removeCargo(c.id)">Remover</button>
  </div>
  <div v-for="cs in cores" :key="cs">{{ cs }}</div>
</template>

<style scoped></style>
