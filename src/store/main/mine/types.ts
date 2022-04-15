export interface IMineState {
  addressList: any
  addressTelePhone: string
  addressDetail: any
}

export interface IServiceMethodByGet {
  url: string
  query?: string
  params?: string
  type: string
}

export interface IServiceMethodByPost {
  url: string
  params?: string
  type: string
  entity: any //POST实体
}
