import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import {
  IMineState,
  IServiceMethodByDelete,
  IServiceMethodByGet,
  IServiceMethodByPost,
  IServiceMethodByPatch
} from './types'
import { formatParams, emitMine } from './hooks'
import {
  deleteAddressService,
  getAddressService,
  patchAddressService,
  postAddressService
} from '@/service/mine/address'

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
    },
    //Mission 1、删除地址信息
    async deleteAddressList({ dispatch }, payload: IServiceMethodByDelete) {
      const { url, params, type, entity, redirect } = payload
      let effect = url
      if (params) effect = formatParams(url, params)
      const { data } = await deleteAddressService(effect, entity)
      return emitMine(
        { code: data.code, mutations: type, result: redirect },
        { dispatch }
      )
    },
    //Mission 2、修改地址信息
    async patchAddressList({ dispatch }, payload: IServiceMethodByPatch) {
      const { url, params, type, entity, redirect } = payload
      let effect = url
      if (params) effect = formatParams(url, params)
      const { data } = await patchAddressService(effect, entity)
      return emitMine(
        { code: data.code, mutations: type, result: redirect },
        { dispatch }
      )
    }
  }
}

export default mine
