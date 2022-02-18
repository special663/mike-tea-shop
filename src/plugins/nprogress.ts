import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { App } from 'vue'

NProgress.configure({ showSpinner: false })
const NProgressPlugin = {
  install: (app: App) => {
    app.config.globalProperties.$np = NProgress
  }
}

export default NProgressPlugin
