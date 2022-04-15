export default interface IProgressConfig {
  percentage?: number | string //进度百分比
  'stroke-width'?: number | string //进度条粗细
  color?: string
  'track-color'?: string
  'pivot-text'?: string
  'pivot-color'?: string
  'text-color'?: string
  inactive?: boolean
  'show-pivot'?: boolean
}
