import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IHomeState } from './types'

const home: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      homeY: 0
    }
  },
  getters: {
    getHomeInfo: (state: any) => (target: string) => {
      return state[`home${target}`]
    }
  },
  mutations: {
    changeHomeY(state, payload: number) {
      state.homeY = payload
    }
  }
}

export default home
