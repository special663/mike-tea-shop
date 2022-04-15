<template>
  <SXNavBar class="address-nav-bar" :nav-bar-config="navBarConfig" />
  <Suspense class="order">
    <template #default>
      <AsyncOrderContent />
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
const AsyncOrderContent = defineAsyncComponent(
  () => import('./cpms/order-content.vue')
)

export default defineComponent({
  components: { SXOverlay, SXNavBar, AsyncOrderContent },
  setup() {
    const show = ref(true)
    return { overlayConfig, navBarConfig, show }
  }
})
</script>

<style scoped></style>
