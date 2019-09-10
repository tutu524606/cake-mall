<template>
    <div class="cart">
        <div class="empty-cart">
            <div class="cart-bg"></div>
            <div class="cart-empty-text"><span>您的购物车还是空的，</span><span><a href="">赶紧行动吧！</a></span></div>
        </div>
        <div class="recommend">
          <p>为您推荐</p>
        </div>
        <div class="shop-again"><van-button type="primary" to="/home">再逛逛</van-button></div>
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
  .recommend {
    > p {
      line-height: 0.4rem;
      font-weight: bolder;
      text-indent: 0.2rem;
    }
  }
  .shop-again {
    position: fixed;
    bottom: 0rem;
    z-index: 999;
    .van-button--primary {
      line-height: 0.46rem;
      width: 100vw;
      height: 0.46rem;
      font-size: 0.2rem;
      letter-spacing: 0.01rem;
      border-radius: 0;
      background-color: yellow;
      border-color: yellow;
      color: #000;
    }
  }
}
</style>

