import { ISwipeConfig } from '@/base-ui/swipe/types'
import Storage from '@/utils/cache'

export const swipeConfig: ISwipeConfig = {
  autoplay: '3000',
  'indicator-color': 'white'
}

export const swipeItemConfig = Storage.getStorage('goodsSwipe')
