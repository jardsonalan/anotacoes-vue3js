<script setup lang="ts">
import OUsuario from '@/components/OUsuario.vue';
import { useFetch } from '@/composables/fetch';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useCargos } from '@/stores/cargos';
import { useLogin } from '@/stores/login';

const router = useRoute();

const id = router.params.id;

const { data: pessoa, carregando } = useFetch(`https://reqres.in/api/users/${id}`);

// Pinia - Composition API
const storeLogin = useLogin();
const store = useCargos();

const cargoSelecionado = ref('');

const cargos = ['Gerente', 'Supervisor(a)', 'Operacional'];

const { adicionaCargo, buscaCores } = store;

watch(cargoSelecionado, (novoCargo) => {
    const { id: id, first_name: nome } = pessoa.value;
    const funcionario = { id: id, nome: nome, cargo: novoCargo };
    adicionaCargo(funcionario);
});

// const nome = computed(() => {
//   if (!data.value) {
//     return ''
//   } else {
//     return `${data.value.first_name} ${data.value.last_name}`
//   }
// })

// Class Bind
const botaoLogin = ref('botao-login');
const botao = ref('botao');
</script>

<template>
    <div v-if="carregando">Carregando...</div>
    <OUsuario :pessoa="pessoa" v-else></OUsuario>
    <select v-model="cargoSelecionado">
        <option disabled value="">Selecione o cargo</option>
        <option v-for="c in cargos" :key="c" :value="c">{{ c }}</option>
    </select>
    <div>
        <!-- Class Bind -->
        <!-- <button v-on:click="storeLogin.logarUsuario(pessoa.first_name)" :class="[botao, botaoLogin]">Logar</button> -->

        <!-- Propriedade: module -->
        <button v-on:click="storeLogin.logarUsuario(pessoa.first_name)" :class="funcionario.botaoLogin">Logar</button>
    </div>
    <div>
        <button v-on:click="buscaCores()">Busca Cores</button>
    </div>
</template>

<style module="funcionario">
.botaoLogin {
    background-color: #57bf3e;
}
</style>