import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//路由跳转的组件，要提前注入
import Home from '@/pages/home.vue';
import Login from '@/pages/login.vue';

//路由配置
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login
    }
  ]
});

export default router;
