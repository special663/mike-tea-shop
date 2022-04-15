<template>
  <Suspense class="mine">
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
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import SXOverlay from '@/base-ui/overlay'
import { overlayConfig } from './config/overlay.config'
const AsyncMineContent = defineAsyncComponent(
  () => import('./cpms/mine-content.vue')
)

export default defineComponent({
  components: { AsyncMineContent, SXOverlay },
  setup() {
    const show = ref(true)
    const AsyncName = ref('AsyncMineContent')
    return { overlayConfig, show, AsyncName }
  }
})
</script>

<style lang="less" scoped>
.mine {
  width: 100%;
  height: 100%;
}
</style>
