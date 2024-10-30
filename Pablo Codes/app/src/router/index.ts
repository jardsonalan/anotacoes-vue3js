import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/OHome.vue';
import Equipe from '@/view/OEquipe.vue';
import Funcionario from '@/view/OFuncionario.vue';
import PaginaNaoEncontrada from '@/view/PaginaNaoEncontrada.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/equipe',
      name: 'equipe',
      // LazyLoad
      component: () => Equipe,
    },
    {
      path: '/equipe/:id',
      name: 'funcionario',
      // LazyLoad
      component: () => Funcionario,
    },
    {
      path: '/:pathMatch(.*)',
      // LazyLoad
      component: () => PaginaNaoEncontrada,
    },
  ],
})

export default router
