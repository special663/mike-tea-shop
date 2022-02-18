<template>
  <div class="overlay">
    <van-overlay v-bind="overlayConfig" :show="show" @click="handleShow">
      <div class="overlay-content"><slot name="content"> </slot></div>
    </van-overlay>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IOverlayConfig } from '../types'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlayConfig: {
      type: Object as PropType<IOverlayConfig>,
      default: () => ({})
    }
  },
  emits: ['update:show'],
  setup(props, { emit }) {
    const handleShow = () => {
      if (props.show) emit('update:show', false)
    }
    return { handleShow }
  }
})
</script>

<style scoped lang="less">
.overlay-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.van-overlay {
  background: rgba(0, 0, 0, 0.5);
}
</style>
