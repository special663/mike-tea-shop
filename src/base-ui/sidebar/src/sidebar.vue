<template>
  <div class="sidebar">
    <van-sidebar
      :model-value="modelValue"
      @update:modelValue="handleSidebarChange"
    >
      <van-sidebar-item
        class="sidebar-item"
        v-for="item in sidebarItemConfig"
        :key="item.id"
        @click="handleSidebarItemChange(item.id)"
      >
        <template #title>
          <div class="title">
            <img class="title-img" :src="$filter.filterPicture(item.title)" />
            <div class="title-message">{{ item.title }}</div>
          </div>
        </template>
      </van-sidebar-item>
      <!-- 这段代码可以优化 -->
      <van-sidebar-item />
      <van-sidebar-item />
      <van-sidebar-item />
    </van-sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ISidebarItemConfig } from '../types/index'

export default defineComponent({
  props: {
    sidebarItemConfig: {
      type: Array as PropType<ISidebarItemConfig[]>,
      require: true
    },
    modelValue: {
      type: Number,
      default: 0,
      require: true
    }
  },
  emits: ['update:modelValue', 'scrollIndex'],
  setup(prop, { emit }) {
    const handleSidebarItemChange = (value: any) => {
      handleSidebarChange(value)
    }
    //点击左侧，需要滑动位置
    const handleSidebarChange = (value: any) => {
      emit('update:modelValue', value)
      emit('scrollIndex', value)
    }
    return { handleSidebarItemChange, handleSidebarChange }
  }
})
</script>

<style scoped lang="less">
.sidebar {
  .van-sidebar-item--select::before {
    background-color: var(--van-white);
  }
  .van-sidebar-item {
    padding-bottom: var(--van-padding-sm);
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .title-img {
      transform: rotate(-45deg);
      align-self: center;
      width: 35%;
      height: 35%;
    }
    .title-message {
      margin-top: 5px;
      font-size: 14px;
    }
  }
}
</style>
