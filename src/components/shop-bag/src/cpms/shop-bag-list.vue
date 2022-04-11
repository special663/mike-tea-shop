<template>
  <div class="shop-bag-list">
    <!-- 这是头部 -->
    <div class="list-header">
      <!-- 全选 -->
      <div class="check-all" @click="checkAll">
        <div
          ref="selectAllRef"
          :class="['select-all', isCheckAll ? 'select-all-active' : 0]"
        >
          <van-icon v-if="isCheckAll" color="#fff" name="success" />
        </div>
        全选
      </div>
      <!-- 清空 -->
      <div class="clear-all" @click="clearAll(this.$store)">
        <van-icon size="1.2em" name="delete-o" /> 清空
      </div>
    </div>
    <!-- 这是实体 -->
    <div class="list-content">
      <ShopBagItem
        v-for="item in goodsShopBag"
        :key="item.goods_id"
        :goodsConfig="item"
        class="list-item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import clearAll from '../../hooks/clear-all-dialog'
import ShopBagItem from '@/components/shop-bag-item'
import { useStore } from '@/store'

export default defineComponent({
  components: { ShopBagItem },
  setup() {
    const Store = useStore()
    const goodsShopBag = computed(
      () => Store.getters['goods/getGoodsInfo']('ShopBag').result
    )
    const isCheckAll = computed(() => {
      return goodsShopBag.value.every((item: any) => item.affirm === 1)
    })
    //全选的DOM-REF
    const selectAllRef: any = ref(null)
    const checkAll = () => {
      console.log('aaa')
    }
    return { clearAll, goodsShopBag, isCheckAll, selectAllRef, checkAll }
  }
})
</script>

<style lang="less" scoped>
.shop-bag-list {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .list-header {
    position: sticky;
    top: 0;
    bottom: 0;
    z-index: 999;
    height: 3em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(242, 242, 242);
    .check-all {
      margin: 0 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      .select-all {
        margin: 0 0.5em;
        width: 1em;
        height: 1em;
        border: 1px solid rgba(188, 188, 188);
        border-radius: 1em;
      }
      .select-all-active {
        border: 1px solid rgba(29, 136, 92);
        background-color: rgba(29, 136, 92);
      }
    }
    .clear-all {
      margin: 0 1.5em;
      color: rgb(163, 163, 163);
    }
  }
  .list-content {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4em;
    width: 100%;
    .list-item {
      width: 100%;
    }
  }
}
.showDialg {
  color: red;
}
</style>
