import Vue from 'vue';

import './plugins/element';
import './assets/tailwind.css';
import GoogleAuth from '@/config/google_oAuth';
import router from './router';
import store from './store';
import App from './App.vue';

const gauthOption = {
  clientId: '578655982087-b0878kv0a4hlqcubg590nkm2u1n8f2u9.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
};
Vue.use(GoogleAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
