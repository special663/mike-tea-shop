<template>
  <div class="detail-action-bar">
    <van-action-bar>
      <van-action-bar-icon icon="cart-o" text="购物车" />
      <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
      <van-action-bar-button type="warning" text="加入购物车" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
