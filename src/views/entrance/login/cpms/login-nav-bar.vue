<template>
  <div class="login-nav-bar">
    <SXNavBar
      :navBarConfig="navBarConfig"
      @handleClickRight="handleClickRight"
    />
    <SXPopup :popupConfig="popupConfig" v-model="isShowSystem">
      <template #content>
        <LoadingPage
          :loadingConfig="loadingConfig"
          :isShowOverlay="isShowOverlay"
          @handleShow="handleShow"
        />
      </template>
    </SXPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { navBarConfig } from '../config/nav-bar.config'
import { popupConfig } from '../config/popup.config'
import { loadingConfig } from '../config/loading.config'

import SXNavBar from '@/base-ui/nav-bar'
import SXPopup from '@/base-ui/popup'
import LoadingPage from '@/components/loading-page/src/loading-page.vue'
import { TIME_OUT } from '@/constants/global-types'

export default defineComponent({
  components: { SXNavBar, SXPopup, LoadingPage },
  setup() {
    const Store = useStore()
    const Router = useRouter()
    const isShowOverlay = ref(false)
    const isShowSystem = ref(false)
    const handleClickRight = async () => {
      isShowSystem.value = true
      isShowOverlay.value = true
      const listResult = await Store.dispatch('goods/getGoodsList', {
        url: '/list'
      })
      const swipeResult = await Store.dispatch('goods/getGoodsList', {
        url: '/swipe'
      })
      if (listResult && swipeResult) {
        setTimeout(() => {
          isShowOverlay.value = false
          Router.replace('/system')
        }, TIME_OUT)
      }
    }
    const handleShow = (value: boolean) => {
      isShowSystem.value = value
    }
    return {
      navBarConfig,
      popupConfig,
      loadingConfig,
      isShowSystem,
      isShowOverlay,
      handleClickRight,
      handleShow
    }
  }
})
</script>

<style scoped></style>
