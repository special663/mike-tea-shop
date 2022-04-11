import { App } from 'vue'
import { filterPrice, filterPicture } from '@/utils/price-format'
import { formatCard } from '@/utils/card-format'
import { filterTaste } from '@/utils/filter-taste'

export default function formartPrice(app: App) {
  app.config.globalProperties.$filter = {
    formartPrice: filterPrice,
    filterPicture,
    formatCard,
    filterTaste
  }
}
