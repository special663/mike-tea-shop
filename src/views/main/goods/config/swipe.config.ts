import { ISwipeConfig } from '@/base-ui/swipe/types'
import Storage from '@/utils/cache'

export const swipeConfig: ISwipeConfig = {
  autoplay: '3000',
  'indicator-color': 'rgba(29,136,92)',
  style:
    'width: 260px; height: 150px; margin: auto; border-radius: 10px;background-color: null;'
}

export const swipeItemConfig = Storage.getStorage('goodsSwipe')
