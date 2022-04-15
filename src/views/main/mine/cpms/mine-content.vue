<template>
  <div class="mine-content">
    <!-- 上半部分，展示主页个性 -->
    <div class="content-mine-card">
      <MineCard />
    </div>
    <!-- 下半部分，展示各类选项 -->
    <div class="content-mine-options">
      <MineOptions />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MineCard from './mine-card.vue'
import MineOptions from './mine-options.vue'

export default defineComponent({
  components: { MineCard, MineOptions },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.mine-content {
  font-size: 15px;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(81, 182, 116);
  background-image: url('~@/assets/img/jpg/mine.jpg');

  background-size: 60%;
  background-repeat: no-repeat;
  background-position: left bottom;
  .content-mine-card {
    width: 100%;
    height: 35%;
  }
  .content-mine-options {
    width: 95%;
    height: 65%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-35%);
  }
}
</style>
