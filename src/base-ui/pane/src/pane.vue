<template>
  <div class="pane">
    <div class="pane-content" @click="handleClickPane(paneConfig)">
      <div class="content-image">
        <img
          v-if="paneConfig.picture"
          :src="paneConfig.picture[0] + '?type=small'"
        />
      </div>
      <div class="content-message">
        <div class="message-title">{{ paneConfig.name }}</div>
        <div class="message-monthSell">月售 {{ paneConfig.monthSell }}</div>
        <div class="message-oldprice">
          <span class="oldprice">{{
            $filter.formartPrice(paneConfig.oldPrice)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    paneConfig: {
      type: Object,
      require: true
    }
  },
  emits: ['handleClickPane'],
  setup(props, { emit }) {
    const handleClickPane = (config: any) => {
      emit('handleClickPane', config)
    }
    return { handleClickPane }
  }
})
</script>

<style scoped lang="less">
.pane {
  float: left;
  width: 50%;
  height: 200px;
  box-sizing: border-box;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: rgba(247, 247, 247);
  .pane-content {
    box-sizing: border-box;
    padding: 2px 5px;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;
    border-radius: 7px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-image {
      border-radius: 7px;
      width: 90%;
      height: 60%;
      img {
        border-radius: 7px;
        width: 100%;
        height: 100%;
      }
      .image-tag {
        margin-left: 8px;
        text-align: center;
        border-radius: 0px 0px 7px 7px;
        height: 25px;
        width: 35px;
      }
    }
    .content-message {
      width: 90%;
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
      .message-title {
        margin-top: 5px;
        font-size: 15px;
        font-weight: 700;
      }
      .message-monthSell {
        font-size: 12px;
        font-weight: 300;
        color: rgb(197, 197, 197);
      }
      .message-oldprice {
        font-weight: bolder;
        font-size: 15px;
        color: rgba(0, 0, 255, 0.788);
        margin-bottom: 5px;
      }
    }
  }
}
</style>
