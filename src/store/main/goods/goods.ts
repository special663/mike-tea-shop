import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IGoodsListPayload, IGoodsState } from './types'
import { goodsService } from '@/service/main/goods/goods'
import { Toast } from 'vant'
import Store from '@/utils/cache'

const goods: Module<IGoodsState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsList: [],
      goodsSwipe: [],
      goodsDetail: null,
      goodsY: 0 //记录滑动的位置
    }
  },
  getters: {
    getGoodsInfo: (state) => (target: string) =>
      (state as any)[`goods${target}`]
  },
  mutations: {
    changeGoodsList(state, payload: any) {
      state.goodsList = payload
    },
    changeGoodsSwipe(state, payload: any) {
      state.goodsSwipe = payload
    },
    changeGoodsDetail(state, payload: any) {
      state.goodsDetail = payload
    },
    changeGoodsY(state, value: number) {
      state.goodsY = value
    }
  },
  actions: {
    async getGoodsList({ commit }, payload: IGoodsListPayload) {
      try {
        const { url } = payload
        let cache = ''
        if (payload.query) cache = payload.query + url
        if (payload.goodsId) cache = payload.goodsId + url
        else cache = url
        const { data, code } = await goodsService(cache)

        if (data.length || Object.keys(data).length) {
          const target = url.split('/')[1].split('')
          target[0] = target[0].toUpperCase()
          commit(`changeGoods${target.join('')}`, data)
          Store.setStorage(`goods${target.join('')}`, data)

          switch (code) {
            case 200:
              return true
            default:
              Toast.fail('服务器在火星失联了~')
              return false
          }
        }
      } catch (error: any) {
        console.log(error.message)
        return false
      }
    },
    async loadLocalGoodsList({ commit, dispatch }) {
      const storeName = ['List', 'Swipe']
      for (const item of storeName) {
        const store = Store.getStorage(`goods${item}`)
        if (store) {
          commit(`changeGoods${item}`, store)
        } else {
          if (item === 'Y') commit('changeGoodsY', 0)
          else dispatch('getGoodsList', { url: `/${item}` })
        }
      }
    }
  }
}

export default goods
