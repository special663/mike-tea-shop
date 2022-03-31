<template>
  <div class="goods-taste" v-for="(item, title) in GoodsTasteInfo" :key="item">
    <div class="taste-options">
      <!-- title 展示参数类型的标题 -->
      <div class="taste-title">{{ $filter.filterTaste(title) }}</div>
      <!-- item 展示商品的选项 -->
      <div class="item-options">
        <div
          class="item-select"
          v-for="(list, index) in item"
          :key="list.id"
          :id="[activeOptions[title].includes(index) ? 'active-color' : '']"
          @click="chooseTaste(list[Object.keys(list)[1]], title, index)"
        >
          {{ list[Object.keys(list)[1]] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, watch } from 'vue'

export default defineComponent({
  props: {
    GoodsTasteInfo: {
      type: Object,
      default: () => ({})
    },
    isClosePopup: {
      type: Boolean,
      default: true
    }
  },
  emits: ['showGoodsInfo'],
  setup(prop, { emit }) {
    const isClosePopup: any = inject('isClosePopup')
    //存储商品选项
    const tasteList: any = ref({
      material: [],
      sugar: {},
      temp: {}
    })
    //设置处于活跃状态下的下标
    const activeOptions = computed(() => {
      const idList: any = {
        material: [],
        sugar: [],
        temp: []
      }
      tasteList.value['material'].forEach((item: any) => {
        idList['material'].push(item.id)
      })
      idList['sugar'] = [tasteList.value['sugar']?.id]
      idList['temp'] = [tasteList.value['temp']?.id]
      return idList
    })

    //当弹出层关闭时，就清除全部数据
    watch(isClosePopup, (newValue) => {
      if (newValue)
        tasteList.value = {
          material: [],
          sugar: {},
          temp: {}
        }
    })
    // 选择口味
    const chooseTaste = (target: any, type: string, id: string | number) => {
      //先判断是否有值，再考虑是否存入
      if (type !== 'material') {
        tasteList.value[type] = { id, target }
      } else {
        //判断是否重复点击
        tasteList.value[type].forEach((goods: any, index: number) => {
          if (goods.target === target) {
            tasteList.value[type].splice(index, 1)
          }
        })
        //当选择超过两个时，删除队列中的第一个口味
        if (tasteList.value[type].length >= 2) tasteList.value[type].shift()
        tasteList.value[type].push({ id, target })
      }
      emit('showGoodsInfo', tasteList.value)
    }
    return {
      tasteList,
      chooseTaste,
      activeOptions
    }
  }
})
</script>

<style lang="less" scoped>
.goods-taste {
  font-size: 15px;
  .taste-title {
    margin: 10px;
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 400;
  }
  .item-options {
    margin: 5px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    letter-spacing: 0.1em;
    .item-select {
      padding: 6px 15px;
      background-color: #eee;
      margin: 5px 10px;
      border-radius: 5px;
    }
  }
}
#active-color {
  background-color: rgba(29, 136, 92) !important;
}
</style>
