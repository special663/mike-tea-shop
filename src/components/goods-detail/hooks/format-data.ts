import { IGoodsInfo, Methods } from '@/types'
import Storage from '@/utils/cache'
import { Toast } from 'vant'

interface IGoodsData {
  goodsParams: IGoodsInfo
  goodsPrice: number | string
  goodsTaste: string
  goodsCount: number
}
//格式化参数，进行网络请求
export default function formatData(payload: IGoodsData, Router: any) {
  //获取到用户的uid进行记录
  const uid = Storage.getStorage('uid')
  const token = Storage.getStorage('token')
  if (!uid || !token) {
    Toast('信息丢失,请重新登录')
    Storage.removeStorage('token')
    Storage.removeStorage('uid')
    Router.replace('/')
  }
  const { goodsParams, goodsPrice, goodsTaste, goodsCount } = payload
  const target: any = {
    id: goodsParams.id,
    uid,
    name: goodsParams.name,
    images: goodsParams.images,
    price: goodsPrice,
    taste: goodsTaste,
    count: goodsCount
  }
  return target
}
