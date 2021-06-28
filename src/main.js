import { createApp } from 'vue'
import App from './App.vue'
import GAuth from 'vue3-google-oauth2'
import './index.css'
import router from "./router"
import store from './store'
const gAuthOptions = { clientId: '578655982087-b0878kv0a4hlqcubg590nkm2u1n8f2u9.apps.googleusercontent.com'}

createApp(App)
    .use(router)
    .use(store)
    .use(GAuth, gAuthOptions)
    .mount('#app')
