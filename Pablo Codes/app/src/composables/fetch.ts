// Composable
import { onBeforeMount, ref } from "vue";

// useFetch
export function useFetch(url) {
    const data = ref(null);
    const erro = ref('');
    const carregando = ref(true);
    
    const buscaInformacoes = async () => {
        try {
            const req = await fetch(`https://reqres.in/api/users?delay=1`);
            const json = await req.json();
            data.value = json.data;
        } catch (err) {
            erro.value = 'Erro ao obter informações na API';
        } finally {
            carregando.value = false;
        }
    };

    onBeforeMount(async () => {
        await buscaInformacoes();
    });
    
    return {
        data,
        erro,
        carregando
    };
};