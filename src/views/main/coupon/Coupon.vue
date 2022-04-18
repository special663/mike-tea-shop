<template>
  <SXNavBar
    class="coupon-nav-bar"
    @handleClickLeft="this.$router.back()"
    :nav-bar-config="navBarConfig"
  />
  <Suspense class="coupon">
    <template #default>
      <AsyncCouponContent />
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
import { defineComponent, defineAsyncComponent, ref } from 'vue'
//components import
import SXOverlay from '@/base-ui/overlay'
import SXNavBar from '@/base-ui/nav-bar'
//config import
import { overlayConfig } from './config/overlay.config'
import { navBarConfig } from './config/nav-bar.config'
const AsyncCouponContent = defineAsyncComponent(
  () => import('./cpms/coupon-content.vue')
)

export default defineComponent({
  components: { SXOverlay, SXNavBar, AsyncCouponContent },
  setup() {
    const show = ref(true)
    return { overlayConfig, navBarConfig, show }
  }
})
</script>

<style lang="less" scoped>
.coupon-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
