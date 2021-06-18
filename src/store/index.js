import Vue from 'vue';
import Vuex from 'vuex';
import { setStore, getStore, removeItem } from '@/config/utils';

Vue.use(Vuex);
const user = getStore('user');

export default new Vuex.Store({
  state: {
    loginUser: user,
  },
  mutations: {
    setLoginUser(state, us) {
      state.loginUser = us;
      setStore('user', us);
    },
    removeLoginUser(state) {
      state.loginUser = null;
      removeItem('user');
    },
  },
  actions: {
  },
  modules: {
    getLoginUserInfo(state) {
      return state.loginUser;
    },
  },
});
