<template>
  <div class="order-content">
    <SXTab v-model="active" :tabs-config="tabsConfig" :tab-config="tabConfig">
      <template #cur class="current-order"
        >我是当前订单
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>我是尾部</li>
        </ul>
      </template>
      <template #pre class="previous-order">我是里是订单</template>
    </SXTab>
  </div>
</template>

<script lang="ts">
//vue import
import { defineComponent, ref } from 'vue'
//components import
import SXTab from '@/base-ui/tab'
//config import
import { tabsConfig, tabConfig } from '../config/tab.config'

export default defineComponent({
  components: { SXTab },
  setup() {
    const active = ref('cur')
    return { tabsConfig, tabConfig, active }
  }
})
</script>

<style lang="less" scoped>
.order-content {
  width: 100%;
  height: calc(100% - 94px);
  // background-color: red;
  overflow-y: scroll;
}
</style>
