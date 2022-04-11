import { Dialog, Toast } from 'vant'
import Storage from '@/utils/cache'

export default function clearAllDialog(Store: any) {
  const uid = Storage.getStorage('uid')
  if (!uid) {
    Toast('没有权限')
    return false
  }
  Dialog.confirm({
    title: '提示',
    message: '确定要清空购物袋么',
    overlay: false
  })
    .then(() => {
      // on confirm
      Store.dispatch('goods/postGoodsInfo', {
        url: `/${uid}/shopBag`
      })
    })
    .catch(() => {
      // on cancel
    })
}
