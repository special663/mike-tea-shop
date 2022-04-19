import Storage from '@/utils/cache'
import { Toast } from 'vant'
import { BREVITY_TIME_OUT } from '@/constants/global-types'
import { IShopBagItemConfig } from '@/components/shop-bag-item/types'

let timer: any = null
const uid = Storage.getStorage('uid')

export default function checkAll(
  payload: IShopBagItemConfig,
  chose: boolean,
  Store: any
) {
  console.log(payload)
  if (timer) clearTimeout(timer)
  if (!uid) Toast('操作失败')
  timer = setTimeout(async () => {
    const result = await Store.dispatch('goods/patchGoodsInfo', {
      url: '/shopBag/affirm',
      data: { uid, chose }
    })
    if (!result) Toast('操作失败')
  }, BREVITY_TIME_OUT)
}
