export default interface ICellConfig {
  //cell自带的属性
  title?: number | string
  value?: number | string
  label?: string
  size?: typeSize
  icon?: string
  'icon-prefix'?: string
  url?: string
  to?: string | any
  border?: boolean
  replace?: boolean
  clickable?: boolean
  'is-link'?: boolean
  require?: boolean
  center?: boolean
  'arrow-direction'?: typeArrowDirection
  'title-style'?: typeStyle
  'title-class'?: typeStyle
  'value-class'?: typeStyle
  'label-class'?: typeStyle
  //自定义属性
  // slots?: typeSolt[]
}

type typeSize = 'large'
type typeArrowDirection = 'left' | 'up' | 'down' | 'right'
type typeStyle = string | any[] | any
// type typeSolt = 'title' | 'value' | 'label' | 'icon' | 'right-icon' | 'extra'
