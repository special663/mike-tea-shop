<template>
  <div class="home">
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
import { defineComponent, ref } from 'vue'
import HomeContent from './cpms/home-content.vue'
import scrollY from '@/hooks/hooks-scrollY'

export default defineComponent({
  components: { HomeContent },
  setup() {
    const loading = ref(false)
    const onRefresh = () => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    }
    //监听滚动位置
    scrollY('.home', {
      gettersPath: 'home/getHomeInfo',
      commitPath: 'home/changeHomeY'
    })
    return { loading, onRefresh }
  }
})
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
</style>
