<template>
  <div class="goods-content">
    <GoodsNavBar />
    <div class="main">
      <img src="~@/assets/img/png/user_info_perfect.png" />
      <div class="main-content">
        <van-sticky offset-top="46" z-index="1">
          <GoodsSidebar
            class="goods-sidebar"
            @scrollIndex="scrollIndex"
            :activeNumber="activeNumber"
          />
        </van-sticky>
        <GoodsList
          ref="listRef"
          class="goods-list"
          @changeGoodsDetailInvoke="changeGoodsDetailInvoke"
          @handleStickyChange="handleStickyChange"
        />
      </div>
    </div>
  </div>
  <ShopBag v-if="goodsShopBag && !isShowGoodsDetail" />
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed } from 'vue'
import { useStore } from '@/store'
import Stroage from '@/utils/cache'
import ShopBag from '@/components/shop-bag'
import GoodsNavBar from './goods-nav-bar.vue'
import GoodsSidebar from './goods-sidebar.vue'
import GoodsList from './goods-list.vue'
import scrollY from '@/hooks/hooks-scrollY'
export default defineComponent({
  components: { GoodsNavBar, GoodsSidebar, GoodsList, ShopBag },
  setup() {
    const store = useStore()
    const listRef = ref<InstanceType<typeof GoodsList>>()
    const goodsShopBag = computed(
      () => store.getters['goods/getGoodsShopBagSize']
    )
    const isShowGoodsDetail = ref(false)
    const activeNumber = ref(0)
    const handleStickyChange = (value: any) => {
      if (value < 0) value = 0
      activeNumber.value = value
    }
    const changeGoodsDetailInvoke = (value: boolean) => {
      isShowGoodsDetail.value = value
    }
    scrollY('.goods-content', {
      gettersPath: 'goods/getGoodsInfo',
      commitPath: 'goods/changeGoodsY'
    })
    const scrollIndex = (value: any) => {
      const node: any = document.querySelector('.goods-content')
      nextTick(() => {
        const fatherNode = listRef.value?.$el
        const activeNode = fatherNode.querySelector(`.sticky${value}`)
        node.scrollTop = activeNode.offsetTop - 44
      })
    }
    //发送网络请求 请求小料参数
    store.dispatch('goods/getGoodsList', {
      url: '/material'
    })
    //发送网络请求 请求购物袋数据
    const uid = Stroage.getStorage('uid')
    const token = Stroage.getStorage('token')
    if (uid && token)
      store.dispatch('goods/getGoodsList', {
        url: '/shopBag',
        query: `/${uid}`
      })
    return {
      listRef,
      goodsShopBag,
      isShowGoodsDetail,
      activeNumber,
      handleStickyChange,
      changeGoodsDetailInvoke,
      scrollIndex
    }
  }
})
</script>

<style scoped lang="less">
.goods-content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .main {
    margin-top: 46px;
    display: flex;
    flex-direction: column;
    img {
      height: 100%;
      width: 100%;
    }
    .main-content {
      display: flex;
      justify-content: space-between;
      .goods-list {
        width: calc(100% - 84.6px);
        // 撑开一个盒子的高度
        margin-bottom: 118px !important;
      }
    }
  }
}
</style>
