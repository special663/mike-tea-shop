type positionEnum = 'left' | 'center' | 'top' | 'bottom' | 'right'

export interface IPopupConfig {
  position: positionEnum
  overlay?: boolean
  style: IPopupStyle
  round?: boolean
}

export interface IPopupStyle {
  height?: string
  width?: string
}
