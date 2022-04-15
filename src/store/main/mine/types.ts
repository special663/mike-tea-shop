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
  method?: string
}

export interface IServiceMethodByPost {
  url: string
  params?: string
  type: string
  entity: any //POST实体
  method?: string
}

export interface IServiceMethodByDelete {
  url: string
  params?: string
  type: string
  entity: any //DELETE参数
  method?: string //判断是GET | POST | DELETE
  redirect: IServiceMethodByGet //重定向发送网络请求的信息
}

export interface IServiceMethodByPatch {
  url: string
  params?: string
  type: string
  entity: any //DELETE参数
  method?: string //判断是GET | POST | DELETE
  redirect: IServiceMethodByGet //重定向发送网络请求的信息
}
