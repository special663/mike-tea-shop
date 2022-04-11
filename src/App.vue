<template>
  <div id="APP">
    <router-view />
  </div>
</template>

<style lang="less">
#APP {
  width: 100%;
}
.van-badge {
  background: rgba(29, 136, 92) !important;
  border: none !important;
}
.van-dialog {
  z-index: 99999 !important;
}
.van-stepper--round .van-stepper__plus {
  background: rgba(29, 136, 92) !important;
  border: 2px solid rgba(29, 136, 92) !important;
}
.van-stepper--round .van-stepper__minus {
  border: 2px solid rgba(29, 136, 92) !important;
  color: rgba(29, 136, 92) !important;
}
</style>
