<template>
  <div class="goods-content">
    <GoodsPane
      class="content"
      :goodsPaneConfig="goodsPaneConfig"
      :popupConfig="popupConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { filterAttribute } from '@/utils/filter'

import GoodsPane from '@/components/goods-pane'

import { popupConfig } from '../config/popup.config'

export default defineComponent({
  components: { GoodsPane },
  setup() {
    const Store = useStore()
    const goodsList = Store.getters['goods/getGoodsInfo']('List')
    let goodsPaneConfig = ref([])
    filterAttribute(goodsList, ['人气推荐', '新品尝鲜'], goodsPaneConfig.value)
    return { goodsPaneConfig, popupConfig }
  }
})
</script>

<style scoped lang="less">
.goods-content {
  .content {
    padding-top: 5px;
  }
}
</style>
