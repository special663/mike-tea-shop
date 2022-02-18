<template>
  <div class="goods">
    <GoodsContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GoodsContent from './cpms/goods-content.vue'

export default defineComponent({
  components: { GoodsContent },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.goods {
  width: 100%;
  height: 100%;
}
</style>
