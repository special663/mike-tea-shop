type typeStyle = 'line' | 'card'

export interface ITabsConfig {
  type?: typeStyle
  color?: string
  background?: string
  duration?: number | string
  'line-width'?: number | string
  'line-height'?: number | string
  animated?: boolean
  border?: boolean
  ellipsis?: boolean
  sticky?: boolean
  shrink?: boolean
  swipeable?: boolean
  'lazy-render'?: boolean
  scrollspy?: boolean
  'offset-top'?: number | string
  'swipe-threshold'?: number | string
  'title-active-color'?: string
  'title-inactive-color'?: string
  'before-change'?: any
}

export interface ITabConfig {
  title?: string
  disabled?: boolean
  dot?: boolean
  badge?: number | string
  name?: number | string
  url?: string
  to?: string | any
  replace?: boolean
  'title-style'?: string | any[] | any
  'title-class'?: string | any[] | any
}
