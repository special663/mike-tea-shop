<template>
  <div class="goods-sidebar">
    <SXSidebar
      :sidebarItemConfig="sidebarItemConfig"
      @scrollIndex="scrollIndex"
      v-model="activeSidebar"
    />
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
  setup(prop, { emit }) {
    const activeSidebar = ref(0)
    watch(
      () => prop.activeNumber,
      (newValue) => {
        activeSidebar.value = newValue
      }
    )
    const scrollIndex = (value: any) => {
      emit('scrollIndex', value)
    }
    return { sidebarItemConfig, activeSidebar, scrollIndex }
  }
})
</script>

<style scoped lang="less">
.goods-sidebar {
  overflow-y: scroll;
}
</style>
