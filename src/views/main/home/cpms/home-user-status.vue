<template>
  <div class="goods-user-status">
    <div class="user-status-fail user-status" v-if="!token">
      <div class="status-fail-content">
        <img src="~@/assets/img/jpg/coupons.jpg" />
        <div class="content-title">
          完善信息享2张88折劵
          <div class="content-message">每升一级优惠权益更大哦!</div>
        </div>
      </div>
      <van-button
        round
        size="small"
        type="danger"
        class="status-login"
        @click="$router.replace('/')"
        text="注册/登录"
      ></van-button>
    </div>
    <div class="user-status-success user-status" v-else>
      <div class="success-avatar">
        <img
          @click="$router.replace('/mine')"
          :src="
            avatar !== '' ? avatar : require('@/assets/img/jpg/base_avatar.jpg')
          "
        />
      </div>
      <div class="success-message">
        <div class="message-title">HI, {{ name }}</div>
        <div class="message-content">
          <div class="content-division" />
          <div class="content-message"><i>来杯奶茶犒劳下自己吧~</i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const Store = useStore()
    const name = computed(() => Store.getters['login/getLoginInfo']('name'))
    const token = computed(() => Store.getters['login/getLoginInfo']('token'))
    const avatar = computed(() => Store.getters['login/getLoginInfo']('avatar'))
    return { token, name, avatar }
  }
})
</script>

<style scoped lang="less">
.goods-user-status {
  background-color: rgba(228, 1, 19);
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px;
  .user-status {
    text-align: center;
    width: 95%;
    height: 80px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .user-status-fail {
    .status-fail-content {
      img {
        height: 40px;
        width: 40px;
      }
      display: flex;
      align-items: flex-start;
      .content-title {
        font-weight: 600;
        font-size: 17px;
        margin-top: 5px;
        margin-left: 5px;
        letter-spacing: 1px;
        font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
      }
      .content-message {
        font-size: 10px;
        color: rgba(207, 207, 207);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .status-login {
      font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
      color: rgba(255, 255, 255, 0.8);
      padding: 0px 15px;
    }
  }
  .user-status-success {
    display: flex;
    justify-content: space-between;
    .success-avatar {
      height: 100%;
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        align-self: flex-end;
      }
    }
    .success-message {
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .message-title {
        align-self: flex-start;
        margin-left: 10px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .message-content {
        align-self: flex-end;
        margin-right: 15px;
        font-family: cursive;
        display: flex;
        justify-content: flex-end;
        .content-division {
          width: 1px;
          height: 100%;
          background-color: rgba(228, 1, 19);
          margin-right: 10px;
        }
        .content-message {
        }
      }
    }
  }
}
</style>
