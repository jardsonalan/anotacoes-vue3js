<script setup lang="ts">
import OUsuario from '@/components/OUsuario.vue';
import { useFetch } from '@/composables/fetch';
import { useRoute } from 'vue-router';

const router = useRoute();

const id = router.params.id;

const { data: pessoa, carregando } = useFetch(`https://reqres.in/api/users/${id}`);

// const nome = computed(() => {
//   if (!data.value) {
//     return ''
//   } else {
//     return `${data.value.first_name} ${data.value.last_name}`
//   }
// })
</script>

<template>
    <div v-if="carregando">Carregando...</div>
    <OUsuario :pessoa="pessoa" v-else></OUsuario>
</template>

<style scoped></style>