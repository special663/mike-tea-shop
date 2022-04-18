<template>
  <div class="coupon-box">
    <div class="coupon-content">
      <div class="content-input">
        <input type="text" placeholder="请输入兑换码" />
      </div>
      <div class="content-convertibility">兑换</div>
    </div>
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

<style lang="less" scoped>
.coupon-box {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5em;
  margin: 0.6em 0;
  .coupon-content {
    background-color: #fff;
    width: 92%;
    height: 2.6em;
    margin: auto;
    border-radius: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    .content-convertibility {
      width: 25%;
      text-align: center;
      line-height: 2.6em;
      background-color: rgba(0, 122, 83);
      border-radius: 0 2em 2em 0;
      height: 100%;
      font-weight: 500;
      color: #fff;
    }
    .content-input {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75%;
      input {
        border: none;
        background-color: transparent;
        width: 90%;
        height: 100%;
      }
    }
  }
}
</style>
