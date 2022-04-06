import { ITasteList } from '@/components/goods-taste/type'

//对商品的参数进行初始化
export default function formatParams(value: ITasteList) {
  const { material, sugar, temp } = value
  const _sugar = sugar.target ?? ''
  const _temp = temp.target ?? ''
  let _material = ''
  material.forEach((item: any) => {
    _material += `${item.target}/`
  })
  _material = _material.slice(0, _material.length - 1)
  let cache = ''
  if (_sugar && _temp) cache = `${_sugar}/${_temp}`
  else cache = _sugar + _temp
  if (material.length > 0) {
    return `[${_material}]` + cache
  } else return cache
}
