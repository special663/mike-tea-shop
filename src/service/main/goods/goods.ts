import SXRequest from '../../index'
import { IDataType } from '../../types'

export function goodsService(url: string, account?: any) {
  return SXRequest.get<IDataType<any>>({
    url: `/goods${url}`,
    params: account
  })
}
