<template>
  <div class="goods-taste" v-for="(item, title) in GoodsTasteInfo" :key="item">
    <div class="taste-options">
      <!-- title 展示参数类型的标题 -->
      <div class="taste-title">
        {{ $filter.filterTaste(title) }}
      </div>
      <!-- item 展示商品的选项 -->
      <template v-if="title !== 'material'">
        <div class="item-options">
          <div
            v-for="(list, index) in item"
            :class="title === 'material' ? 'diff-select' : 'item-select'"
            :key="list.id"
            :id="[activeOptions[title].includes(index) ? 'active-color' : '']"
            @click="chooseTaste(list[Object.keys(list)[1]], title, index)"
          >
            {{ list[Object.keys(list)[1]] }}
          </div>
        </div>
      </template>
      <template v-else>
        <div class="item-options">
          <div
            class="diff-select"
            v-for="(list, index) in item"
            :key="list.id"
            :name="`select-${list.id}`"
            :id="[activeOptions[title].includes(index) ? 'active-color' : '']"
            ref="targetRef"
          >
            <div
              class="decrement"
              @click="
                decrement(
                  list[Object.keys(list)[1]],
                  title,
                  index,
                  list.id,
                  this.$refs.targetRef
                )
              "
            >
              <div class="decrement-btn">
                <van-icon class="minus-o" name="minus" />
              </div>
              <div class="show-message">{{ list[Object.keys(list)[1]] }}</div>
            </div>
            <div
              class="increment"
              @click="
                increment(
                  list[Object.keys(list)[1]],
                  title,
                  index,
                  list.id,
                  this.$refs.targetRef
                )
              "
            >
              ￥1
              <div class="increment-btn">
                <van-icon class="plus-o" name="plus" />
              </div>
            </div>
            <div class="count-show"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, watch } from 'vue'
import { modifyCount } from '../hooks'
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
    //获取小料实例
    const targetRef: any = ref(null)
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
        idList['material'].push(item.index)
      })
      idList['sugar'] = [tasteList.value['sugar']?.id]
      idList['temp'] = [tasteList.value['temp']?.id]
      return idList
    })
    //当弹出层关闭时，就清除全部数据
    watch(isClosePopup, (newValue) => {
      if (newValue) {
        tasteList.value = {
          material: [],
          sugar: {},
          temp: {}
        }
      }
    })
    // 减少当前口味
    const decrement = (
      target: any,
      type: string,
      index: string | number,
      id: number | string,
      els: Element[]
    ) => {
      modifyCount('decrement', tasteList, {
        target,
        type,
        index,
        id,
        els
      })
      emit('showGoodsInfo', tasteList.value)
    }
    //增加当前口味
    const increment = (
      target: any,
      type: string,
      index: string | number,
      id: string | number,
      els: Element[]
    ) => {
      modifyCount('increment', tasteList, {
        target,
        type,
        index,
        id,
        els
      })
      emit('showGoodsInfo', tasteList.value)
    }
    const chooseTaste = (target: any, type: string, id: string | number) => {
      //先判断是否有值，再考虑是否存入
      if (type !== 'material') tasteList.value[type] = { id, target }
      emit('showGoodsInfo', tasteList.value)
    }
    return {
      targetRef,
      tasteList,
      chooseTaste,
      activeOptions,
      decrement,
      increment
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
    .diff-select {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.7em;
      width: 11em;
      text-align: center;
      background-color: #eee;
      margin: 5px 10px;
      border-radius: 5px;
      .decrement,
      .increment {
        display: flex;
        align-items: center;
      }
      .decrement {
        width: 6.5em;
        justify-content: flex-start;
      }
      .increment {
        flex: 1;
        justify-content: flex-end;
      }
      .decrement-btn {
        border: 1px solid #000;
        border-radius: 26px;
        padding: 0 1px;
        margin: 0 0.3em;
      }
      .increment-btn {
        border: 1px solid #000;
        border-radius: 26px;
        padding: 0 1px;
        margin: 0 0.3em;
      }
      .plus-o,
      .minus-o {
        margin-right: -0.2px;
      }
    }
    .count-show {
      position: absolute;
      display: none;
      border: 0.05em solid rgb(255, 255, 255);
      top: -0.6em;
      right: -0.4em;
      background-color: rgb(29, 136, 92);
      width: 1.2em;
      height: 1.2em;
      border-radius: 50% 50%;
    }
  }
}
#active-color {
  background-color: rgba(29, 136, 92) !important;
  color: rgba(255, 255, 255);
  border-color: rgba(255, 255, 255) !important;
  .increment-btn,
  .decrement-btn {
    border-color: #fff;
  }
}
</style>
