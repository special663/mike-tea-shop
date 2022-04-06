import { Toast } from 'vant'
import { IModifyCount } from '../type'

export default function countDecrement(
  tasteList: any,
  options: IModifyCount
): number {
  const { type, target } = options
  const _target = tasteList.value[type]
  //触底 提示
  if (!_target.length) {
    Toast({ message: '不能再少了啦' })
    return 0
  } else {
    //减少数量
    //1、找到下标
    const index = _target.findIndex((value: any) => value.target === target)
    //2、移除元素
    if (index >= 0) _target.splice(index, 1)
    else Toast({ message: '不能再少了啦' })
  }
  const curGoodsCount: any[] = _target.filter(
    (item: any) => item.target === target
  )
  return curGoodsCount.length
}
