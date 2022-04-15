import Storage from '@/utils/cache'
import { Toast } from 'vant'
const uid = Storage.getStorage('uid')

export default async function deleteHandle(
  Store: any,
  Router: any,
  id: number | string
) {
  if (!uid) {
    Toast('操作失败')
    return false
  }
  const result = await Store.dispatch('mine/deleteAddressList', {
    url: '/detail',
    type: 'list',
    entity: { id, uid },
    redirect: {
      url: '/list',
      params: uid,
      type: 'list'
    }
  })
  if (!result) {
    Toast('操作失败')
    return false
  } else {
    Toast('删除成功')
    Router.replace('/addressList')
    Router.back()
    return true
  }
}
