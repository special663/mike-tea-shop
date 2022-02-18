<template>
  <div class="goods-pane">
    <template v-for="item in goodsPaneConfig" :key="item.title">
      <van-sticky :offset-top="46" @change="handleChange(item.id)">
        <div
          :class="[
            'content-fire',
            isExtendStick[`stick${item.id}`] ? 'extend-stick' : 0
          ]"
        >
          <van-icon name="fire" />{{ item.title }}
        </div>
      </van-sticky>
      <div id="content">
        <template v-for="iten in item.goodsList" :key="iten.name">
          <SXPane :paneConfig="iten" @handleClickPane="handleClickPane" />
        </template>
      </div>
    </template>
    <SXPopup :popupConfig="popupConfig" v-model="isShowDetail">
      <template #content>
        <LoadingPage
          :loadingConfig="loadingConfig"
          :isShowOverlay="isShowOverlay"
        />
      </template>
    </SXPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import LoadingPage from '@/components/loading-page'
import SXPane from '@/base-ui/pane'
import SXPopup from '@/base-ui/popup'
import { IGoodsPaneConfig } from '../types'
import { useStore } from '@/store'
import { loadingConfig } from '@/views/main/goods/config/loading.config'
import { TIME_OUT } from '@/constants/global-types'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    goodsPaneConfig: {
      type: Array as PropType<IGoodsPaneConfig[]>,
      require: true
    },
    popupConfig: {
      type: Object,
      default: () => ({})
    }
  },
  components: { SXPane, SXPopup, LoadingPage },
  setup(props) {
    const Store = useStore()
    const Router = useRouter()
    const isShowDetail = ref(false)
    const isShowOverlay = ref(false)
    const raw: any = {}
    if (props.goodsPaneConfig) {
      for (const item of props.goodsPaneConfig) {
        raw[`stick${item.id}`] = false
      }
    }
    const isExtendStick = ref(raw)
    const handleChange = (id: number) => {
      isExtendStick.value[`stick${id}`] = !isExtendStick.value[`stick${id}`]
    }
    const handleClickPane = async (value: any) => {
      const id = value.id
      isShowOverlay.value = true
      const result = await Store.dispatch('goods/getGoodsList', {
        url: '/detail',
        query: `/${id}`
      })
      if (result) {
        isShowDetail.value = true
        setTimeout(() => {
          isShowOverlay.value = false
          Router.push(`/${id}/detail`)
          // isShowDetail.value = false
        }, TIME_OUT)
      }
    }

    return {
      loadingConfig,
      handleChange,
      isShowDetail,
      isShowOverlay,
      isExtendStick,
      handleClickPane
    }
  }
})
</script>

<style scoped lang="less">
.goods-pane {
  .content-fire {
    transition: all 0.3s;
    width: 100px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    background-color: deepskyblue;
    overflow: hidden;
    margin: auto;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
  }
  .extend-stick {
    width: 100% !important;
    border-radius: 0 !important  ;
    transition: all 0.3s;
  }
  #content::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  #content {
    *zoom: 1;
  }
}
</style>
