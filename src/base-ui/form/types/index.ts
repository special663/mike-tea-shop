type typeData = 'input' | 'text' | 'password' | 'radio' | 'address' | 'auto'
type typeSize = 'large' | 'small' | ' mini'
type typeButtonType = 'primary' | 'success' | 'warning' | 'danger'
type typeDirection = 'horizontal' | 'vertical'

export interface IFormConfig {
  'label-width'?: number | string
  'label-align'?: string
  'submit-on-enter'?: boolean
  'show-error'?: boolean
  'validate-first'?: boolean
}

export interface IFieldConfig {
  field: any
  label?: string
  name?: string
  id?: string
  type: typeData
  size?: string
  maxlength?: number | string
  placeholder?: string
  border?: boolean
  required?: boolean
  rules?: FieldRules[]
  clearable?: boolean
  'left-icon'?: string
  'right-icon'?: string
  direction?: typeDirection
  //单选框的属性
  'checked-color'?: string
  'radio-select'?: IRadioSelect[]
  //是否展示右侧按钮
  'field-button'?: IFieldButton
  //自定义插槽占位
  'other-slot'?: string
  'other-value'?: any
}

export interface FieldRules {
  require?: boolean
  message?: any
  validator?: any
  pattern?: any
  trigger?: string
  formatter?: any
}

export interface IButtonConfig {
  isShow: boolean
  message?: string
  color?: string
  style?: string
}

export interface ISXFormConfig {
  formConfig?: IFormConfig
  fieldConfig?: IFieldConfig[]
  buttonConfig?: IButtonConfig
}
//radio内的限制
export interface IRadioSelect {
  name: string | number
  tip: string | number
}

//表单右侧按钮属性
export interface IFieldButton {
  isShow: true
  size: typeSize
  type: typeButtonType
  message: string
}
