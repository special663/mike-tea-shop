<template>
  <div class="shop-bag-content">
    <div class="content-left" @click="showGoodsInfo">
      <van-icon
        name="bag-o"
        size="2em"
        class="content-bag"
        :badge="goodsCount"
      />
      <div class="content-price">{{ $filter.formartPrice(goodsPrice) }}</div>
    </div>
    <div class="content-right" @click="toSettleAccounts">去结算</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup(prop, { emit }) {
    const Store = useStore()
    const goodsInfo = computed(() =>
      Store.getters['goods/getGoodsInfo']('ShopBag')
    )
    //获取购物袋参数
    const goodsCount = computed(() => {
      let count = 0
      goodsInfo.value.result.forEach((item: any) => {
        count += item.count
      })
      return count
    })
    const goodsPrice = computed(() => {
      let price = 0
      goodsInfo.value.result.forEach((item: any) => {
        price += item.price * item.count
      })
      return price
    })
    const isShowGoodsList: any = inject('isShowGoodsList')
    const showGoodsInfo = () => {
      emit('isShowGoodsInfo', !isShowGoodsList.value)
    }
    const toSettleAccounts = () => {
      console.log('去结算，但是没完成')
    }
    return { goodsCount, goodsPrice, showGoodsInfo, toSettleAccounts }
  }
})
</script>

<style lang="less" scoped>
.shop-bag-content {
  margin: 0 1em;
  font-size: 15px;
  display: flex;
  justify-content: center;
  height: 3.5em;
  color: #fff;
  .content-left {
    border-radius: 2em 0 0 2em;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(50, 50, 50);
    .content-bag {
      margin: 0 0.5em 0 0.8em;
    }
    .content-price {
      font-size: 1.3em;
    }
  }
  .content-right {
    border-radius: 0 2em 2em 0;
    background-color: rgba(29, 136, 92);
    width: 23%;
    text-align: center;
    letter-spacing: 1px;
    line-height: 3.5em;
  }
}
</style>
