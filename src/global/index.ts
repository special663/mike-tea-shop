import registerVantsElement from './global-vant'
import formartPrice from './global-filter'
import eventBus from './global-mitt'
import type { App } from 'vue'

export default function register(app: App): void {
  app.use(registerVantsElement)
  app.use(formartPrice)
  app.use(eventBus)
}
