import './assets/style.css'
// import './assets/reset.css'

// Importaciones de VUEJS
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importaciones de FormKit
import { plugin } from '@formkit/vue'
import config from './formkit.config.js'
import '@formkit/themes/genesis' // Manera #2 de aplicar estilos genesis


const app = createApp(App)

app.use(plugin,config)

app.use(router)

app.mount('#app')
