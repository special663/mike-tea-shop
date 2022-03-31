import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IRootWithModule } from './types'

import login from './entrance/login/login'
import register from './entrance/register/register'
import goods from './main/goods/goods'
import home from './main/home/home'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'mike-tea-shop'
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login,
    register,
    //main
    goods,
    home
  }
})

export function useStore(): Store<IRootWithModule> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('goods/loadLocalGoodsList')
  store.dispatch('login/loadLocalAuth')
}

export default store
