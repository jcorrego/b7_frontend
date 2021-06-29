import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
import Search from '../components/views/Search.vue'
import ProjectSettings from '../components/views/ProjectSettings.vue'
import Login from '../components/views/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/track',
    name: 'Track Time',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "track" */ '../components/views/TrackTime2.vue'),
  },
  {
    path: '/track2',
    name: 'Track Time 2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "track" */ '../components/views/TrackTime2.vue'),
  },
  {
    path: '/project/settings',
    name: 'Project Settings',
    component: ProjectSettings,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  if(loggedIn && to.path == '/login'){
    return next('/track');
  }
  if(loggedIn && to.path == '/'){
    return next('/track');
  }
  return next();
});

export default router
