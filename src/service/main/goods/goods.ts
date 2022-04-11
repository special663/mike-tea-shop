import SXRequest from '../../index'
import { IDataType } from '../../types'

export function goodsService(url: string, account?: any) {
  return SXRequest.get<IDataType<any>>({
    url: `/goods${url}`,
    params: account
  })
}

export function postGoodsService(url: string, payload?: any) {
  return SXRequest.post<IDataType<any>>({
    url: `/goods${url}`,
    data: payload
  })
}

export function patchGoodsService(url: string, payload?: any) {
  return SXRequest.patch<IDataType<any>>({
    url: `/goods${url}`,
    data: payload
  })
}
