import { ISXFormConfig } from '@/base-ui/form/types'

export const formConfig: ISXFormConfig = {
  fieldConfig: [
    {
      field: 'username',
      label: '用户名',
      name: 'username',
      type: 'text',
      maxlength: 14,
      placeholder: '请输入您的用户名',
      clearable: true,
      rules: [
        {
          require: true,
          message: '请输入您的用户名'
        },
        {
          pattern: /^[a-zA-Z0-9_-]{8,14}$/,
          message: '用户名格式错误 8-14位'
        }
      ]
    },
    {
      field: 'password',
      label: '密码',
      name: 'password',
      type: 'password',
      maxlength: 17,
      clearable: true,
      placeholder: '请输入您的密码',
      rules: [
        {
          require: true,
          message: '请输入您密码'
        },
        {
          pattern: /^[a-zA-Z]\w{8,16}$/,
          message: '[a-zA-Z]开头,长度在9~17,包含0-9, _'
        }
      ]
    }
  ],
  buttonConfig: {
    isShow: true,
    message: '登录'
  }
}
