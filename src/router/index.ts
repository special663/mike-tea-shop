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
        path: '/order',
        name: 'Order',
        component: () => import('@/views/main/order/Order.vue')
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
      },
      {
        path: '/address',
        name: 'Address',
        component: () => import('@/views/main/address/Address.vue'),
        redirect: 'addressList',
        children: [
          {
            path: '/addressList',
            name: 'AddressList',
            component: () =>
              import('@/views/main/address/cpms/address-main.vue')
          },
          {
            path: '/edit',
            name: 'Edit',
            component: () =>
              import('@/views/main/address/cpms/address-edit.vue')
          },
          {
            path: '/:id/edit',
            name: 'ModifyEdit',
            component: () =>
              import('@/views/main/address/cpms/address-edit.vue')
          }
        ]
      },
      {
        path: '/coupon',
        name: 'Coupon',
        component: () => import('@/views/main/coupon/Coupon.vue')
      },
      {
        path: '/settle',
        name: 'Settle',
        component: () => import('@/views/main/settle/Settle.vue')
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
