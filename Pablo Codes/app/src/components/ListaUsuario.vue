<script setup lang="ts">
import { 
    ref,
    onMounted
} from 'vue';

const pessoas = ref([]);

const buscaInformacoes = async () => {
    const req = await fetch(`https://reqres.in/api/users?page=2`);
    const json = await req.json();
    return json.data;
};

onMounted(async () => {
    pessoas.value = await buscaInformacoes();
});

// Diretiva personalizada: Local
// const vEmail = {
//     created(el, biding) {
//         // el.style.color = 'blue';
//         // console.log(el.innerText);
//         el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`;
//     }
// };
</script>

<template>
    
    <div class="pessoas">
        <!-- v-for: serve para renderizar uma lista de itens em uma Array -->
        <!-- :key="": pode receber tanto o id, quanto o index -->
        <div class="perfil" v-for="pessoa in pessoas" :key="pessoa.id">
            <h3 style="color: blue;" v-if="pessoa.first_name === 'George'">Gerente</h3>
            <h3 style="color: green;" v-else-if="pessoa.first_name === 'Byron'">Supervisor(a)</h3>
            <h3 style="color: darkgoldenrod;" v-else>Operacional</h3>
            <img v-bind:src = "pessoa.avatar" alt="Perfil">
            <strong>{{ pessoa.first_name + pessoa.last_name }}</strong>
            <span style="font-size: 12px;" v-email="pessoa.email"></span>
        </div>
    </div>

</template>

<style scoped>
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