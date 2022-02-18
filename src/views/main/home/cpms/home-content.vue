<template>
  <div class="home-content">
    <SXSwipe :swipeConfig="swipeConfig" :swipeItemConfig="swipeItemConfig" />
    <div class="content">
      <HomeUserStatus class="home-user-status" />
      <HomeOptions class="home-options" />
      <HomeList class="home-list" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeUserStatus from './home-user-status.vue'
import HomeOptions from './home-options.vue'
import HomeList from './home-list.vue'
import SXSwipe from '@/base-ui/swipe'

import { swipeConfig, swipeItemConfig } from '../config/swipe.config'
export default defineComponent({
  components: { SXSwipe, HomeUserStatus, HomeOptions, HomeList },
  setup() {
    return { swipeConfig, swipeItemConfig }
  }
})
</script>

<style scoped lang="less">
.content {
  background-color: rgba(228, 1, 19);
}
</style>
