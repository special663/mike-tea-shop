<template>
  <div class="address-content">
    <!-- 无内容展示界面 -->
    <template v-if="!isHadList">
      <SXEmpty class="address-empty" :empty-config="emptyConfig" />
    </template>
    <template v-else>
      <AddressList />
    </template>
  </div>
</template>

<script lang="ts">
//vue import
import { defineComponent, computed } from 'vue'
//componets import
import SXEmpty from '@/base-ui/empty'
import AddressList from './address-list.vue'
//config import
import { emptyConfig } from '../config/empty.config'
import { useStore } from '@/store'

export default defineComponent({
  components: { SXEmpty, AddressList },
  setup() {
    const Store = useStore()
    const isHadList = computed(
      () => Store.getters['mine/getAddressInfo']('List').length
    )
    return { emptyConfig, isHadList }
  }
})
</script>

<style lang="less" scoped>
.address-content {
  position: relative;
  display: flex;
  font-size: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(247, 247, 247);
  width: 100%;
  height: calc(100vh - 96px);
  .address-empty {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
