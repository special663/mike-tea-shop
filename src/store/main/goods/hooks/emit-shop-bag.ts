import Storage from '@/utils/cache'

interface IMethodsType {
  dispatch: any
}

export default function emitShopBag(
  code: string | number,
  methods: IMethodsType
) {
  const uid = Storage.getStorage('uid')
  switch (code) {
    case 200:
      //直接发送网络请求获取购物袋参数
      methods.dispatch('getGoodsList', {
        url: '/shopBag',
        query: `/${uid}`
      })
      return true
    default:
      return false
  }
}
