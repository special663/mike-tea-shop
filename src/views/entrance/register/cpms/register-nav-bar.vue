<template>
  <div class="register-nav-bar">
    <SXNavBar :navBarConfig="navBarConfig" @handleClickLeft="goBack" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import SXNavBar from '@/base-ui/nav-bar'
import { navBarConfig } from '../config/nav-bar.config'
import { Dialog } from 'vant'

export default defineComponent({
  components: { SXNavBar },
  props: {
    isSuccessRegister: {
      type: Boolean,
      default: false
    }
  },
  emits: ['formatRegster'],
  setup(props, { emit }) {
    const changeShowRegister: any = inject('changeShowRegister')
    const goBack = () => {
      if (!props.isSuccessRegister) {
        Dialog.confirm({
          title: '注意',
          message: '如果现在退出就话，不能算注册成功哦!!!'
        }).then(() => {
          changeShowRegister()
          emit('formatRegster', true)
        })
      } else {
        changeShowRegister()
        emit('formatRegster', true)
      }
    }
    return { navBarConfig, goBack }
  }
})
</script>

<style scoped></style>
