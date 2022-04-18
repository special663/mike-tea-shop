<template>
  <div class="tab">
    <van-tabs
      v-bind="tabsConfig"
      :active="modelValue"
      @update:active="emitActive"
    >
      <van-tab v-for="tab in tabConfig" :key="tab.name" v-bind="tab">
        <slot :name="tab.name"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ITabsConfig, ITabConfig } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    tabsConfig: {
      type: Object as PropType<ITabsConfig>
    },
    tabConfig: {
      type: Array as PropType<ITabConfig[]>,
      default: () => []
    }
  },
  setup(prop, { emit }) {
    const emitActive = (value: any) => {
      emit('update:modelValue', value)
    }
    return { emitActive }
  }
})
</script>

<style scoped></style>
