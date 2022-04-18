import {
  ICouponCellConfig,
  ICouponConfig
} from '@/components/coupon-cell/types'

export const couponCellConfigs: ICouponCellConfig[] = [
  {
    id: 1,
    discount: 8.8,
    description: '折',
    limit: '无限制',
    source: '完善信息',
    label: '奶茶',
    createAt: '2022-04-15 00:00:00',
    endAt: '2022-05-14 23:59:59 0000000'
  },
  {
    id: 2,
    discount: 8.8,
    description: '元',
    limit: '无限制',
    source: '完善信息',
    label: '奶茶',
    createAt: '2022-04-15 00:00:00',
    endAt: '2022-05-14 23:59:59 0000000'
  },
  {
    id: 3,
    discount: 8.8,
    description: '元',
    limit: '无限制',
    source: '完善信息',
    label: '奶茶',
    createAt: '2022-04-15 00:00:00',
    endAt: '2022-05-14 23:59:59 0000000'
  },
  {
    id: 4,
    discount: 8.8,
    description: '折',
    limit: '无限制',
    source: '完善信息',
    label: '奶茶',
    createAt: '2022-04-15 00:00:00',
    endAt: '2022-05-14 23:59:59 0000000'
  },
  {
    id: 5,
    discount: 8.8,
    description: '折',
    limit: '无限制',
    source: '完善信息',
    label: '奶茶',
    createAt: '2022-04-15 00:00:00',
    endAt: '2022-05-14 23:59:59 0000000'
  }
]

export const couponConfig: ICouponConfig = {
  replenish: false
}
