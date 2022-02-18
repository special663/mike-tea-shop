<template>
  <div class="home-list">
    <template v-for="(listConfig, index) in listsConfig" :key="index">
      <SXList class="list-option" :listConfig="listConfig" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SXList from '@/components/list'
import { listsConfig } from '../config/list-config'
export default defineComponent({
  components: { SXList },
  setup() {
    const img = '~@/assets/img/jpg/material_benefits.jpg'
    return { listsConfig, img }
  }
})
</script>

<style scoped lang="less">
.home-list {
  width: 90%;
  height: 120px;
  background-color: rgba(228, 1, 19);
  margin: auto;
  margin-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  .list-option {
    width: 32%;
    height: 100%;
  }
}
</style>
