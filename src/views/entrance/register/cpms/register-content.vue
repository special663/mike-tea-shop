<template>
  <div class="register-content">
    <RegisterNavBar
      :isSuccessRegister="isSuccessRegister"
      @formatRegster="FormatRegster"
    />
    <RegisterForm class="content-form" :isFormatRegster="isFormatRegster" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, watch } from 'vue'
import RegisterForm from './register-form.vue'
import RegisterNavBar from './register-nav-bar.vue'

export default defineComponent({
  components: { RegisterNavBar, RegisterForm },
  props: {
    isShowRegister: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    //是否成功注册
    const isSuccessRegister = ref(false)
    //是否需要重置表单
    const isFormatRegster = ref(false)
    const sucessRegister = () => {
      isSuccessRegister.value = true
    }
    provide('sucessRegister', sucessRegister)

    const FormatRegster = (value: boolean) => {
      isFormatRegster.value = value
    }
    watch(
      () => props.isShowRegister,
      (newValue) => {
        if (newValue) {
          isSuccessRegister.value = false
          isFormatRegster.value = false
        }
      }
    )
    return { isSuccessRegister, isFormatRegster, FormatRegster }
  }
})
</script>

<style scoped lang="less">
.register-content {
  width: 100%;
  height: 100%;
  .content-form {
    width: 100%;
    height: 100%;
  }
}
</style>
