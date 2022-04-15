import SXRequest from '../../index'
import { IDataType } from '../../types'

export function getAddressService(url: string, account?: any) {
  return SXRequest.get<IDataType<any>>({
    url: `/address${url}`,
    params: account
  })
}

export function postAddressService(url: string, payload?: any) {
  return SXRequest.post<IDataType<any>>({
    url: `/address${url}`,
    data: payload
  })
}

export function deleteAddressService(url: string, payload?: any) {
  return SXRequest.delete<IDataType<any>>({
    url: `/address${url}`,
    data: payload
  })
}

export function patchAddressService(url: string, payload?: any) {
  return SXRequest.patch<IDataType<any>>({
    url: `/address${url}`,
    data: payload
  })
}
