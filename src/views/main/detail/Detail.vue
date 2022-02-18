<template>
  <div class="detail">
    <SXNavBar :navBarConfig="navBarConfig" @handleClickLeft="handleClickLeft" />
    <DetailContent />
    <DetailActionBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SXNavBar from '@/base-ui/nav-bar'
import DetailActionBar from './cpms/detail-action-bar.vue'
import { navBarConfig } from './config/nav-bar.config'
import DetailContent from './cpms/detail-content.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: { SXNavBar, DetailActionBar, DetailContent },
  setup() {
    const Router = useRouter()

    const handleClickLeft = () => {
      Router.back()
    }
    return { navBarConfig, handleClickLeft }
  }
})
</script>

<style scoped></style>
