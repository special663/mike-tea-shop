import IMineListConfig from '@/components/mine-list/types'
export const mineListConfigs: IMineListConfig[] = [
  {
    title: '我的订单',
    options: [
      {
        name: 'bill-o',
        route: 'order',
        color: '',
        tip: '门店订单',
        size: 25
      }
    ]
  },
  {
    title: '我的功能',
    options: [
      {
        name: 'coupon',
        route: 'coupon',
        color: 'green',
        tip: '我的优惠卷',
        size: 25
      },
      {
        name: 'location',
        route: 'address',
        color: 'green',
        tip: '我的位置',
        size: 25
      }
    ]
  }
]
