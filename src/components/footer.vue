<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item :icon="item.icon" v-for="(item,i) in downMenus" :key="i" @touchstart.native.prevent.stop="changeMenu(item)">{{item.menuName}}</van-tabbar-item>
      <!-- <van-tabbar-item icon="shop-collect-o">蛋糕</van-tabbar-item>
      <van-tabbar-item icon="fire-o">小食</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 2,
      downMenus: [
        {
          id: 0,
          menuName: "精选",
          icon: "good-job-o",
          path: ""
        },
        {
          id: 1,
          menuName: "蛋糕",
          icon: "shop-collect-o",
          path: "/cake"
        },
        {
          id: 2,
          menuName: "小食",
          icon: "fire-o",
          path: "/home"
        },
        {
          id: 3,
          menuName: "购物车",
          icon: "shopping-cart-o",
          path: "/cart"
        }
      ]
    };
  },
  computed: {
    currentMenu() {
      return this.$store.state.footer.currentMenu[0]
        ? this.$store.state.footer.currentMenu[0]
        : "";
    }
  },
  mounted() {
    this.active = this.currentMenu ? this.currentMenu.id : 2;
  },
  methods: {
    ...mapActions(["changeMenuItem", "changeChoice"]),
    changeMenu(item) {
      this.changeMenuItem(item);
      if (item.id != "0") {
        this.$router.push({
          path: item.path
        });
      }
    }
  },
  watch: {
    currentMenu(value) {
      if (value != this.downMenus[0]) {
        this.active = value.id;
      }
    },
    "$route.path": {
      deep: true,
      handler(value) {
        this.changeMenuItem(
          this.downMenus.filter(v => {
            return v.path == value;
          })[0]
        );
      }
    }
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