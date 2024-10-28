<script setup lang="ts">
import { reactive } from 'vue';

// Ref: específico para tipos primitivos: string, number, boolean
// const nome = ref('Jardson Alan');
// const dataNascimento = ref(0);
// const idade = ref(19);

// Alterar o valor da propriedade (idade)
// idade.value = 38;
// console.log(idade.value);

// Reactive: focado em objetos
const pessoa = reactive ({
    nome: '',
    dataNascimento: 0,
    idade: 0
});
// Alterar o valor da propriedade (idade)
console.log(pessoa.idade = 19);

</script>

<template>
    <div>
        <form class="formulario">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" v-model="pessoa.nome" /><br/>
            <label for="dataNascimento">Data de Nascimento:</label><br>
            <input type="number" id="dataNascimento" name="dataNascimento" v-model="pessoa.dataNascimento" /><br/>
        </form>
    </div>

    <p style="text-align: center; margin: 20px 0;">{{ pessoa.nome }} nasceu em {{ pessoa.dataNascimento }}</p>
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
</style>