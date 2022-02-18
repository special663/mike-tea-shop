<template>
  <div class="goods-content">
    <GoodsNavBar />

    <div class="main">
      <img src="~@/assets/img/png/user_info_perfect.png" />
      <div class="main-content">
        <van-sticky offset-top="46" z-index="1">
          <GoodsSidebar class="goods-sidebar" :activeNumber="activeNumber" />
        </van-sticky>
        <GoodsList
          class="goods-list"
          @handleStickyChange="handleStickyChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GoodsNavBar from './goods-nav-bar.vue'
import GoodsSidebar from './goods-sidebar.vue'
import GoodsList from './goods-list.vue'

export default defineComponent({
  components: { GoodsNavBar, GoodsSidebar, GoodsList },
  setup() {
    const activeNumber = ref(0)
    const handleStickyChange = (value: any) => {
      if (value < 0) value = 0
      activeNumber.value = value
    }
    return { activeNumber, handleStickyChange }
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
        margin-bottom: 14px;
      }
    }
  }
}
</style>
