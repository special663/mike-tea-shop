<template>
  <div class="popup">
    <van-popup
      v-model:show="isShow"
      :position="popupConfig.position"
      :style="popupConfig.style"
      class="popup"
    >
      <slot name="content"></slot>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IPopupConfig } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      require: true
    },
    popupConfig: {
      type: Object as PropType<IPopupConfig>,
      require: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isShow = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (newValue) => {
        isShow.value = newValue
        emit('update:modelValue', newValue)
      }
    )
    watch(isShow, (newValue) => {
      emit('update:modelValue', newValue)
    })
    return { isShow }
  }
})
</script>

<style scoped></style>
