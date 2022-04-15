import Storage from '@/utils/cache'

const uid = Storage.getStorage('uid')

export default async function telePhoneHandle(Store: any, baseInfo: any) {
  const result = await Store.dispatch('mine/getAddressList', {
    url: '/telePhone',
    params: uid,
    type: 'telePhone'
  })
  if (result)
    baseInfo.telePhone = Store.getters['mine/getAddressInfo']('TelePhone')
}
