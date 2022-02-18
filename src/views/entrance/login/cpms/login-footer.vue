<template>
  <div class="login-footer">
    <van-row class="footer-content" justify="center">
      <van-col span="12" class="content-find-password" @click="findPassword"
        >找回密码</van-col
      >
      <van-col span="12" class="content-register" @click="register"
        >新用户注册</van-col
      >
    </van-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['handleShowPopup', 'handleShowRegister'],
  setup(props, { emit }) {
    const findPassword = () => {
      emit('handleShowPopup', true)
    }
    const register = () => {
      emit('handleShowRegister', true)
    }
    return { findPassword, register }
  }
})
</script>

<style scoped lang="less">
.login-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  .footer-content {
    text-align: center;
    .content-find-password {
      border-right: 1px solid #000;
    }
  }
}
</style>
