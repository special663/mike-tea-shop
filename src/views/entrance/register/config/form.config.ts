import { ISXFormConfig } from '@/base-ui/form/types'

export const registerFormConfig: ISXFormConfig = {
  formConfig: {
    'show-error': true,
    'validate-first': true
  },
  fieldConfig: [
    {
      field: 'name',
      label: '用户名',
      name: 'name',
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
          message: '[a-zA-Z]开头,长度在9~17，包含0-9, _'
        }
      ]
    },
    {
      field: 'verifyPassword',
      label: '确认密码',
      name: 'verifyPassword',
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
          message: '[a-zA-Z]开头,长度在9~17，包含0-9, _'
        }
      ]
    }
  ],
  buttonConfig: {
    isShow: true,
    message: '确定'
  }
}

export const infoFormConfig: ISXFormConfig = {
  formConfig: {
    'show-error': true,
    'validate-first': true
  },
  fieldConfig: [
    {
      field: 'realName',
      label: '姓名',
      name: 'realName',
      type: 'text',
      maxlength: 10,
      placeholder: '请输入您的真实姓名',
      clearable: true,
      rules: [
        {
          require: true,
          message: '请输入您的用户名'
        },
        {
          pattern: /^[\u4E00-\u9FA5]{2,7}$/,
          message: '请输入2-7位名字'
        }
      ]
    },
    {
      field: 'telePhone',
      label: '电话号码',
      name: 'telePhone',
      type: 'text',
      maxlength: 15,
      placeholder: '请输入您的联系方式',
      clearable: true,
      rules: [
        {
          require: true,
          message: '请输入您的联系方式'
        },
        {
          pattern:
            /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
          message: '请输入正确的手机号'
        }
      ]
    },
    {
      field: 'IDNumber',
      label: '身份证号码',
      name: 'IDNumber',
      type: 'text',
      maxlength: 18,
      placeholder: '请输入身份证号码',
      clearable: true,
      rules: [
        {
          require: true,
          message: '请输入身份证号码'
        },
        {
          pattern: /^\d{15}|\d{18}$/,
          message: '15/18位身份证'
        }
      ]
    }
  ],
  buttonConfig: {
    isShow: true,
    message: '确定'
  }
}

export const successConfig: ISXFormConfig = {
  buttonConfig: {
    isShow: false,
    message: '马上去登录'
  }
}
