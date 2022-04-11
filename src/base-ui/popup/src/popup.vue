<template>
  <div class="popup">
    <van-popup
      @open="closePopup(false)"
      @close="closePopup(true)"
      v-model:show="isShow"
      v-bind="popupConfig"
      class="popup"
    >
      <!-- :position="popupConfig.position"
      :round="popupConfig.round"
      :style="popupConfig.style" -->
      <slot name="header"></slot>
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
  emits: ['update:modelValue', 'closePopup'],
  setup(props, { emit }) {
    const isShow = ref(props.modelValue)
    const closePopup = (value: boolean) => {
      //为true时，就说明关闭弹出层
      emit('closePopup', value)
    }
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
    return { isShow, closePopup }
  }
})
</script>

<style scoped></style>
