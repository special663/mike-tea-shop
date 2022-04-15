<template>
  <Suspense class="goods">
    <template #default>
      <keep-alive>
        <component :is="AsyncName"></component>
      </keep-alive>
    </template>
    <template #fallback>
      <SXOverlay :overlay-config="overlayConfig" :show="show">
        <template #content><van-loading /></template>
      </SXOverlay>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue'
import SXOverlay from '@/base-ui/overlay'
import { overlayConfig } from './config/overlay.config'
const AsyncGoodsContent = defineAsyncComponent(
  () => import('./cpms/goods-content.vue')
)

export default defineComponent({
  components: {
    AsyncGoodsContent,
    SXOverlay
  },
  setup() {
    const show = ref(true)
    const AsyncName = ref('AsyncGoodsContent')
    return { overlayConfig, show, AsyncName }
  }
})
</script>

<style scoped lang="less">
.goods {
  width: 100%;
  height: 100%;
}
</style>
