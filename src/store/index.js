import { createStore } from 'vuex'
import { setStore, getStore, removeItem } from '../config/utils';
import projects from './projects';
import descriptions from './descriptions';

const user = getStore('user');
const store = createStore({
  state() {
      return {
        loginUser: user,
        projects,
        selectedProject: null,
        descriptions
      }
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
    selectProject(state, project){
      if(project.id === 0) state.selectedProject = null
      else state.selectedProject = project
    }
  },
  modules: {
    getLoginUserInfo(state) {
      return state.loginUser;
    },
  },
})
export default store
