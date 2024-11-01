<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import OAviso from '@/components/OAviso.vue';

// Template Refs
const titulo = ref(null);
const avisoRef = ref(null);

onMounted(() => {
    console.log(titulo.value);
    titulo.value.style.color = 'blue';
    // titulo.value.innerText = 'Alterado';
    console.log(avisoRef.value.aviso);
});

const mostraMensagem = () => {
    avisoRef.value.chamaAlert();
};

provide('aviso', 'Página inválida');
</script>

<template>
    <div>
        <!-- Template Refs -->
        <h1 ref="titulo">Página não encontrada!</h1>
        <OAviso ref="avisoRef"/>
        <button @click="mostraMensagem()">Chama Alert</button>
    </div>
</template>

<style scoped></style>