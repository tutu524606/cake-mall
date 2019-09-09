<template>
    <div>购物车</div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {};
  },
  mounted() {
    Dialog.confirm({
      title: "温馨提示",
      message: "您需要先登录才能继续您的操作",
      cancelButtonText: "以后再说",
      confirmButtonText: "立即登录"
    }).then(() => {
      // on close
    });
  }
};
</script>
<style lang="less">
</style>

