<template>
  <div class="address-list">
    <AddressCell />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddressCell from './address-cell.vue'

export default defineComponent({
  components: { AddressCell },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.address-list {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
