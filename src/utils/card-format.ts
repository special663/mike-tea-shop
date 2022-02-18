import { ICardConfig } from '@/base-ui/card/types'

export function formatCard(config: any) {
  const formated: ICardConfig = {
    id: config?.id,
    title: config?.name,
    price: config?.oldPrice,
    thumb:
      config.picture !== null
        ? config.picture[0]
        : 'https://img.yzcdn.cn/vant/ipad.jpeg'
  }
  return formated
}
