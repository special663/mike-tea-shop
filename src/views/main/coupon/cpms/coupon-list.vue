<template>
  <div class="coupon-list">
    <CouponCell
      v-for="couponCell in couponCellConfigs"
      :coupon-cell-config="couponCell"
      :coupon-config="couponConfig"
      :key="couponCell.label"
    >
      <!-- <template #replenish>123456</template> -->
      <!-- <template #replenish-content>qe13q2e1q321e32</template> -->
    </CouponCell>
  </div>
</template>

<script lang="ts">
//vue import
import { defineComponent } from 'vue'
//components import
import CouponCell from '@/components/coupon-cell/src/coupon-cell.vue'
//config import
import { couponCellConfigs, couponConfig } from '../config/coupon-cell.config'

export default defineComponent({
  setup() {
    return { couponCellConfigs, couponConfig }
  },
  components: { CouponCell }
})
</script>

<style lang="less" scoped>
.coupon-list {
  overflow-y: scroll;
  width: 100%;
}
</style>
