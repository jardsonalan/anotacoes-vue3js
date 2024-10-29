<script setup lang="ts">
import { 
    /* ref, */
    /* onMounted, */
    /* reactive, */
    /* computed, */
    /* watch, */
    /* watchEffect */
} from 'vue';

// Ref: específico para tipos primitivos: string, number, boolean
// const nome = ref('Jardson Alan');
// const dataNascimento = ref(0);
// const idade = ref(0);
// const idadeFutura = ref(0);
// Alterar o valor da propriedade (idade)
// idade.value = 38;
// console.log(idade.value);

// Reactive: focado em objetos
// const pessoa = reactive ({
//     nome: '',
//     dataNascimento: 0,
//     idade: 0
// });
// Alterar o valor da propriedade (idade)
// console.log(pessoa.idade = 19);

// Métodos
// const calcularIdade = ():number => {
//     idade.value = new Date().getFullYear() - dataNascimento.value;
//     return idade.value;
// };
// const calcularIdadeParametro = (valor:number):number => {
//     idadeFutura.value = idade.value + valor;
//     return idadeFutura.value;
// };

// Ciclo de vida de um componente
// onBeforeMount(()=>{
//     console.log('onBeforeMount');
// }); /* Antes da montagem */

// const pessoa = ref({});

// onMounted(async ()=>{
//     pessoa.value = await buscaInformacoes(1);
// }); /* Montagem | Após montagem */

// Consumindo API
// const buscaInformacoes = async (codigo:number) => {
//     const req = await fetch(`https://reqres.in/api/users/${codigo}`);
//     const json = await req.json();
//     return json.data;
// };

// onBeforeUpdate(()=>{
//     console.log('onBeforeUpdate');
// }); /* Antes da atualização */

// onUpdated(()=>{
//     console.log('onUpdated');
// }); /* Atualização | Após atualização */

// onBeforeUnmount(()=>{
//     console.log('onBeforeUnmount');
// }); /* Antes da desmontagem */

// onUnmounted(()=>{
//     console.log('onUnmounted');
// }); /* Desmontagem | Após desmontagem */

// Computed
// const codigoUsuario = ref(0);
// const habilitaBotao = computed(() => codigoUsuario.value > 0);
// const pesquisaInformacoes = async () => {
//     pessoa.value = await buscaInformacoes(codigoUsuario.value || 1);
// };
// const nomeCompleto = computed(() => `${pessoa.value.first_name} ${pessoa.value.last_name}`
// );
// const email = computed(() => `${pessoa.value.email}`);
// const avatar = computed(() => `${pessoa.value.avatar}`);

// Watch
// watch(codigoUsuario, (novo) => {
//     if (novo <= 0) {
//         codigoUsuario.value = 0;
//     }
// });

// WatchEffect
// watchEffect(async ()=>pesquisaInformacoes());

// Props
// 1° Forma
defineProps({
    pessoa: {
        type: Object,
        // type: String,
        // type: Number,
        // type: Boolean,
        // type: Array,
        // type: Object,
        // type: Date,
        // type: Function,
        // type: Symbol,
        required: true, // Informa que a prop é obrigatória
        default: () => ({
            id: 0,
            first_name: '',
            last_name: '',
            avatar: '',
            email: '',
        }),
    },
    selecao: Boolean,
});

// 2° Forma
// defineProps({
//     pessoa: Object,
// });

// 3° Forma
// defineProps({
//     avatar: String,
//     first_name: String,
//     last_name: String,
//     email: String
// });
// const nomeCompleto = computed(() => `${props.first_name} ${props.last_name}`
// );

// Emit
const emit = defineEmits(['selecao']); // passa como argumento um Array com os nomes dos eventos personalizados que o componente pode emitir
const enviaEmit = (id) => {
    emit('selecao', id);
};
</script>

<!-- <template>
    <div>
        <form class="formulario">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" v-model="nome" /><br/>
            <label for="dataNascimento">Data de Nascimento:</label><br>
            <input type="number" id="dataNascimento" name="dataNascimento" v-model="dataNascimento" /><br/>
        </form>
    </div>

    <button class="botao" v-on:click="calcularIdade()">Calcula idade</button>
    <p style="text-align: center; margin: 20px 0;">{{ nome }} tem em {{ idade }} anos</p>

    <button class="botao" v-on:click="calcularIdadeParametro(2)">+2</button>
    <p style="text-align: center; margin: 20px 0;">{{ nome }} daqui a 2 anos terá {{ idadeFutura }} anos</p>
</template> -->

<template>
    <!-- v-on: serve para disparar eventos -->
    <!-- v-model: atualiza os dados e fornece o relacionamento entre o template (HTML) e a entrada de dados -->
    <!-- v-bind: serve para fazer o bind de um atributo ou propriedade -->
    <!-- <form class="formulario" v-on:submit.prevent>
        <label for="codigoUsuario">Código Usuário:</label><br>
        <input 
            type="text"
            id="codigoUsuario"
            name="codigoUsuario"
            v-model="codigoUsuario"
        ><br>
    </form> -->
    <!-- <button class="botao" v-bind:disabled="!habilitaBotao" v-on:click="pesquisaInformacoes()">Buscar</button> -->
    <div class="perfil">
        <img v-bind:src = "pessoa.avatar" alt="Perfil">
        <strong>{{ pessoa.first_name + pessoa.last_name }}</strong>
        <span>{{ pessoa.email }}</span>
        <!-- Emit: 1° Forma -->
        <!-- <button class="botao" v-on:click="$emit('selecao', pessoa.id)">Selecionar</button> -->
        <!-- Emit: 2° Forma -->
        <button class="botao" v-on:click="enviaEmit(pessoa.id)">{{ !selecao ? 'Selecionar' : 'Desmarcar' }}</button>
    </div>
</template>

<style scoped>
    /* * {
        font-size: 1.2em;
    } */
    /* .formulario {
        margin: 0 auto;
        padding: 5px;
        width: 400px;
        background-color: darkcyan;
    } */

    #nome, #dataNascimento, #codigoUsuario {
        margin: 10px 0;
        width: 100%;
    }

    .botao {
        margin: 5px auto;
        padding: 5px;
        display: block;
        background-color: darkcyan;
        border-radius: 5px;
        border-style: none;
        cursor: pointer;
    }

    button:disabled, button[disabled] {
        border: 1px solid #999;
        background-color: #ccc;
        color: #666;
        cursor: default;
    }

    /* .botao:hover {
        background-color: rgb(182, 147, 147);
    } */

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
</style>