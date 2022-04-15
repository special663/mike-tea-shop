import { GENDER_OPTIONS } from '@/constants/global-object'

type typeMode = 'name' | 'tip'
//name模式是tip转换成name tip模式是name转换成tip
export default function transitionOptions(mode: typeMode, payload: string) {
  let target: typeMode = 'name'
  target = mode === 'name' ? 'tip' : 'name'
  for (const option of GENDER_OPTIONS) {
    if (option[mode] === payload) return option[target]
  }
  //默认返回
  return '先生'
}
