<template>
  <div class="form">
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <van-form
      ref="formRef"
      @submit="onSubmit"
      @failed="handleFailed"
      v-bind="formConfig"
    >
      <van-cell-group inset>
        <template v-for="file in fieldConfig" :key="file.field">
          <van-field
            :model-value="modelValue[`${file.field}`]"
            @update:modelValue="handleValueChange($event, file.field)"
            @focus="handlefieldFocus"
            :name="file.name"
            :label="file.label"
            :type="file.type"
            :maxlength="file.maxlength"
            :clearable="file.clearable"
            :placeholder="file.placeholder"
            :rules="file.rules"
          />
        </template>
      </van-cell-group>
      <div style="margin: 16px" v-if="buttonConfig.isShow">
        <van-button round block type="primary" native-type="submit">
          {{ buttonConfig.message }}
        </van-button>
      </div>
    </van-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { IFormConfig, IFieldConfig, IButtonConfig } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true
    },
    formConfig: {
      type: Object as PropType<IFormConfig>,
      default: () => ({})
    },
    fieldConfig: {
      type: Array as PropType<IFieldConfig[]>,
      default: () => []
    },
    buttonConfig: {
      type: Object as PropType<IButtonConfig>,
      default: () => ({})
    }
  },
  emits: [
    'update:modelValue',
    'onSubmit',
    'handleValidate',
    'handleFailed',
    'handlefieldFocus',
    'resetValidation'
  ],
  setup(props, { emit }) {
    const formRef = ref()
    const raw = { ...props.modelValue }
    const keys = Object.keys(raw)
    if (keys.includes('verifyPassword') && keys.includes('password')) {
      for (const item of props.fieldConfig) {
        if (item.field === 'verifyPassword') {
          item.rules?.push({
            validator: (value: any) => {
              return value === props.modelValue?.password
            },
            message: '两次密码输入不一致'
          })
        }
      }
    }
    const onSubmit = () => {
      emit('onSubmit', true)
    }
    const handleFailed = () => {
      emit('onSubmit', false)
    }
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    const handlefieldFocus = () => {
      emit('handlefieldFocus')
    }
    const resetValidation = () => {
      formRef.value.resetValidation(keys)
    }
    return {
      formRef,
      onSubmit,
      handleFailed,
      handleValueChange,
      handlefieldFocus,
      resetValidation
    }
  }
})
</script>

<style scoped></style>
