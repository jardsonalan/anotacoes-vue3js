import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar.vue'
// Estilo CSS: Global
import '@/assets/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('NavBar', NavBar) // Componente global
// Diretiva personalizada: Global
app.directive('email', {
  created(el, biding) {
    // el.style.color = 'blue';
    // console.log(el.innerText);
    el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`
  },
})

app.mount('#app')
