<template>
  <div class="register">
    <RegisterContent :isShowRegister="isShowRegister" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegisterContent from './cpms/register-content.vue'

export default defineComponent({
  components: { RegisterContent },
  props: {
    isShowRegister: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.register {
  width: 100%;
  height: calc(100vh - 46px);
}
</style>
