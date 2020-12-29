/**
 * @description 路由
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Main',
  component: () => import('@/pages/index.vue'),
},{
  path: "/404",
  component: () => import('@/pages/404.vue'),
}];

export default new Router({
  mode: 'history',
  routes
})