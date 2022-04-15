<template>
  <div class="address">
    <AddressContent />
    <AddressFooter />
  </div>
</template>

<script lang="ts">
//vue import
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import Storage from '@/utils/cache'
//compoment import
import AddressFooter from './address-footer.vue'
import AddressContent from './address-content.vue'

export default defineComponent({
  components: { AddressFooter, AddressContent },
  setup() {
    const Store = useStore()
    const uid = Storage.getStorage('uid')
    //发送网络请求，获取用户地址列表
    Store.dispatch('mine/getAddressList', {
      url: '/list',
      params: uid,
      type: 'list'
    })
    return {}
  }
})
</script>

<style lang="less" scoped>
.address {
  width: 100%;
  height: calc(100% - 50px);
  position: absolute;
  top: 46px;
  left: 0;
}
</style>
