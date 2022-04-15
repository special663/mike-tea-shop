<template>
  <van-cell v-bind="cellConfig">
    <template #label><slot name="label"></slot></template>
    <template #title><slot name="title"></slot></template>
    <template #right-icon>
      <slot name="right-icon"></slot>
    </template>
  </van-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ICellConfig from '../types'

export default defineComponent({
  props: {
    cellConfig: {
      type: Object as PropType<ICellConfig>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
