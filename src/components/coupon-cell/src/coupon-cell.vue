<template>
  <div class="coupon">
    <div class="coupon-cell">
      <!-- 左侧的折扣信息 -->
      <div class="coupon-content">
        <div class="coupon-value-desc">
          <div class="coupon-discount-description">
            <div class="discount">{{ discount }}</div>
            <div class="discount-description">
              {{ description }}
            </div>
          </div>
          <div class="coupon-limit">
            <slot name="limit">{{ limit }}</slot>
          </div>
        </div>
        <!-- 右侧的优惠卷信息 -->
        <div class="coupon-message">
          <div class="coupon-message-source-label">
            <div class="coupon-message-source">【{{ source }}】</div>
            <div class="coupon-message-label">{{ label }}</div>
            <div class="coupon-message-discount">
              {{ discountDesc }}
            </div>
          </div>
          <div class="coupon-message-express">
            {{ express }}
          </div>
          <!-- 这是补充插槽 -->
          <slot name="replenish"></slot>
        </div>
        <!-- 右侧的操作,比如radio,button之类 -->
        <div class="coupon-handle">
          <van-icon size="1.3em" name="circle" />
        </div>
      </div>
      <slot name="coupon-footer" v-if="replenish">
        <div class="coupon-replenish">
          <div class="replenish-split">
            <div class="split-left" />
            <div class="split-line" />
            <div class="split-right" />
          </div>
          <slot name="replenish-content"></slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
//vue import
import { computed, defineComponent, PropType } from 'vue'
//config import
import { ICouponCellConfig, ICouponConfig } from '../types'
import { setupParams } from '../hooks'

export default defineComponent({
  props: {
    couponConfig: {
      type: Object as PropType<ICouponConfig>,
      required: true
    },
    couponCellConfig: {
      type: Object as PropType<ICouponCellConfig>,
      required: true
    }
  },
  setup(prop) {
    const replenish = computed(() => prop.couponConfig.replenish)
    return { replenish, ...setupParams(prop.couponCellConfig) }
  }
})
</script>

<style lang="less" scoped>
.coupon {
  position: relative;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 3.5em;
  margin: 0.6em 0;
  .coupon-cell {
    position: relative;
    width: 92%;
    border-radius: 0.5em;
    background-color: rgba(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .coupon-content {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5em;
      .coupon-value-desc {
        max-width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.8em;

        .coupon-discount-description {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          max-height: 27px;
          color: red;
          .discount {
            font-size: 2em;
            line-height: 27px;
            font-weight: 600;
            padding: 0 0.1em;
          }
          .discount-description {
            align-self: auto;
            font-size: 0.5em;
          }
        }
        .coupon-limit {
          font-size: 0.5em;
          color: rgb(202, 202, 202);
        }
      }
      .coupon-message {
        max-width: 60%;
        .coupon-message-source-label {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          font-weight: 900;
          font-size: 1.01em;
        }
        .coupon-message-express {
          padding: 0.5em 0.2em;
          font-size: 0.5em;
          color: rgb(179, 179, 179);
        }
      }
      .coupon-handle {
        flex: 1;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .coupon-replenish {
      padding: 0.2em;
      margin-top: 5px;
      position: relative;
      width: 100%;
      background-color: transparent;
      .replenish-split {
        width: 100%;
        height: 0.7em;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        .split-left,
        .split-right {
          width: 0.7em;
          height: 100%;
          border-radius: 0.7em;
          background-color: rgba(247, 247, 247);
          position: absolute;
        }
        .split-left {
          left: -5px;
        }
        .split-right {
          right: -5px;
        }
        .split-line {
          width: 80%;
          height: 1px;
          background-color: rgba(247, 247, 247);
        }
      }
    }
  }
}
</style>
