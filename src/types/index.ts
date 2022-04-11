export enum ModeType {
  DEFAULT
}

export interface IGoodsInfo {
  bedCharge: string
  currentPrice: any
  detail: string
  id: number
  images: any[]
  main: string
  material: any[]
  name: string
  oldPrice: number
  sugar: any[]
  temp: any[]
}

export enum Methods {
  session,
  local
}
