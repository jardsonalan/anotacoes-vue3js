<script setup lang="ts">
import { ref } from 'vue';

// Ref: específico para tipos primitivos: string, number, boolean
const nome = ref('Jardson Alan');
const dataNascimento = ref(0);
const idade = ref(0);
const idadeFutura = ref(0);

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

const calcularIdade = ():number => {
    idade.value = new Date().getFullYear() - dataNascimento.value;
    return idade.value;
};

const calcularIdadeParametro = (valor:number):number => {
    idadeFutura.value = idade.value + valor;
    return idadeFutura.value;
};

</script>

<template>
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
</template>

<style scoped>
    * {
        font-size: 1.2em;
    }
    .formulario {
        margin: 0 auto;
        padding: 5px;
        width: 400px;
        background-color: darkcyan;
    }

    #nome, #dataNascimento {
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

    .botao:hover {
        background-color: rgb(182, 147, 147);
    }
</style>