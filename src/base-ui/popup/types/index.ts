type positionEnum = 'left' | 'center' | 'top' | 'bottom' | 'right'

export interface IPopupConfig {
  position: positionEnum
  overlay?: boolean
  style: IPopupStyle
  round?: boolean
  teleport?: string
  'lock-scroll'?: boolean
}

export interface IPopupStyle {
  'min-height'?: string | number
  'max-height'?: string | number
  height?: string
  width?: string
  bottom?: string
  'z-index'?: string | number
}
