import { ModeType } from '@/types'

type payloadType = {
  store: any
  listName: string
}

export const filterPrice = (
  raw: number | payloadType,
  mode?: ModeType
): number | string => {
  if (typeof raw === 'number') {
    raw = Number(raw)
    return `￥${raw.toFixed(2)}`
  } else {
    const { store, listName } = raw
    const materialList: any = store.getters['goods/getGoodsInfo']('Material')
    const curPrice: number = materialList[listName]
    switch (mode) {
      case ModeType.DEFAULT:
        return curPrice.toFixed(0)
      default:
        return `￥${curPrice.toFixed(0)}`
    }
  }
}

export const filterPicture = (raw: string) => {
  return require(`@/assets/img/png/${raw}.png`)
}
