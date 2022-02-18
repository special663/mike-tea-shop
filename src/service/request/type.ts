import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//AxiosResponse
export interface SXRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

export interface SXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SXRequestInterceptors<T>
  showLoading?: boolean
}
