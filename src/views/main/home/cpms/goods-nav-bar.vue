<template>
  <div class="goods-nav-bar">
    <SXNavBar :navBarConfig="navBarConfig">
      <template #leftSlot
        ><van-icon name="location" size="20" />天福花园<van-icon
          class="nav-bar-arrow"
          name="arrow"
      /></template>
      <template #rightSlot>
        <van-search
          class="nav-bar-search"
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </template>
    </SXNavBar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import SXNavBar from '@/base-ui/nav-bar'
import { navBarConfig } from '../../goods/config/nav-bar.config'

export default defineComponent({
  components: { SXNavBar },
  setup() {
    const value = ref()
    const onSearch = () => {
      console.log('搜索')
    }

    return { navBarConfig, value, onSearch }
  }
})
</script>

<style scoped lang="less">
.goods-nav-bar {
  .nav-bar-arrow {
    margin-left: 5px;
  }
  .nav-bar-search {
    height: 100%;
  }
}
</style>
