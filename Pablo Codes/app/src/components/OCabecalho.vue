<script setup lang="ts">
import { useFetch } from '@/composables/fetch';
import { computed } from 'vue';

// const nome:string = 'Jardson';
// const subtitulo:string = '<p style="color: silver;">Tutoriais Vue</p>';

const {
    data,
} = useFetch(`https://reqres.in/api/users/3`);

const nome = computed(() => {
    if (!data.value) {
        return '';
    } else {
        return `${data.value.first_name} ${data.value.last_name}`;
    }
});
</script>

<template>
    <div>
        <h1 class="titulo">{{ nome }}</h1>
        <!-- <span v-html="subtitulo"></span> --> <!-- v-html: serve para renderizar uma string como objeto HTML -->
        <!-- <span v-text="subtitulo"></span> --> <!-- v-text: mesma função do dataBind ({{  }}) -->
    </div>
</template>

<style scoped>
.titulo {
    margin: 0 auto;
    text-align: center;
    color: #f01;
}
</style>