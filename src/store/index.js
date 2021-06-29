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
        selectedProject: projects[0],
        descriptions,
        period: 'weekly',
        theme: 2,
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
    },
    setPeriod(state, per){
      state.period = per;
    }
  },
  modules: {
    getLoginUserInfo(state) {
      return state.loginUser;
    },
  },
})
export default store
