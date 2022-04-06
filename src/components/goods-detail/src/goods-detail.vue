<template>
  <div class="goods-detail">
    <!-- 展示商品图片 -->
    <div class="detail-img">
      <SXSwipe
        :swipeItemConfig="goodsDetail?.images"
        :swipeConfig="goodsSwipeConfig"
      />
    </div>
    <!-- 展示商品数据 -->
    <div class="detail-content">
      <van-sticky :offset-top="130">
        <div class="content-message">
          <div class="goods-name">{{ goodsDetail?.name }}</div>
          <div class="goods-star">
            <div class="star-img">
              <van-icon class="img-type" name="like-o" />
            </div>
            <div class="star-message">收藏口味</div>
          </div>
        </div>
      </van-sticky>
      <div class="content-info">
        {{ goodsDetail?.detail }}
      </div>
    </div>
    <!-- 选择参数 -->
    <div class="detail-options">
      <GoodsTaste @showGoodsInfo="showGoodsInfo" :GoodsTasteInfo="goodsTaste" />
    </div>
    <div class="detail-footer">
      <!-- 显示价格,控制分量 -->
      <div class="control-box">
        <div class="price-box">
          ￥<span class="price-messsage">{{
            goodsDetail?.oldPrice * count
          }}</span>
        </div>
        <div class="count-control">
          <van-stepper class="stepper" disable-input v-model="count" />
        </div>
      </div>
      <!-- 显示类型参数 -->
      <div class="goods-info">{{ goodsInfo }}</div>
      <!-- 加入购物车 -->
      <div class="add-shop-bag">
        <van-button color="rgba(29,136,92)" size="large" round
          ><span class="merge">加入购物袋</span></van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { formatParam, formatMaterical } from '../hooks'
import { computed, defineComponent, inject, ref, watch } from 'vue'

import SXSwipe from '@/base-ui/swipe'
import GoodsTaste from '@/components/goods-taste'
export default defineComponent({
  components: { SXSwipe, GoodsTaste },
  props: {
    goodsDetail: {
      type: Object as any,
      default: () => ({})
    },
    goodsSwipeConfig: {
      type: Object,
      default: () => ({})
    }
  },
  setup(prop) {
    const isClosePopup = inject('isClosePopup')
    const goodsTaste = computed(() => {
      const cache: any = {}
      //主要对material数据进行筛选
      if (prop.goodsDetail?.material?.length > 1)
        cache.material = formatMaterical(prop.goodsDetail?.material)
      cache.sugar = prop.goodsDetail?.sugar
      cache.temp = prop.goodsDetail?.temp
      return cache
    })
    const count = ref(1)
    const goodsInfo: any = ref('')
    const showGoodsInfo = (value: any) => {
      //格式化商品参数
      goodsInfo.value = formatParam(value)
    }
    //监听窗口关闭，初始化商品参数列表
    watch(
      () => isClosePopup,
      (newValue) => {
        if (newValue) showGoodsInfo({ material: [], sugar: {}, temp: {} })
      },
      {
        deep: true
      }
    )

    return { goodsTaste, count, goodsInfo, showGoodsInfo }
  }
})
</script>

<style lang="less" scoped>
.goods-detail {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  overflow-y: scroll;
  .detail-content {
    overflow: hidden;
  }
  .detail-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;
    .content-message {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-radius: 20px;
      .goods-name,
      .goods-star {
        margin: 10px;
      }
      .img-type {
        display: flex;
        justify-content: center;
        font-size: 1.5em;
        margin-bottom: 4px;
      }
      .goods-star {
        border-left: 1px solid rgba(0, 0, 0, 0.13);
        padding-left: 0.8em;
      }
      .goods-name {
        font-size: 1.3em;
        font-weight: 600;
      }
    }
    .content-info {
      font-size: 1em;
      color: rgba(0, 0, 0, 0.459);
      margin: 0 10px;
      letter-spacing: 0.1em;
    }
  }
  .detail-options {
    margin-bottom: 170px;
  }
  .detail-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: white;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;
    .control-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 20px 13px 0px;
      .price-box {
        font-size: 1.3em;
        font-weight: 600;
      }
    }
    .goods-info {
      margin-left: 0.8em;
    }
    .add-shop-bag {
      margin: 1em 0.8em;
      .merge {
        font-size: 1.2em;
        letter-spacing: 0.1em;
      }
    }
  }
}
</style>
