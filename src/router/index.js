import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/recommend',
    component: HelloWorld
  },
  {
    path: '/rank',
    component: HelloWorld
  },
  {
    path: '/personal',
    component: HelloWorld
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
