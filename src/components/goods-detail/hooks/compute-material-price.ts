import { filterPrice } from '@/utils/price-format'
import { ModeType } from '@/types'
//计算是否有选中小料，并且计算小料的价格
export default function computeMaterialPrice(store: any, payload: any) {
  const cache: any[] = payload?.material
  let materialPrice = 0
  if (cache.length) {
    cache.forEach(
      (item) =>
        (materialPrice += Number(
          filterPrice(
            {
              store,
              listName: item.target
            },
            ModeType.DEFAULT
          )
        ))
    )
  }
  return materialPrice
}
