export interface IGoodsState {
  goodsList: any
  goodsSwipe: any
  goodsDetail: any
  goodsY: number
  goodsMaterial: any
}

export interface IGoodsListPayload {
  url: string
  query?: string
  goodsId?: string
}
