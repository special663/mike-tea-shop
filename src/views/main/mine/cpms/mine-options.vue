<template>
  <div class="mine-options">
    <MineList
      v-for="config in mineListConfigs"
      :key="config.title"
      :mine-list-config="config"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mineListConfigs } from '../config/mine-list.config'
import MineList from '@/components/mine-list/src/mine-list.vue'

export default defineComponent({
  components: { MineList },
  setup() {
    return { mineListConfigs }
  }
})
</script>

<style lang="less" scoped>
.mine-options {
  height: 100%;
  width: 100%;
  border-radius: 1em;
}
</style>
