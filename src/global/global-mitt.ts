import { App } from 'vue'
import mitt from 'mitt'

export default function eventBus(app: App) {
  app.config.globalProperties.$bus = mitt()
}
