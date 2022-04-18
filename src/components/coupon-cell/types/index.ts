type typeDescription = '折' | '元'

export interface ICouponCellConfig {
  id: number | string
  discount: string | number //折扣幅度
  description: typeDescription // 折 或者 元
  limit: string // 无限制 或者 有限制
  source: string //【完善信息】之类
  label: string // 商品卷的类型 奶茶
  createAt: number | string // 起始时间
  endAt: number | string //结束时间
  discountDesc?: string //88折 8.8元这样
  express?: string
}

export interface ICouponConfig {
  replenish: boolean
}
