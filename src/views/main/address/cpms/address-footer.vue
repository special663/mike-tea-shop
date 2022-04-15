<template>
  <div class="address-footer" @click="handleAddAddress">
    <van-icon size="17" name="add-o" /> 新增收货地址
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const Router = useRouter()
    const handleAddAddress = () => {
      Router.push('/edit')
    }
    return { handleAddAddress }
  }
})
</script>

<style lang="less" scoped>
.address-footer {
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: rgba(0, 122, 83);
  bottom: 0;
  left: 0;
  text-align: center;
  line-height: 50px;
  font-size: 17px;
  color: #fff;
}
</style>
