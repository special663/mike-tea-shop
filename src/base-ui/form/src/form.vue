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
          <template v-if="file['other-slot']">
            <slot :name="file['other-slot']" :scope="file"></slot>
          </template>
          <van-field v-else-if="file.type === 'radio'" :label="file.label">
            <template #input>
              <van-radio-group
                :model-value="modelValue[`${file.field}`]"
                @update:modelValue="handleValueChange($event, file.field)"
                :direction="file.direction"
                :checked-color="file['checked-color']"
              >
                <van-radio
                  :name="select.name"
                  v-for="select in file['radio-select']"
                  :key="select.tip"
                  >{{ select.tip }}</van-radio
                >
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-else
            :model-value="modelValue[`${file.field}`]"
            @update:modelValue="handleValueChange($event, file.field)"
            @focus="handlefieldFocus"
            v-bind="file"
          >
            <template v-if="file['field-button']?.isShow" #button>
              <van-button
                @click="handleFieldButton(file)"
                v-bind="file['field-button']"
                >{{ file['field-button']?.message }}</van-button
              >
            </template>
          </van-field>
        </template>
      </van-cell-group>
      <div style="margin: 16px" v-if="buttonConfig.isShow">
        <van-button
          v-bind="buttonConfig"
          round
          block
          type="primary"
          native-type="submit"
        >
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
    const handleFieldButton = (payload: any) => {
      emit(`${payload.field}Button`)
    }
    return {
      formRef,
      onSubmit,
      handleFailed,
      handleValueChange,
      handlefieldFocus,
      resetValidation,
      handleFieldButton
    }
  }
})
</script>

<style lang="less" scoped></style>
