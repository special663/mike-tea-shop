import { ILoginState } from './entrance/login/types'
import { IRegisterState } from './entrance/register/types'
import { IGoodsState } from './main/goods/types'

export interface IRootState {
  name: string
}

export interface IRootWithModule {
  login: ILoginState
  register: IRegisterState
  goods: IGoodsState
}
