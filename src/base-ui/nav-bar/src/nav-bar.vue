<template>
  <div class="nav-bar">
    <van-nav-bar
      v-bind="navBarConfig"
      @click-right="handleClickRight"
      @click-left="handleClickLeft"
    >
      <template
        v-for="item in navBarConfig.otherProp"
        :key="item.name"
        #[item.slotName]
      >
        <slot :name="`${item.slotName}Slot`"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { INavBarConfig } from '../types'

export default defineComponent({
  props: {
    navBarConfig: {
      type: Object as PropType<INavBarConfig>,
      default: () => ({})
    }
  },
  emit: ['handleClickRight', 'handleClickLeft'],
  setup(props, { emit }) {
    const handleClickRight = () => {
      emit('handleClickRight')
    }
    const handleClickLeft = () => {
      emit('handleClickLeft')
    }
    return {
      handleClickRight,
      handleClickLeft
    }
  }
})
</script>

<style scoped></style>
