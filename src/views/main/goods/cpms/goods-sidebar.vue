<template>
  <div class="goods-sidebar">
    <SXSidebar :sidebarItemConfig="sidebarItemConfig" v-model="activeSidebar" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import SXSidebar from '@/base-ui/sidebar'
import { sidebarItemConfig } from '../config/sidebar.config'
export default defineComponent({
  components: { SXSidebar },
  props: {
    activeNumber: {
      type: Number,
      default: 1
    }
  },
  setup(prop) {
    const activeSidebar = ref(0)
    watch(
      () => prop.activeNumber,
      (newValue) => {
        activeSidebar.value = newValue
      }
    )
    return { sidebarItemConfig, activeSidebar }
  }
})
</script>

<style scoped lang="less">
.goods-sidebar {
  overflow-y: scroll;
}
</style>
