<script setup lang="ts">
import { inject } from 'vue';

// Inject
const aviso = inject('aviso');
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