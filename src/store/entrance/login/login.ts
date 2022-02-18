import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ILoginState } from './types'
import { accountLoginRequest } from '@/service/login/login'
import Storage from '@/utils/cache'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      uid: 0,
      name: '',
      token: '',
      avatar: ''
    }
  },
  getters: {
    getLoginInfo: (state) => (target: string) => (state as any)[target]
  },
  mutations: {
    changeUid(state, payload: number) {
      state.uid = payload
    },
    changeName(state, payload: string) {
      state.name = payload
    },
    changeToken(state, payload: string) {
      state.token = payload
    },
    changeAvatar(state, payload: string) {
      state.avatar = payload
    }
  },
  actions: {
    async loginAction({ commit }, payload: any) {
      try {
        const { data, code } = await accountLoginRequest({
          name: payload.username,
          password: payload.password
        })
        switch (code) {
          case 200:
            commit('changeUid', data.uid)
            Storage.setStorage('uid', data.uid)

            commit('changeName', data.name)
            Storage.setStorage('name', data.name)

            commit('changeToken', data.token)
            Storage.setStorage('token', data.token)

            commit('changeAvatar', data.avatarUrl)
            Storage.setStorage('avatar', data.avatarUrl)
            return true
          case 400:
            Storage.removeStorage('uid')
            Storage.removeStorage('name')
            Storage.removeStorage('token')
            Storage.removeStorage('avatar')
            return false
          default:
            return false
        }
      } catch (err: any) {
        return false
      }
    },
    async loadLocalAuth({ commit }) {
      const storageName = ['uid', 'name', 'token', 'avatar']
      for (let item of storageName) {
        const storage = Storage.getStorage(`${item}`)
        if (storage) {
          const cache = item.split('')
          cache[0] = cache[0].toUpperCase()
          item = cache.join('')
          commit(`change${item}`, storage)
        }
      }
    }
  }
}

export default login
