<template>
    <div class="cart">
        <div class="empty-cart">
            <div class="cart-bg"></div>
            <div class="cart-empty-text"><span>您的购物车还是空的，</span><span><a href="">赶紧行动吧！</a></span></div>
        </div>
    </div>
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
.cart {
  .empty-cart {
    background-color: #ccc;
    .cart-bg {
      width: 100vw;
      height: 20vh;
      background: url(../../assets/images/cart-empty.png) no-repeat center;
    }
    .cart-empty-text {
      text-align: center;
      line-height: 0.5rem;
      font-size: 0.15rem;
      color: #fff;
    }
  }
}
</style>

