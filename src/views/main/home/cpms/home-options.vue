<template>
  <div class="home-options">
    <div class="options-atuo-order" @click="$router.replace('/goods')">
      <div class="order-title title">自助点单</div>
      <div class="order-message message">简单便捷不社恐</div>
      <div class="order-image image">
        <img src="~@/assets/img/jpg/waiter.jpg" />
      </div>
    </div>
    <div class="option-divider">
      <div class="top origin"></div>
      <div class="middle"></div>
      <div class="bottom origin"></div>
    </div>
    <div class="options-shop-mall">
      <div class="shop-mall-title title">积分商城</div>
      <div class="shop-mall-message message">礼劵宝物全都有</div>
      <div class="shop-mall-image image">
        <img src="~@/assets/img/jpg/shop_mall.jpg" />
      </div>
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

<style scoped lang="less">
.home-options {
  width: 90%;
  height: 200px;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  background-color: white;
  .options-atuo-order {
    box-sizing: border-box;
    width: calc(50% - 3px);
    height: 100%;
    border-radius: 10px 5px 5px 10px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .options-shop-mall {
    width: calc(50% - 3px);
    height: 100%;
    border-radius: 5px 10px 10px 5px;
    float: left;
  }
  .option-divider {
    height: 100%;
    width: 6px;
    background-color: white;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .origin {
      border-radius: 10px;
      width: 10px;
      height: 10px;
      background-color: rgba(81, 182, 116);
    }
    .middle {
      height: calc(100% - 7px);
      width: 1px;
      border-right: 1px dashed #000;
    }
    .top {
      margin-top: -7px;
      margin-left: 2px;
    }
    .bottom {
      margin-bottom: -7px;
    }
  }
  .title {
    margin-top: 20px;
    font-size: 25px;
    font-weight: 600;
  }
  .message {
    font-size: 12px;
    color: rgba(207, 207, 207);
  }
  .image {
    height: 70%;
    width: 100%;
    img {
      width: 65%;
      height: 80%;
    }
  }
}
</style>
