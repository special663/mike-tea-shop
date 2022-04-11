import Storage from '@/utils/cache'
import { TIME_OUT } from '@/constants/global-types'
import { Toast } from 'vant'

const uid = Storage.getStorage('uid')
let timer: any = null
export default function beforeChange(
  count: number,
  goods_id: number | string,
  Store: any
) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(async () => {
    const result = await Store.dispatch('goods/patchGoodsInfo', {
      url: '/shopBag',
      data: { uid, goods_id, count }
    })
    if (!result) Toast('操作失败')
    timer = null
  }, TIME_OUT)
}
