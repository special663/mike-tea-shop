<template>
  <div class="steps">
    <van-steps :active="activeIndex">
      <van-step v-for="item in stepsConfig.stepList" :key="item.name">{{
        item.info
      }}</van-step>
    </van-steps>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IStepsConfig } from '../types'

export default defineComponent({
  props: {
    stepsConfig: {
      type: Object as PropType<IStepsConfig>,
      default: () => ({})
    },
    activeIndex: {
      type: Number,
      default: () => 0
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
