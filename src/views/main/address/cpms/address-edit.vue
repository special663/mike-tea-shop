<template>
  <div class="address-edit">
    <SXForm
      class="address-edit-form"
      v-bind="formConfig"
      v-model="baseInfo"
      @onSubmit="submitHandle(baseInfo, Store, Router)"
      @telePhoneButton="telePhoneHandle(Store, baseInfo)"
    >
      <template #address="{ scope }">
        <van-field
          v-model="baseInfo.address"
          is-link
          readonly
          name="area"
          v-bind="scope"
          @click="showArea = true"
        />
      </template>
      <template #label="{ scope }">
        <van-field center v-model="baseInfo.label" v-bind="scope">
          <template #input>
            <div
              @click="baseInfo.label = item.index"
              v-for="item in scope['other-value']"
              :key="item.index"
              :class="[
                'label-select',
                baseInfo.label === item.index ? 'label-select-active' : ''
              ]"
            >
              {{ item.tip }}
            </div>
          </template>
        </van-field>
      </template>
      <!-- 删除记录 -->
      <template #footer class="delete-btn" v-if="paramsId">
        <van-cell-group inset
          ><van-button
            block
            round
            type="danger"
            @click="deleteHandle(Store, Router, paramsId)"
            >删除记录</van-button
          ></van-cell-group
        >
      </template>
    </SXForm>
    <!-- 这是弹出层代码 -->
    <van-popup v-model:show="showArea" position="bottom">
      <van-area
        :areaList="areaList"
        @confirm="onConfirm"
        @cancel="showArea = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
//vue import
import { defineComponent, ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { areaList } from '@vant/area-data'
import { useStore } from '@/store'
//compoments import
import SXForm from '@/base-ui/form/src/form.vue'
//config import
import {
  telePhoneHandle,
  submitHandle,
  setupBaseInfo,
  deleteHandle
} from '../hooks'
import { formConfig } from '../config/form.config'

export default defineComponent({
  components: { SXForm },
  setup() {
    const Route = useRoute()
    const Router = useRouter()
    const Store = useStore()
    const paramsId = computed(() => Route.params.id)
    const baseInfo = ref({
      name: '',
      gender: '0',
      telePhone: '',
      address: '',
      details: '',
      label: ''
    })
    watchEffect(async () => {
      if (paramsId.value) {
        baseInfo.value = await setupBaseInfo(Store, paramsId.value)
      }
    })
    const showArea = ref(false)
    const onConfirm = (areaValues: any) => {
      showArea.value = false
      baseInfo.value.address = areaValues
        .filter((item: any) => !!item)
        .map((item: any) => item.name)
        .join('/')
    }
    return {
      formConfig,
      Router,
      Store,
      paramsId,
      baseInfo,
      areaList,
      showArea,
      onConfirm,
      telePhoneHandle,
      submitHandle,
      deleteHandle
    }
  }
})
</script>

<style lang="less" scoped>
.address-edit {
  font-size: 15px;
  background-color: rgba(247, 247, 247);
  width: 100%;
  height: calc(100% - 46px);
  position: relative;
  .address-edit-form {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
}

.label-select {
  width: 3.5em;
  text-align: center;
  box-sizing: border-box;
  flex: 1;
  border-radius: 0.3em;
  margin: 0.2em;
  color: rgba(222, 222, 222);
  border: 1px solid rgba(222, 222, 222);
  height: 100%;
}
.label-select-active {
  border: 1px solid rgba(0, 122, 83);
  color: rgba(0, 122, 83);
}
</style>
