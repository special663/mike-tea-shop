import axios from 'axios'
import { AxiosInstance } from 'axios'

import { SXRequestConfig, SXRequestInterceptors } from './type'

const DEFAULT_LOADING = true
//局部拦截 -> 全局拦截 全局响应 -> 局部响应
class SXRequest {
  instance: AxiosInstance
  interceptors?: SXRequestInterceptors
  // loading?: any
  showLoading?: boolean
  //创建实例
  constructor(config: SXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ? config.showLoading : DEFAULT_LOADING
    //请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    //响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        // if (this.showLoading) {
        //   this.loading = ElLoading.service({
        //     lock: true,
        //     text: '正在加载',
        //     spinner: 'el-icon-loading',
        //     background: 'rgba(0, 0, 0, .5)'
        //   })
        // }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          // this.loading?.close()
        }, 1000)

        return res.data
      },
      (err) => {
        // this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: SXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      if (config?.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: SXRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: SXRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: SXRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: SXRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default SXRequest
