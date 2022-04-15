<template>
  <div class="progress">
    <slot class="header" name="header"></slot>
    <slot class="content" name="content"
      ><van-progress v-bind="progressConfig"
    /></slot>
    <slot class="footer" name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IProgressConfig from '../types'

export default defineComponent({
  props: {
    progressConfig: {
      type: Object as PropType<IProgressConfig>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
