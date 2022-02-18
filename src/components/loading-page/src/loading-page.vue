<template>
  <div class="loading-page">
    <SXOverlay :show="isShowOverlay" @update:show="handleShow">
      <template #content class="content"
        ><van-loading v-bind="loadingConfig">{{
          loadingConfig.message
        }}</van-loading></template
      >
    </SXOverlay>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SXOverlay from '@/base-ui/overlay'

import { ILoadingConfig } from '../types'

export default defineComponent({
  components: { SXOverlay },
  emits: ['handleShow'],
  props: {
    isShowOverlay: {
      type: Boolean,
      default: false
    },
    loadingConfig: {
      type: Object as PropType<ILoadingConfig>,
      require: true
    }
  },
  setup(props, { emit }) {
    const handleShow = (value: boolean) => {
      emit('handleShow', value)
    }
    return { handleShow }
  }
})
</script>

<style scoped lang="less"></style>
