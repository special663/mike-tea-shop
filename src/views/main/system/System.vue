<template>
  <div class="system">
    <router-view />
    <TabBar
      class="tab-bar"
      v-if="isShowTabBar"
      :tabBar="tabBarConfig"
      :tabBarItem="tabBarItemConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import TabBar from '@/components/tab-bar/src/tab-bar.vue'
import { tabBarItemConfig, tabBarConfig } from './config/tab-bar.config'
import { useRoute } from 'vue-router'
import { getRoute } from './hooks/index'

export default defineComponent({
  components: { TabBar },
  setup() {
    const route = useRoute()
    const isShowTabBar = ref(true)
    watch(
      () => route.name,
      (newValue) => {
        isShowTabBar.value = getRoute(newValue)
      }
    )
    onMounted(() => {
      isShowTabBar.value = getRoute(route.name)
    })
    return { tabBarItemConfig, tabBarConfig, isShowTabBar }
  }
})
</script>

<style scoped lang="less">
.system {
  width: 100%;
  height: 100vh;
}
</style>
