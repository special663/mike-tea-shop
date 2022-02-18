import SXRequest from '../index'
import { IDataType } from '../types'
import { ILoginConfig } from './types'

export function accountLoginRequest(account: ILoginConfig) {
  console.log(account)
  return SXRequest.post<IDataType<any>>({
    url: '/login',
    data: account
  })
}
