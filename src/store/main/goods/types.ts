export interface IGoodsState {
  goodsList: any
  goodsSwipe: any
  goodsDetail: any
  goodsY: number
  goodsMaterial: any
  goodsShopBag: any
}

export interface IGoodsListPayload {
  url: string
  query?: string
  goodsId?: string
}

export interface IGoodsListData {
  url: string
  data?: any
}
