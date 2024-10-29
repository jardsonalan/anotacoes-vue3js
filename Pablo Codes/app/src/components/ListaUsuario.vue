<script setup lang="ts">
import { 
    ref,
    /* onMounted, */
    /* watchEffect, */
    computed
} from 'vue';
import Usuario from './OUsuario.vue';
import { provide } from 'vue';
import { useFetch } from '@/composables/fetch';

const {
    data: pessoas,
    erro,
    carregando
} = useFetch(`https://reqres.in/api/users?page=2`);

// const pessoas = ref([]);
const idSelecao = ref([]);
// const pessoasSelecionadas = ref([]);
const aviso = 'Em caso de dúvidas contate o suporte.';

// const buscaInformacoes = async () => {
//     const req = await fetch(`https://reqres.in/api/users?page=2`);
//     const json = await req.json();
//     return json.data;
// };

// onMounted(async () => {
//     pessoas.value = await buscaInformacoes();
// });

// Diretiva personalizada: Local
// const vEmail = {
//     created(el, biding) {
//         // el.style.color = 'blue';
//         // console.log(el.innerText);
//         el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`;
//     }
// };

// Emit
const adicionaSelecao = (evt) => {
    if (idSelecionado(evt)) {
        idSelecao.value = idSelecao.value.filter(x => x !== evt);
        return;
    }
    idSelecao.value.push(evt);
};
const pessoasSelecionadas = computed(() => {
    if (!pessoas.value) {
        return [];
    }
    return pessoas.value.filter((x) => idSelecionado(x.id));
});
const idSelecionado = (id) => {
    return idSelecao.value.includes(id);
};

// Provide
provide('aviso', aviso);
</script>

<template>
    <div v-if="carregando">
        <h3>Carregando...</h3>
    </div>
    <div class="pessoas" v-else>
        <!-- v-for: serve para renderizar uma lista de itens em uma Array -->
        <!-- :key="": pode receber tanto o id, quanto o index -->
        <!-- <div class="perfil" v-for="pessoa in pessoas" :key="pessoa.id">
            <h3 style="color: blue;" v-if="pessoa.first_name === 'George'">Gerente</h3>
            <h3 style="color: green;" v-else-if="pessoa.first_name === 'Byron'">Supervisor(a)</h3>
            <h3 style="color: darkgoldenrod;" v-else>Operacional</h3>
            <img v-bind:src = "pessoa.avatar" alt="Perfil">
            <strong>{{ pessoa.first_name + pessoa.last_name }}</strong>
            <span style="font-size: 12px;" v-email="pessoa.email"></span>
        </div> -->

        <!-- Props - propriedades passadas do componente pai -->
        <!-- <Usuario 
            first_name="Jardson" 
            last_name="Alan"
            avatar="./caminho"
            email="email@email.com"
        /> -->

        <!-- Props - Recebendo valores de API -->
        <Usuario 
            v-if='!erro'
            v-for="pessoa in pessoas" 
            :key="pessoa.id"
            v-bind:pessoa="pessoa"
            v-on:selecao="adicionaSelecao"
            v-bind:selecao="idSelecionado(pessoa.id)"
        />
        <div v-else>
           {{ erro }} 
        </div>
    </div>
    <div class="selecionadas">
        <span v-for="ps in pessoasSelecionadas" :key="ps.id" class="card">{{ ps.first_name }}</span>
    </div>

</template>

<style scoped>
    .selecionadas {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin: 0 auto;
    }

    .selecionadas > span {
        background: #6fd6d6;
        padding: 5px;
        font-size: 0.785em;
        border-radius: 5px;
    }

    .perfil {
        width: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin: 0 0 0 10%;
        justify-content: center;
        align-items: center;
    }

    .perfil img {
        border-radius: 15px;
    }

    strong {
        margin: 10px 0;
    }

    .pessoas {
        display: flex;
        flex-wrap: wrap;
    }
</style>