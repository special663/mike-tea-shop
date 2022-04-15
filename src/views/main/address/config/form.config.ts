import { ISXFormConfig } from '@/base-ui/form/types'
import { GENDER_OPTIONS, LABEL_OPTIONS } from '@/constants/global-object'

export const formConfig: ISXFormConfig = {
  fieldConfig: [
    {
      field: 'name',
      label: '收货人',
      name: 'name',
      type: 'text',
      maxlength: 4,
      placeholder: '名字',
      clearable: true
    },
    {
      field: 'gender',
      label: '称呼',
      name: 'gender',
      type: 'radio',
      direction: 'horizontal',
      'checked-color': 'rgba(0,122,83)',
      'radio-select': GENDER_OPTIONS
    },
    {
      field: 'telePhone',
      label: '手机号',
      name: 'telePhone',
      type: 'text',
      maxlength: 11,
      clearable: true,
      placeholder: '手机号码',
      'field-button': {
        isShow: true,
        size: 'small',
        type: 'success',
        message: '自动填写'
      }
    },
    {
      field: 'address',
      label: '地址',
      name: 'address',
      type: 'text',
      maxlength: 17,
      clearable: true,
      placeholder: '请选择所在地址',
      'other-slot': 'address'
    },
    {
      field: 'details',
      label: '门牌号',
      name: 'details',
      type: 'text',
      maxlength: 17,
      clearable: true,
      placeholder: '例: 3A407号'
    },
    {
      field: 'label',
      label: '标签',
      name: 'label',
      type: 'auto',
      'other-slot': 'label',
      'other-value': LABEL_OPTIONS
    }
  ],
  buttonConfig: {
    isShow: true,
    message: '确定',
    color: 'rgba(0, 122, 83)',
    style: 'font-size:15px;letter-spacing: 2px;'
  }
}
