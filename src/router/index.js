import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
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
    component: () => import(/* webpackChunkName: "track" */ '../components/views/TrackTime.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Home,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Home,
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
  return next();
});

export default router
