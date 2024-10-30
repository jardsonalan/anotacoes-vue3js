import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useStorage } from "@vueuse/core";

export const useLogin = defineStore('login', () => {
    const usuarioLogado = ref('');

    function logarUsuario(nome) {
        usuarioLogado.value = nome;
        const storage = useStorage('usuario-logado', nome);
        console.log(storage.value);
    };

    const logado = computed(() => !!usuarioLogado.value.length);

    return {
        usuarioLogado,
        logarUsuario,
        logado,
    };
});