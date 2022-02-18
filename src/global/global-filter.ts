import { App } from 'vue'
import { filterPrice, filterPicture } from '@/utils/price-format'
import { formatCard } from '@/utils/card-format'

export default function formartPrice(app: App) {
  app.config.globalProperties.$filter = {
    formartPrice: filterPrice,
    filterPicture,
    formatCard
  }
}
