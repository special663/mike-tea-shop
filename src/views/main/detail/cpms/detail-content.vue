<template>
  <div class="detail-content">
    <img :src="goodsDetail.images[0]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const Store = useStore()
    const goodsDetail = Store.getters['goods/getGoodsInfo']('Detail')
    console.log(goodsDetail)
    return { goodsDetail }
  }
})
</script>

<style scoped lang="less">
.detail-content {
  img {
    width: 100%;
  }
}
</style>
