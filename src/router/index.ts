import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Storage from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/entrance/login/Login.vue')
  },
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/main/system/System.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/main/home/Home.vue')
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => import('@/views/main/goods/Goods.vue')
      },
      {
        path: '/moments',
        name: 'Moments',
        component: () => import('@/views/main/moments/Moments.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/main/mine/Mine.vue')
      },
      {
        path: '/:id/detail',
        name: 'Detail',
        component: () => import('@/views/main/detail/Detail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path === '/' && Storage.getStorage('token')) {
    return '/home'
  }
})

export default router
