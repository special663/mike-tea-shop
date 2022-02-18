import { App } from 'vue'
import NProgressPlugin from './nprogress'

export default function register(app: App) {
  app.use(NProgressPlugin)
}
