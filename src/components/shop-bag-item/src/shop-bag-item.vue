<template>
  <div class="shop-bag-item">
    <!-- 选项 -->
    <div
      @click="isCheck(goodsConfig, this.$store)"
      :class="['item-select', goodsConfig.affirm ? 'item-select-active' : 0]"
    >
      <van-icon v-if="goodsConfig.affirm" color="#fff" name="success" />
    </div>
    <!-- 内容实体 -->
    <div class="item-content">
      <div class="goods-card">
        <img class="card-img" :src="goodsConfig.img" />
        <div class="card-content">
          <div class="card-title">{{ goodsConfig.goods_name }}</div>
          <div class="card-taste">{{ goodsConfig.taste }}</div>
          <div class="card-price">
            {{ this.$filter.formartPrice(goodsConfig.price) }}
          </div>
        </div>
      </div>
    </div>
    <!-- 步进器 -->
    <div class="item-stepper">
      <van-stepper
        v-bind:model-value="goodsConfig.count"
        theme="round"
        button-size="22"
        disable-input
        @change="beforeChange($event, goodsConfig.goods_id, this.$store)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IShopBagItemConfig } from '../types'
import { beforeChange, isCheck } from '../hooks'

export default defineComponent({
  props: {
    goodsConfig: {
      type: Object as PropType<IShopBagItemConfig>,
      default: () => ({})
    }
  },
  setup() {
    return { beforeChange, isCheck }
  }
})
</script>

<style lang="less" scoped>
.shop-bag-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  font-size: 15px;
  margin: 0.5em 0;
  .item-select {
    margin-left: 1.5em;
    margin-right: 0.7em;
    width: 1em;
    height: 1em;
    border: 1px solid rgba(188, 188, 188);
    border-radius: 1em;
  }
  .item-select-active {
    border: 1px solid rgba(29, 136, 92);
    background-color: rgba(29, 136, 92);
  }
  .item-content {
    flex: 1;
    height: 100%;
    .goods-card {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      .card-img {
        height: 70%;
        overflow: hidden;
        border-radius: 0.5em;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 0.5em;
        .card-title {
          font-size: 1.2em;
          font-weight: 800;
        }
        .card-taste {
          font-size: 0.7em;
          color: rgba(204, 204, 204);
        }
        .card-price {
          margin-top: 0.2em;
          font-size: 1em;
          font-weight: 600;
        }
      }
    }
  }
  .item-stepper {
    min-width: 25px;
    margin: 0 0.7em;
  }
}
</style>
