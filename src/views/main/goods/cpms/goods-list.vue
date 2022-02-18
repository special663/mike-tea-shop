<template>
  <div class="goods-list">
    <SXSwipe :swipeConfig="swipeConfig" :swipeItemConfig="swipeItemConfig" />
    <template v-for="goods in goodsList" :key="goods.title">
      <van-sticky
        :offset-top="45"
        @change="handleStickyChange($event, goods.id)"
      >
        <div class="top-stciky">{{ goods.title }}</div>
      </van-sticky>
      <template v-for="item in goods.goodsList" :key="item.id">
        <SXCard
          :cardConfig="$filter.formatCard(item)"
          @handleCard="handleCard"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Storage from '@/utils/cache'

import SXCard from '@/base-ui/card'
import SXSwipe from '@/base-ui/swipe'
import { swipeConfig, swipeItemConfig } from '../config/swipe.config'
export default defineComponent({
  components: { SXCard, SXSwipe },
  emits: ['handleStickyChange'],
  setup(prop, { emit }) {
    const goodsList = Storage.getStorage('goodsList')
    const handleCard = (value: any) => {
      console.log(value)
    }
    const handleStickyChange = ($event: any, goodsId: any) => {
      emit('handleStickyChange', $event ? goodsId : goodsId - 1)
    }
    return {
      swipeConfig,
      swipeItemConfig,
      goodsList,
      handleCard,
      handleStickyChange
    }
  }
})
</script>

<style scoped lang="less">
.goods-list {
  width: 100%;
  .top-stciky {
    background-color: white;
    height: 35px;
    line-height: 35px;
  }
}
</style>
