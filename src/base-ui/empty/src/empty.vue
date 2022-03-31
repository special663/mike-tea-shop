<template>
  <div class="empty">
    <van-empty v-bind="emptyConfig" />
  </div>
</template>

<script lang="ts">
import { IEmptyConfig } from '../types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    emptyConfig: {
      type: Object as PropType<IEmptyConfig>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
