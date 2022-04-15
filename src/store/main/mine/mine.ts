import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IMineState, IServiceMethodByGet, IServiceMethodByPost } from './types'
import { formatParams, emitMine } from './hooks'
import { getAddressService, postAddressService } from '@/service/mine/address'

const mine: Module<IMineState, IRootState> = {
  namespaced: true,
  state() {
    return {
      addressList: [],
      addressTelePhone: '',
      addressDetail: null
    }
  },
  getters: {
    getAddressInfo: (state: any) => (description: string) =>
      state[`address${description}`]
  },
  mutations: {
    setAddressList(state, payload: any) {
      state.addressList = payload
    },
    setAddressTelePhone(state, payload: any) {
      state.addressTelePhone = payload
    },
    setAddressDetail(state, payload: any) {
      state.addressDetail = payload
    }
  },
  actions: {
    //Missions 1、获取用户地址列表 2、获取用户手机号码
    async getAddressList({ commit }, payload: IServiceMethodByGet) {
      let effect = ''
      const { url, params, type, query } = payload
      if (params) effect = formatParams(url, params)
      const { data } = await getAddressService(effect, query)
      //设置值
      return emitMine(
        { code: data.code, mutations: type, result: data[type] },
        { commit }
      )
    },
    //Missions 1、地址信息提交
    async postAddressList({ commit }, payload: IServiceMethodByPost) {
      const { url, params, type, entity } = payload
      let effect = url
      if (params) effect = formatParams(url, params)
      const { data } = await postAddressService(effect, entity)
      return emitMine(
        { code: data.code, mutations: type, result: data[type] },
        { commit }
      )
    }
  }
}

export default mine
