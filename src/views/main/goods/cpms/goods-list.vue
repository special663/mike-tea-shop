<template>
  <div class="goods-list">
    <SXSwipe :swipeConfig="swipeConfig" :swipeItemConfig="swipeItemConfig" />
    <template v-for="goods in goodsList" :key="goods.title">
      <van-sticky
        :offset-top="45"
        :class="`sticky${goods.id}`"
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
    <SXPopup
      v-model="isShowGoodsDetail"
      :popupConfig="popupConfig"
      @closePopup="closePopup"
    >
      <template #content>
        <SXEmpty v-if="!isNotShowErrorPage" :emptyConfig="emptyConfig" />
        <GoodsDetail
          v-else
          class="goods-detail"
          :goodsDetail="goodsDetail"
          :goodsSwipeConfig="goodsSwipeConfig"
        />
      </template>
    </SXPopup>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, readonly, ref, watch } from 'vue'
import Storage from '@/utils/cache'
import { useStore } from '@/store'

import { swipeConfig, swipeItemConfig } from '../config/swipe.config'
import { popupConfig } from '../config/popup.config'
import { emptyConfig } from '../config/empty.config'
import { goodsSwipeConfig } from '../config/detail.swipe.config'

import SXCard from '@/base-ui/card'
import SXSwipe from '@/base-ui/swipe'
import SXPopup from '@/base-ui/popup'
import SXEmpty from '@/base-ui/empty'
import GoodsDetail from '@/components/goods-detail'
export default defineComponent({
  components: { SXCard, SXSwipe, SXPopup, SXEmpty, GoodsDetail },
  emits: ['handleStickyChange', 'changeGoodsDetailInvoke'],
  setup(prop, { emit }) {
    const store = useStore()
    //是否关闭弹出层进行判断
    const isClosePopup = ref(true)
    provide('isClosePopup', readonly(isClosePopup))
    const closePopup = (value: boolean) => {
      isClosePopup.value = value
    }
    const goodsList = Storage.getStorage('goodsList')
    const goodsDetail = computed(() =>
      store.getters['goods/getGoodsInfo']('Detail')
    )
    const isNotShowErrorPage = ref(true) //默认不打开无效界面
    const isShowGoodsDetail = ref(false)
    provide('unMountedShowGoodsDetail', () => {
      isShowGoodsDetail.value = false
    })
    const handleCard = async (value: any) => {
      isShowGoodsDetail.value = true
      isNotShowErrorPage.value = await store.dispatch('goods/getGoodsList', {
        url: '/detail',
        goodsId: `/${value.id}`
      })
    }
    const handleStickyChange = ($event: any, goodsId: any) => {
      emit('handleStickyChange', $event ? goodsId : goodsId - 1)
    }
    watch(
      () => isShowGoodsDetail.value,
      (newValue) => {
        console.log(newValue)
        emit('changeGoodsDetailInvoke', newValue)
      }
    )
    return {
      swipeConfig,
      swipeItemConfig,
      goodsSwipeConfig,
      popupConfig,
      emptyConfig,
      isClosePopup,
      closePopup,
      goodsList,
      goodsDetail,
      isShowGoodsDetail,
      isNotShowErrorPage,
      handleCard,
      handleStickyChange
    }
  }
})
</script>

<style scoped lang="less">
.goods-list {
  width: 100%;
  // padding-bottom: 50px;
  .top-stciky {
    background-color: white;
    height: 35px;
    line-height: 35px;
  }
}
.goods-detail {
  border-radius: 20px 20px 0 0;
}
</style>
