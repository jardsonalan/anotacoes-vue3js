import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('NavBar', NavBar) // Componente global

app.mount('#app')
