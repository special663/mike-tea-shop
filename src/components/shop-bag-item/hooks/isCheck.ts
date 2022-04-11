import { Toast } from 'vant'
import Storage from '@/utils/cache'
import { BREVITY_TIME_OUT } from '@/constants/global-types'
import { IShopBagItemConfig } from '../types'

let timer: any = null
const uid = Storage.getStorage('uid')

export default function isCheck(payload: IShopBagItemConfig, Store: any) {
  if (timer) clearTimeout(timer)
  if (!uid) Toast('操作失败')
  timer = setTimeout(async () => {
    const { id, goods_id } = payload
    const affirm = !payload.affirm
    const result = await Store.dispatch('goods/patchGoodsInfo', {
      url: '/shopBag/affirm',
      data: { id, affirm, goods_id, uid }
    })
    if (!result) Toast('操作失败')
  }, BREVITY_TIME_OUT)
}
