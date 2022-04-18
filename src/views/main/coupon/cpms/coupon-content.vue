<template>
  <div class="coupon-content"><CouponBox /><CouponList /></div>
</template>

<script lang="ts">
//vue import
import { defineComponent } from 'vue'
//componets import
import CouponBox from '@/components/coupon-box'
import CouponList from './coupon-list.vue'
//config import

export default defineComponent({
  components: { CouponBox, CouponList },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.coupon-content {
  position: fixed;
  top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background-color: rgba(247, 247, 247);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
