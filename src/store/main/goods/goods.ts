import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IGoodsListData, IGoodsListPayload, IGoodsState } from './types'
import {
  goodsService,
  postGoodsService,
  patchGoodsService
} from '@/service/main/goods/goods'
import { Toast } from 'vant'
import { filterMaterialPrice, emitShopBag } from './hooks'
import Store from '@/utils/cache'

const goods: Module<IGoodsState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsList: [], //商品列表
      goodsSwipe: [], //商品滑动展示
      goodsDetail: null, //单个商品详情
      goodsY: 0, //记录滑动的位置
      goodsMaterial: null, //小料参数
      goodsShopBag: null //商品购物袋
    }
  },
  getters: {
    getGoodsInfo: (state) => (target: string) =>
      (state as any)[`goods${target}`],
    getGoodsShopBagSize(state) {
      return state.goodsShopBag?.result.length
    }
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
    },
    changeGoodsMaterial(state, payload: any) {
      state.goodsMaterial = filterMaterialPrice(payload)
    },
    changeGoodsShopBag(state, payload: any) {
      state.goodsShopBag = payload
    }
  },
  actions: {
    //获取各种商品信息
    async getGoodsList({ commit }, payload: IGoodsListPayload) {
      try {
        const { url } = payload
        let cache = ''
        if (payload.query) {
          cache = payload.query + url
        } else if (payload.goodsId) cache = payload.goodsId + url
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
        return false
      }
    },
    //添加商品进行POST请求
    async postGoodsInfo({ dispatch }, payload: IGoodsListData) {
      try {
        const { url } = payload
        const { data } = await postGoodsService(url, payload?.data)
        return emitShopBag(data.code, { dispatch })
      } catch (error: any) {
        return false
      }
    },
    async patchGoodsInfo({ dispatch }, payload: IGoodsListData) {
      try {
        const { url } = payload
        const { data } = await patchGoodsService(url, payload.data)
        return emitShopBag(data.code, { dispatch })
      } catch (err) {
        return false
      }
    },
    //当页面刷新时，去本地缓存中获取对应的数据
    async loadLocalGoodsList({ commit, dispatch }) {
      const storeName = ['List', 'Swipe', 'ShopBag']
      for (const item of storeName) {
        const store = Store.getStorage(`goods${item}`)
        const token = Store.getStorage('token')
        if (!token && item === 'ShopBag') {
          Store.removeStorage('goodsShopBag')
        } else if (store) {
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
