<template>
<div class="choice">
    <van-popup
    v-model="show"
    position="left"
    @close="popClose"
    :style="{ width: '50%',height: '100%' }">
      <div class="all-cake">
        <p><span>所有蛋糕</span><span>35</span></p>
      </div>
      <van-divider />
      <div class="cake-category">
        <ul>
          <li v-for="(item,i) in cakeCategory" :key="i">
            <span><i :class="'iconfont ' + item.icon"></i></span>
            <span>{{item.name}}</span>
            <span><i class="iconfont icondayuhao"></i></span>
          </li>
        </ul>
      </div>
      <div class="all-cake all-food">
        <p><span>所有小食</span><span>14</span></p>
      </div>
      <van-divider />
      <div class="all-cake all-food">
        <p><span>所有配件</span><span>3</span></p>
      </div>
      <van-divider />
    </van-popup>
</div>
</template>
<script>
import { Popup } from "vant";
export default {
  data() {
    return {
      show: false,
      cakeCategory: [
        {
          name: "拿破仑",
          path: "",
          icon: "icondangao"
        },
        {
          name: "鲜奶",
          path: "",
          icon: "iconiocn_fuzhi-"
        },
        {
          name: "慕斯",
          path: "",
          icon: "icondangao6"
        },
        {
          name: "芝士",
          path: "",
          icon: "icondangao5"
        },
        {
          name: "巧克力",
          path: "",
          icon: "icondangao4"
        },
        {
          name: "咖啡",
          path: "",
          icon: "iconcanyinicon-"
        },
        {
          name: "坚果",
          path: "",
          icon: "iconicon-test"
        },
        {
          name: "水果",
          path: "",
          icon: "iconiconcopy"
        },
        {
          name: "冰激凌",
          path: "",
          icon: "iconshouyezhuyetubiao09"
        }
      ]
    };
  },
  computed: {
    currentMenu() {
      if (
        {}.toString.call(this.$store.state.footer.currentMenu[0]) ==
        "[object Undefined]"
      ) {
        this.show = false;
        return "";
      }
      this.show =
        this.$store.state.footer.currentMenu[0].id == 0 ? true : false;
      return this.$store.state.footer.currentMenu[0];
    }
  },
  methods: {
    popClose() {
      console.log("ooo");
    }
  },
  mounted() {},
  watch: {
    currentMenu: {
      deep: true,
      handler(value) {
        this.show = value.id == 0 ? true : false;
      }
    }
  }
};
</script>
<style lang="less">
.choice {
  .van-popup--left {
    border-bottom-right-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
    .all-cake {
      padding-top: 12vh;
      > p {
        font-size: 0.14rem;
        color: #333;
        > span:nth-child(1) {
          margin-left: 0.2rem;
          margin-right: 0.05rem;
        }
        > span:nth-child(2) {
          background: yellow;
          padding: 0.04rem;
          border-radius: 50%;
        }
      }
    }
    .all-food {
      padding: 0.1rem 0rem;
    }
    .van-divider--hairline {
      margin: 0.1rem 0;
    }
    .cake-category {
      color: #333;
      margin-bottom: 0.05rem;
      ul {
        li {
          line-height: 0.4rem;
          span:nth-child(1) {
            margin-left: 0.3rem;
            margin-right: 0.15rem;
            i {
              font-size: 0.16rem;
            }
          }
          span:nth-child(2) {
            font-size: 0.14rem;
          }
          span:nth-child(3) {
            float: right;
            margin-right: 0.1rem;
            i {
              font-size: 0.16rem;
            }
          }
        }
      }
    }
  }
}
</style>
