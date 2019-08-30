<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="good-job-o">精选</van-tabbar-item>
      <van-tabbar-item icon="shop-collect-o">蛋糕</van-tabbar-item>
      <van-tabbar-item icon="fire-o">小食</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>  

<style lang="less">
.footer {
  width: 100%;
  height: 0.46rem;
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: 0.46rem;
  background-color: #fff;
  .van-tabbar {
    height: 0.46rem;
    .van-tabbar-item {
      .van-tabbar-item__icon {
        font-size: 0.16rem;
        margin-bottom: 0.05rem;
      }
      .van-tabbar-item__text {
        font-size: 0.12rem;
      }
    }
  }
}
</style>