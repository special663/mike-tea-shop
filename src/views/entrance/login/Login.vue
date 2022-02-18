<template>
  <div class="login">
    <LoginContent
      @handleShowPopup="isShowPopup"
      @handleShowRegister="isShowRegisterPopup"
    />
    <!-- 找回密码 -->
    <SXPopup :popupConfig="popupConfig" v-model="isShow">
      <template #content><RetrievePassword /></template>
    </SXPopup>
    <!-- 注册用户 -->
    <SXPopup :popupConfig="popupConfig" v-model="isShowRegister">
      <template #content
        ><Register :isShowRegister="isShowRegister"
      /></template>
    </SXPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import RetrievePassword from '../retrieve-password/RetrievePassword.vue'
import Register from '@/views/entrance/register/Register.vue'

import LoginContent from './cpms/login-content.vue'
import SXPopup from '@/base-ui/popup'

import { popupConfig } from './config/popup.config'

export default defineComponent({
  components: { LoginContent, RetrievePassword, SXPopup, Register },
  setup() {
    const isShow = ref(false)
    const isShowRegister = ref(false)

    const changeShowRegister = () => {
      isShowRegister.value = false
    }
    provide('changeShowRegister', changeShowRegister)

    const isShowPopup = () => {
      isShow.value = true
    }
    const isShowRegisterPopup = (value: boolean) => {
      isShowRegister.value = value
    }
    return {
      popupConfig,
      isShow,
      isShowRegister,
      isShowPopup,
      isShowRegisterPopup
    }
  }
})
</script>

<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  .popup {
    width: 100%;
    height: 100%;
    .content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
