<template>
  <div class="goods">
    <van-pull-refresh
      ref="root"
      class="pull-refresh"
      v-model="loading"
      @refresh="onRefresh"
    >
      <HomeContent class="home-content" />
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import { useStore } from '@/store'
import HomeContent from './cpms/home-content.vue'

export default defineComponent({
  components: { HomeContent },
  setup() {
    const Store = useStore()
    const loading = ref(false)
    const onRefresh = () => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    }
    let timer: any = null
    const savePosY = () => {
      if (timer) return
      timer = setTimeout(() => {
        let node: any = document.querySelector('.goods')
        //记录滚动位置
        Store.commit('goods/changeGoodsY', node.scrollTop)
        timer = null
        clearTimeout(timer)
      }, 100)
    }
    onMounted(() => {
      let contentWrapper: any = document.querySelector('.goods')
      contentWrapper.addEventListener('scroll', savePosY)
      nextTick(() => {
        contentWrapper.scrollTop = Store.getters['goods/getGoodsInfo']('Y')
      })
    })
    return { loading, onRefresh }
  }
})
</script>

<style scoped lang="less">
.goods {
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
</style>
