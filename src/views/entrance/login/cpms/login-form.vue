<template>
  <div class="login-form">
    <SXFrom v-bind="formConfig" v-model="loginInfo" @onSubmit="clickSubmit">
      <template #header>
        <img src="~@/assets/img/jpeg/login-logo.jpeg" class="login-logo" />
      </template>
    </SXFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SXFrom from '@/base-ui/form'
import { formConfig } from '../config/form.config'

import { useStore } from '@/store'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
import { TIME_OUT } from '@/constants/global-types'

export default defineComponent({
  components: { SXFrom },
  emits: ['handlefieldFocus'],
  setup() {
    const Store = useStore()
    const Router = useRouter()
    const loginInfo = ref({
      username: 'Special663',
      password: 'hsx2020711'
    })
    const clickSubmit = async (flag: boolean) => {
      if (!flag) {
        Toast.fail('账号密码格式有问题')
      } else {
        const result = await Store.dispatch(
          'login/loginAction',
          loginInfo.value
        )
        if (!result) {
          loginInfo.value.password = ''
          Toast.fail({ message: '账号或者密码错误', forbidClick: true })
        } else {
          Toast.success({ message: '欢迎回来', forbidClick: true })
          setTimeout(() => Router.replace('/home'), TIME_OUT)
        }
      }
    }
    return { formConfig, loginInfo, clickSubmit }
  }
})
</script>

<style scoped lang="less">
.login-form {
  .login-logo {
    width: 100%;
  }
}
</style>
