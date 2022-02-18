import SXRequest from './request'
import { TIME_OUT, BASE_URL } from './request/config'

import Store from '@/utils/cache'
import { Toast } from 'vant'

const request = new SXRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptors: (config) => {
      const token = Store.getStorage('token')
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      return config
    },
    responseInterceptorsCatch: (error) => {
      Toast.fail('出现未知力量的吸引~~')
      return error
    }
  }
})

export default request
