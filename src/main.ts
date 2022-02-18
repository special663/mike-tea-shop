import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//初始化全局CSS
import 'normalize.css'
import './assets/css/index.less'
import register from '@/global'
import plugins from '@/plugins'
import { setupStore } from '@/store'

const app = createApp(App)
app.use(register)
app.use(plugins)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
