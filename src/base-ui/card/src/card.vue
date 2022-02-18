<template>
  <div class="card">
    <van-card v-bind="cardConfig" @click="handleCard(cardConfig)">
      <template #title>
        {{ cardConfig.title }}
      </template>
      <template #num
        ><van-button color="rgba(29,136,92)" size="mini" round
          ><span class="sp">选规格</span></van-button
        ></template
      >
      <template #price>
        <div class="price">
          ￥<span class="price-messsage">{{ cardConfig.price }}</span>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ICardConfig } from '../types'

export default defineComponent({
  props: {
    cardConfig: {
      type: Object as PropType<ICardConfig>
    }
  },
  emits: ['handleCard'],
  setup() {
    const handleCard = (value: ICardConfig) => {
      console.log(value)
    }
    return { handleCard }
  }
})
</script>

<style scoped lang="less">
.card {
  .sp {
    padding: 0 5px;
  }
  .price {
    .price-messsage {
      font-weight: 700;
      font-size: 18px;
    }
  }
}
.van-card {
  font-size: 15px;
  font-weight: 700 !important;
}
</style>
