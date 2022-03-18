import { createApp } from 'vue'
import store from './store'
import router from "./router";
import Index from './components/Index'
require('./bootstrap');


const app = createApp(Index).use(router)

app.use(store)
app.mount('#app')
