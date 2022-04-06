import { Toast } from 'vant'
import { IModifyCount } from '../type'

export default function countIncrement(
  tasteList: any,
  options: IModifyCount
): number {
  const { type, index, target } = options
  const _target = tasteList.value[type]
  // 触顶 提示
  if (_target.length >= 2) {
    Toast({ message: '最多选购2份加料哦!' })
    const curGoodsCount: any[] = _target.filter(
      (item: any) => item.target === target
    )
    return curGoodsCount.length
  } else {
    //添加商品
    _target.push({ index, target })
  }
  const curGoodsCount: any[] = _target.filter(
    (item: any) => item.target === target
  )
  return curGoodsCount.length
}
