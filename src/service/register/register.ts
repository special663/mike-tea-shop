import SXRequest from '../index'
import { IDataType } from '../types'

export function accountRegister(url: string, account: any) {
  return SXRequest.post<IDataType<any>>({
    url,
    data: account
  })
}
