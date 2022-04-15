<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" :fixed="true" v-bind="tabBar" z-index="99999">
      <van-tabbar-item
        v-for="item in tabBarItem"
        :key="item.name"
        icon="home-o"
        v-bind="item"
        >{{ item.message }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { ITabBar, ITabBarItem } from '../types'

export default defineComponent({
  props: {
    tabBar: {
      type: Object as PropType<ITabBar>,
      require: true
    },
    tabBarItem: {
      type: Object as PropType<ITabBarItem>
    }
  },
  setup() {
    const active = ref(0)
    return { active }
  }
})
</script>

<style lang="less" scoped>
.tab-bar {
  margin: 0;
  padding: 0;
}
</style>
