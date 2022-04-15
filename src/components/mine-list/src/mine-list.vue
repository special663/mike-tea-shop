<template>
  <div class="mine-list">
    <div class="list-title">{{ mineListConfig.title }}</div>
    <div class="list-options">
      <div
        v-for="item in mineListConfig.options"
        :key="item.name"
        class="options-info"
        @click="handleClickEvent(item)"
      >
        <van-icon
          :color="item.color"
          class="info-icon"
          :size="item.size"
          :name="item.name"
        />
        <div class="info-tip">{{ item.tip }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import IMineListConfig from '../types'
import { IOptionsConifg } from '../types'

export default defineComponent({
  props: {
    mineListConfig: {
      type: Object as PropType<IMineListConfig>,
      default: () => ({})
    }
  },
  setup() {
    const Router = useRouter()
    const handleClickEvent = (options: IOptionsConifg) => {
      Router.push(`/${options.route}`)
    }
    return { handleClickEvent }
  }
})
</script>

<style lang="less" scoped>
.mine-list {
  width: 100%;
  height: auto;
  font-size: 15px;
  background-color: rgba(247, 247, 247);
  border-radius: 1em;
  box-sizing: border-box;
  padding: 1.2em 0;
  margin-bottom: 0.5em;
  .list-title {
    padding: 0 1.2em;
    font-size: 1.2em;
    font-weight: 600;
  }
  .list-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    .options-info {
      box-sizing: border-box;
      width: 4.5em;
      height: 4.5em;
      margin: 0 1.2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .info-icon {
        margin: 0.4em 0;
      }
      .info-tip {
        font-size: 0.9em;
      }
    }
  }
}
</style>
