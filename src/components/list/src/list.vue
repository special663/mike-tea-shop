<template>
  <div class="list">
    <div class="list-option">
      <div class="option-message">
        <div class="message-title">{{ listConfig.title }}</div>
        <div class="message-content">{{ listConfig.content }}</div>
      </div>
      <div class="option-image">
        <img :src="listConfig.img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { listConfig } from '../types'
export default defineComponent({
  props: {
    listConfig: {
      type: Object as PropType<listConfig>,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.list-option {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: white;
  float: left;
  border-radius: 20px 5px 5px 5px;
  padding: 12px 0 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .option-message {
    align-self: flex-start;
    .message-title {
      font-size: 16px;
      font-weight: 600;
    }
    .message-content {
      font-weight: 500;
      font-size: 12px;
      color: rgba(207, 207, 207);
    }
  }
  .option-image {
    width: 50%;
    align-self: flex-end;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
