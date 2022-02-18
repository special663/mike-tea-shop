type typeEnum = 'spinner' | 'circular'

export interface ILoadingConfig {
  color?: string
  type: typeEnum
  size: number | string
  'text-size'?: number | string
  'text-color'?: string
  vertical?: boolean
  message?: string
}
