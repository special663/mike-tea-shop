<template>
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
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import SXOverlay from '@/base-ui/overlay'
import { overlayConfig } from './config/overlay.config'
const AsyncOrderContent = defineAsyncComponent(
  () => import('./cpms/order-content.vue')
)

export default defineComponent({
  components: { SXOverlay, AsyncOrderContent },
  setup() {
    const show = ref(true)
    return { overlayConfig, show }
  }
})
</script>

<style scoped></style>
