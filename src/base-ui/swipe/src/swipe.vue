<template>
  <div class="swipe">
    <van-swipe class="my-swipe" v-bind="swipeConfig">
      <van-swipe-item
        v-for="item in swipeItemConfig"
        :style="swipeItemStyle"
        :key="item.swipeList.name"
      >
        <img class="swipe-img" :src="`${item.swipeList.image}?type=middle`" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ISwipeConfig, ISwipeItemStyleConfig } from '../types'

export default defineComponent({
  props: {
    swipeConfig: {
      type: Object as PropType<ISwipeConfig>,
      require: true
    },
    swipeItemConfig: {
      type: Array,
      default: () => []
    },
    swipeItemStyle: {
      type: Object as PropType<ISwipeItemStyleConfig>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  height: 100%;
  .swipe-img {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
  }
}
</style>
