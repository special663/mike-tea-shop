import { Toast } from 'vant'
import Storage from '@/utils/cache'
import transitionGender from './transition-gender'
import transitionLabel from './transition-label'

type typeDescription =
  | 'name'
  | 'gender'
  | 'telePhone'
  | 'details'
  | 'label'
  | 'address'

interface IBaseInfo {
  name: string
  gender: string
  telePhone: string
  details: string
  label: string
}

export default async function submitHandle(
  baseInfo: IBaseInfo,
  Store: any,
  Router: any
) {
  const user_id = Storage.getStorage('uid')
  const keys = Object.keys(baseInfo)
  for (const item of keys) {
    if (!(baseInfo as any)[item]) {
      emitSubmit(item as typeDescription)
      return
    }
  }
  //转换类型
  baseInfo.gender = transitionGender('name', baseInfo.gender)
  baseInfo.label = transitionLabel('index', baseInfo.label)
  //发送网络请求
  const result = await Store.dispatch('mine/postAddressList', {
    url: '/addition',
    type: 'list',
    entity: {
      ...baseInfo,
      user_id
    }
  })
  //返回结果进行判断
  if (!result) Toast('操作失败')
  else Router.back()
}

function emitSubmit(description: typeDescription) {
  let message = ''
  switch (description) {
    case 'name':
      message = '填个名字呗'
      break
    case 'gender':
      message = '称呼不能少哦'
      break
    case 'telePhone':
      message = '手机号不能为空'
      break
    case 'address':
      message = '地址必填哦'
      break
    case 'details':
      message = '门牌号必填哦'
      break
    case 'label':
      message = '标签也要明确哦'
      break
    default:
      message = '操作失效'
  }
  Toast(message)
}
