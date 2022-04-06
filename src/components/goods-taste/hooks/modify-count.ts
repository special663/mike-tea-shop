//函数说明，用来做增加/减少 操作的
import { IModifyCount } from '../type'
import { filterElement, countIncrement, countDecrement } from '../hooks'
//模式 靶向列表 配置选项

export default function modifyCount(
  mode: string,
  tasteList: any,
  options: IModifyCount
) {
  let count = 0
  switch (mode) {
    case 'increment':
      count = countIncrement(tasteList, options)
      break
    case 'decrement':
      count = countDecrement(tasteList, options)
      break
    default:
      return
  }
  const { id, els } = options
  const element: any = filterElement(id, els)
  if (count) {
    element.innerHTML = `${count}`
    element.style.display = 'block'
  } else {
    element.style.display = 'none'
  }
}
