<template>
  <div class="login-content">
    <LoginNavBar />
    <LoginForm />
    <LoginFooter
      @handleShowPopup="handleShowPopup"
      @handleShowRegister="handleShowRegister"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginNavBar from './login-nav-bar.vue'
import LoginForm from './login-form.vue'
import LoginFooter from './login-footer.vue'

export default defineComponent({
  components: {
    LoginNavBar,
    LoginForm,
    LoginFooter
  },
  emits: ['handleShowPopup', 'handleShowRegister'],
  setup(props, { emit }) {
    const handleShowPopup = (value: boolean) => {
      emit('handleShowPopup', value)
    }
    const handleShowRegister = (value: boolean) => {
      emit('handleShowRegister', value)
    }
    return { handleShowPopup, handleShowRegister }
  }
})
</script>

<style scoped lang="less">
.login-content {
  width: 100%;
  height: 100%;
}
</style>
