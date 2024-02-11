/*import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {usePartiesStore} from './stores/PartiesStore'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
usePartiesStore()

app.mount('#app')*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

