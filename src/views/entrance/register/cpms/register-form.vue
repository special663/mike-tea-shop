<template>
  <div class="register-form">
    <SXSteps :stepsConfig="stepsConfig" :activeIndex="activeIndex" />
    <SXForm
      ref="formRef"
      v-bind="config"
      v-model="registerInfo"
      @onSubmit="handleSubmit"
    >
      <template #header v-if="isShowheader">
        <div class="form-success">恭喜注册成功~</div>
      </template>
    </SXForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch } from 'vue'

import SXForm from '@/base-ui/form'
import SXSteps from '@/base-ui/steps'

import {
  registerFormConfig,
  infoFormConfig,
  successConfig
} from '../config/form.config'
import { stepsConfig } from '../config/steps.config'

import { useStore } from '@/store'
export default defineComponent({
  props: {
    isFormatRegster: {
      type: Boolean,
      default: false
    }
  },
  components: { SXForm, SXSteps },
  setup(props) {
    const Store = useStore()
    const formRef = ref<InstanceType<typeof SXForm>>()
    const sucessRegister: any = inject('sucessRegister')
    //初始化数据
    watch(
      () => props.isFormatRegster,
      (newValue) => {
        if (newValue) {
          for (const item in registerInfo.value) {
            registerInfo.value[item] = ''
          }
          isShowheader.value = false
          activeIndex.value = 0
          config.value = registerFormConfig
          formRef.value?.resetValidation()
        }
      }
    )
    const registerInfo: any = ref({
      name: '',
      password: '',
      verifyPassword: '',
      realName: '',
      telePhone: '',
      IDNumber: ''
    })
    const activeIndex = ref(0)
    const isShowheader = ref(false)
    let config = ref(registerFormConfig)
    const handleSubmit = async (value: boolean) => {
      if (value) {
        if (activeIndex.value === 0) {
          const result = await Store.dispatch('register/selectAction', {
            url: '/users/select',
            params: {
              name: registerInfo.value.name,
              password: registerInfo.value.password,
              verifyPassword: registerInfo.value.verifyPassword
            }
          })
          if (result) {
            activeIndex.value++
            config.value = infoFormConfig
            return
          }
          return
        }
        if (activeIndex.value === 1) {
          const result = await Store.dispatch('register/selectAction', {
            url: '/users/',
            params: registerInfo.value
          })
          if (result) {
            config.value = successConfig
            activeIndex.value++
            isShowheader.value = true
            sucessRegister()
            return
          }
          return
        }
      }
    }
    return {
      formRef,
      config,
      stepsConfig,
      registerInfo,
      activeIndex,
      isShowheader,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="less">
.register-form {
  width: 100%;
  height: 100%;
  .form-success {
    text-align: center;
    margin: 100px;
  }
  .success-btn {
    margin: 50px;
  }
}
</style>
