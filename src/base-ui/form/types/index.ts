type typeData = 'input' | 'text' | 'password'

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
}

export interface ISXFormConfig {
  formConfig?: IFormConfig
  fieldConfig?: IFieldConfig[]
  buttonConfig?: IButtonConfig
}
