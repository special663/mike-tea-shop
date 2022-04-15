<template>
  <div class="shop-bag">
    <ShopBagContent
      class="shop-bag-content"
      @isShowGoodsInfo="isShowGoodsInfo"
    />
    <SXPopup v-model="isShowGoodsList" :popupConfig="popupConfig">
      <template #content> <ShopBagList /> </template>
    </SXPopup>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, provide } from 'vue'
import { popupConfig } from '../config/popup.config'
import ShopBagContent from './cpms/shop-bag-content.vue'
import ShopBagList from './cpms/shop-bag-list.vue'
import SXPopup from '@/base-ui/popup'
export default defineComponent({
  components: { ShopBagContent, SXPopup, ShopBagList },
  setup() {
    const isShowGoodsList = ref(false)
    provide('isShowGoodsList', isShowGoodsList)
    const isShowGoodsInfo = (value: boolean) => {
      isShowGoodsList.value = value
    }
    return { popupConfig, isShowGoodsList, isShowGoodsInfo }
  }
})
</script>

<style lang="less" scoped>
.shop-bag {
  font-size: 15px;
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  z-index: 99999 !important;
  bottom: 46px;
  height: 2.5em;
  width: 100%;
  background: #fff;
  .shop-bag-content {
    position: absolute;
    left: 0;
    right: 0;
    top: -1.6em;
    z-index: 99999;
  }
}
</style>
