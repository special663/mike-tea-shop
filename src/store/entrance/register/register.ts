import { accountRegister } from '@/service/register/register'
import { IRootState } from '@/store/types'
import { Toast } from 'vant'
import { Module } from 'vuex'
import { IRegisterState } from './types'

const register: Module<IRegisterState, IRootState> = {
  namespaced: true,
  state() {
    return {
      name: ''
    }
  },
  mutations: {
    changeName(state, payload: string) {
      state.name = payload
    }
  },
  actions: {
    async selectAction({ commit }, payload: any) {
      const { url, params } = payload
      const result = await accountRegister(url, params)
      switch (result.code) {
        case 200:
          commit('changeName', params.name)
          return true
        case 1000:
          Toast.fail({ message: result.data })
          return false
        case 1010:
          Toast.fail({ message: result.data })
          return false
        case 1100:
          Toast.fail({ message: result.data })
          return false
        case 1110:
          Toast.fail({ message: result.data })
          return false
        case 1111:
          Toast.fail({ message: result.data })
          return false
        default:
          return false
      }
    }
  }
}

export default register
