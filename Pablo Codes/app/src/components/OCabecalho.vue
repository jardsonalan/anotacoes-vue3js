<script setup lang="ts">
// import { useFetch } from '@/composables/fetch'
import { computed } from 'vue'
import { useDark, useToggle, useFullscreen, useMediaQuery } from '@vueuse/core'
import { UseFullscreen } from '@vueuse/components'
import { useLogin } from '@/stores/login';
import { storeToRefs } from 'pinia';

// Pinia - Composition API
const store = useLogin();
const { usuarioLogado, logado } = storeToRefs(store);

// const nome:string = 'Jardson';
// const subtitulo:string = '<p style="color: silver;">Tutoriais Vue</p>';

// VueUse - useDark: Troca de tema
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

// VueUse - useFullscreen: Abrir em tela cheia
const { toggle } = useFullscreen()

// VueUse - useMediaQuery: Verifica o tamanho da tela
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const tipoTela = computed(() => (isLargeScreen.value ? 'Desktop' : 'Mobile'))

// const { data } = useFetch(`https://reqres.in/api/users/3`)

// const nome = computed(() => {
//   if (!data.value) {
//     return ''
//   } else {
//     return `${data.value.first_name} ${data.value.last_name}`
//   }
// })
</script>

<template>
  <UseFullscreen v-slot="{ toggle }">
    {{ tipoTela }}
    <div>
      <h1 class="titulo" v-if="logado">Bem-vindo(a) {{ usuarioLogado }}</h1>
      <!-- <span v-html="subtitulo"></span> -->
      <!-- v-html: serve para renderizar uma string como objeto HTML -->
      <!-- <span v-text="subtitulo"></span> -->
      <!-- v-text: mesma função do dataBind ({{  }}) -->
    </div>
    {{ isDark }}
    <button v-on:click="toggleDark()">Muda tema</button>
    <button @click="toggle">Fullscreen</button>
  </UseFullscreen>
</template>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: #f01;
}
</style>
