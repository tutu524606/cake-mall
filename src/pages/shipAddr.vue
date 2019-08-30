<template>
  <section class="ship-address">
    <div class="select-city">
      <div class="select-city">
        <van-icon name="star" />
      </div>
      <p>请选择您所在的城市</p>
    </div>
    <div class="select-content">
      <van-cell v-for="(item,i) in list" :key="i" is-link @touchstart.stop.prevent="selectCity(item)">
        <template slot="title">
          <span class="custom-title">{{item.city}}</span>
          <span>{{item.py}}</span>
        </template>
      </van-cell>
    </div>
    <div class="city-more">
      <p>更多城市敬请期待</p>
      <img :src="morePic" alt />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          city: "上海市",
          py: "ShangHai"
        },
        {
          id: "2",
          city: "杭州市",
          py: "HangZhou"
        },
        {
          id: "3",
          city: "苏州市",
          py: "SuZhou"
        },
        {
          id: "4",
          city: "北京市",
          py: "BeiJing"
        }
      ],
      morePic: require("../../static/images/address_more.png")
    };
  },
  methods: {
    selectCity(item) {
      console.log(item);
      this.$router.push({
        name: "home",
        params: item
      });
    }
  },
  beforeDestroy() {
    console.log(123, this.$router);
  }
};
</script>

<style lang="less">
.ship-address {
  background-color: rgba(211, 225, 236, 1);
  height: calc(100% - 0.6rem);
  padding: 0.3rem;
  .select-city {
    text-align: center;
    .select-city {
      width: 1.05rem;
      height: 1.05rem;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 100%;
      i {
        font-size: 0.75rem;
        margin-top: 0.15rem;
        color: #c6c6c6;
      }
    }
    p {
      font-size: 0.14rem;
      color: #fff;
      line-height: 0.6rem;
      // height: 0.38rem;
    }
  }
  .select-content {
    // font-size: 0.22rem;
    .van-cell {
      font-size: 0.22rem;
      margin: 0.1rem auto;
      padding: 0px 0.1rem 0px 0.15rem;
      border-radius: 0.1rem;
      .van-cell__title {
        span:last-child {
          padding-left: 0.2rem;
          color: #c6c6c6;
          font-size: 0.18rem;
        }
      }
      .van-cell__right-icon {
        font-size: 0.24rem;
      }
    }
    .van-cell.on {
      background: -webkit-linear-gradient(top, #ffdb5d, #ffcd21);
    }
    .van-cell::after {
      border: none;
    }
  }
  .city-more {
    text-align: center;
    p {
      line-height: 0.6rem;
      color: #626262;
    }
  }
}
</style>