<template>
  <SXNavBar :nav-bar-config="navBarConfig"></SXNavBar>
  <Suspense class="settle">
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
//vue import
import { defineComponent, ref, defineAsyncComponent } from 'vue'
//components import
import SXOverlay from '@/base-ui/overlay'
import SXNavBar from '@/base-ui/nav-bar'
//config import
import { overlayConfig, navBarConfig } from './config'

const AsyncSettleContent = defineAsyncComponent(
  () => import('./cpms/settle-content.vue')
)

export default defineComponent({
  components: {
    AsyncSettleContent,
    SXOverlay,
    SXNavBar
  },
  setup() {
    const show = ref(true)
    const AsyncName = ref('AsyncSettleContent')
    return { overlayConfig, navBarConfig, show, AsyncName }
  }
})
</script>

<style scoped lang="less">
.goods {
  width: 100%;
  height: 100%;
}
</style>
