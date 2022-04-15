<template>
  <div class="mine-card">
    <div class="card-content">
      <div class="card-avatar">
        <!-- 头像 -->
        <img :src="userAvatar" />
      </div>
      <!-- 个性签名 -->
      <div class="card-message">
        <div class="message-show">
          <div class="name">{{ userName }}</div>
          <div class="level">初级巷粉</div>
        </div>
        <div class="progress-message">
          再获得{{ count }}个糖豆可升级为中级巷粉
          <br />
          当前进度 0/50
        </div>
        <div class="progress-show">
          <SXProgress class="k" :progress-config="progressConfig" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import SXProgress from '@/base-ui/progress/src/progress.vue'
import { useStore } from '@/store'

import { progressConfig } from '../config/card.progress.config'

export default defineComponent({
  components: { SXProgress },
  setup() {
    const Store = useStore()
    const userName = computed(() => Store.getters['login/getLoginInfo']('name'))
    const userAvatar = computed(() =>
      Store.getters['login/getLoginInfo']('avatar')
    )
    const count = ref(50)
    return { progressConfig, userName, userAvatar, count }
  }
})
</script>

<style lang="less" scoped>
.mine-card {
  font-size: 15px;
  background-color: rgba(254, 254, 254);
  height: 100%;
  width: 100%;
  background-image: url('~@/assets/img/png/mine-logo.png');
  background-size: 40% 60%;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .card-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .card-avatar {
      margin: 0 1em;
      width: 4.5em;
      height: 4.5em;
      border-radius: 4.5em;
      img {
        border-radius: 4.5em;
        width: 4.5em;
        height: 4.5em;
      }
    }
    .card-message {
      height: 100%;
      display: flex;
      padding: 0.5em 0;
      flex-direction: column;
      justify-content: space-between;
      .message-show {
        font-size: 1.5em;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .name {
          letter-spacing: 0.01em;
        }
        .level {
          font-size: 0.4em;
          margin: 0 0.5em;
          border: 1px solid rgba(81, 182, 116);
          border-radius: 0.7em 0.7em 0.7em 0.1em;
          background-color: rgba(81, 182, 116);
          color: white;
          font-weight: 100;
          padding: 0.1em 0.3em;
        }
      }
      .progress-message {
        font-size: 0.7em;
      }
      .progress-show {
        width: 8em;
      }
    }
  }
}
</style>
