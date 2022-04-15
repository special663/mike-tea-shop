import { LABEL_OPTIONS } from '@/constants/global-object'

type typeMode = 'index' | 'tip'
//index模式是tip转换成index tip模式是index转换成tip
export default function transitionOptions(mode: typeMode, payload: string) {
  let target: typeMode = 'index'
  target = mode === 'index' ? 'tip' : 'index'
  for (const option of LABEL_OPTIONS) {
    if (option[mode] === payload) return option[target]
  }
  //默认返回
  return ''
}
