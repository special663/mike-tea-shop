<template>
  <NavBar
    class="address-nav-bar"
    :nav-bar-config="navBarConfig"
    @handleClickLeft="handleClickLeft"
  />
  <Suspense>
    <template #default>
      <router-view> </router-view>
    </template>
    <template #fallback>
      <SXOverlay v-model:show="show" :overlay-config="overlayConfig">
        <template #content>
          <van-loading />
        </template>
      </SXOverlay>
    </template>
  </Suspense>
</template>

<script lang="ts">
//vue import
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
//config import
import { navBarConfig } from './config/nav-bar.config'
import { overlayConfig } from './config/overlay.config'
//compoments import
import NavBar from '@/base-ui/nav-bar/src/nav-bar.vue'
import SXOverlay from '@/base-ui/overlay'

export default defineComponent({
  components: { NavBar, SXOverlay },
  setup() {
    const Router = useRouter()
    const handleClickLeft = () => {
      Router.back()
    }
    const show = ref(true)
    return { navBarConfig, overlayConfig, handleClickLeft, show }
  }
})
</script>

<style lang="less" scoped>
.address-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
