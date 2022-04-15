<template>
  <div class="address-cell">
    <template v-for="cell in addressCell" :key="cell?.id">
      <SXCell :cellConfig="cellConfigs">
        <template #title>
          <div class="address-message">
            {{ cell?.address }} {{ cell?.details }}
          </div></template
        >
        <template #label>
          <div class="address-user-info">
            <div class="info-label">{{ cell?.label }}</div>
            <div class="info-detail">
              {{ cell?.name }}({{ cell?.gender }}) {{ cell?.telePhone }}
            </div>
          </div>
        </template>
        <template #right-icon>
          <div class="address-icon" @click="handleEdit(cell?.id)">
            <van-icon size="1.5em" name="edit" /></div
        ></template>
      </SXCell>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
//vue import
//compoents import
import SXCell from '@/base-ui/cell'
//config import
import { cellConfigs } from '../config/cell.config'
//utils import
import { useStore } from '@/store'

export default defineComponent({
  components: { SXCell },
  setup() {
    const Store = useStore()
    const Router = useRouter()
    //这里留个心眼，更新分两阶段
    //可以使用watchEffect检测到
    const addressCell = computed(() =>
      Store.getters['mine/getAddressInfo']('List')
    )
    const handleEdit = (id: number) => {
      Router.push({
        params: {
          id
        },
        name: 'ModifyEdit'
      })
    }
    return { cellConfigs, addressCell, handleEdit }
  }
})
</script>

<style lang="less" scoped>
.address-cell {
  font-size: 15px;
  .address-message {
    font-size: 1.2em;
    font-weight: 700;
  }
  .address-user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .info-label {
      border: 1px solid rgba(0, 122, 83);
      border-radius: 0.3em;
      color: rgba(0, 122, 83);
      padding: 0 0.8em;
    }
    .info-detail {
      margin-left: 0.6em;
      font-size: 1.2em !important;
    }
  }
}
</style>
