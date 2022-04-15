import { Toast } from 'vant'
import Storage from '@/utils/cache'
import transitionGender from './transition-gender'
import transitionLabel from './transition-label'
const uid = Storage.getStorage('uid')
//获取地址信息，直接发送网络请求获取
export default async function setupBaseInfo(Store: any, id: any) {
  id = Number(id)
  const result = await Store.dispatch('mine/getAddressList', {
    url: '/detail',
    params: `${id}`,
    type: 'detail',
    query: {
      uid
    }
  })
  if (!result) {
    Toast('操作失败')
    return false
  } else {
    const addressDetail: any = await Store.getters['mine/getAddressInfo'](
      'Detail'
    )
    addressDetail.label = transitionLabel('tip', addressDetail.label)
    addressDetail.gender = transitionGender('tip', addressDetail.gender)
    return addressDetail
  }
}
