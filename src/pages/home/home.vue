<template>
    <section class="home">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
             v-model="loading"
             :offset="5"
             :finished="finished"
             :immediate-check='false'
             finished-text="没有更多了"
             @load="onLoad"
            >
            <figure class="good-list" v-for="(item,i) in list" :key="i">
    　　　　　　<van-image
                lazy-load
                :src="item.imgUrl"
              />
　　　　　　    <figcaption>
                <van-row>
                <van-col span="18">
                    <div><span>{{item.goodName}}</span><span>{{item.mark}}</span></div>
                    <div>{{item.englishDes}}</div>
                </van-col>
                <van-col span="6"><van-icon name="cart-o" /></van-col>
                </van-row>
                <div class="price"><span>￥</span><span>{{item.price}}</span></div>
              </figcaption>
  　　      </figure>
        </van-list>
  </van-pull-refresh>
    </section>
</template>
<script>
import { Row, Col, Image, Toast } from "vant";
import { PullRefresh } from "vant";
export default {
  data() {
    return {
      list: [],
      goodsList: [
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/1.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/2.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/3.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/4.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/5.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/6.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/7.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/8.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/9.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/10.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/11.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/12.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/13.jpg")
        },
        {
          goodName: "雅月·清境",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/14.jpg")
        }
      ],
      isLoading: false,
      finished: false,
      loading: false,
      toast: ""
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.goodsList = [...this.goodsList, ...this.goodsList];
    this.list = this.list.concat(this.goodsList.slice(0, 6));
    Promise.resolve()
      .then(() => {
        this.toast = Toast.loading({
          mask: true,
          message: "加载中...",
          duration: 0
        });
      })
      .then(() => {
        setTimeout(() => {
          this.toast.clear();
        }, 1000);
      });
  },
  methods: {
    onRefresh() {
      console.log(123);
    },
    onLoad() {
      setTimeout(() => {
        this.list = this.list.concat(
          this.goodsList.slice(this.list.length, this.list.length + 6)
        );
        // 加载状态结束
        this.loading = false;
        // this.toast.clear();
        // Toast.clear();
        // 数据全部加载完成
        if (this.list.length >= this.goodsList.length) {
          this.finished = true;
        }
      }, 500);
    },
    getGoodsData() {
      this.$http({
        url: "/cakeMarket/homeGoodsList",
        method: "get",
        success: response => {
          this.goodsList = response.data.data;
        }
      });
    }
  },
  beforeDestroy() {},
  watch: {}
};
</script>

<style lang="less">
.home {
  height: auto;
  padding: 0.15rem 0.1rem 0.15rem 0.1rem;
  > div {
    .van-pull-refresh__track {
      .van-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        .good-list {
          width: calc(50% - 0.1rem);
          padding: 0.05rem;
          .van-image {
            width: 100%;
          }
          .van-col--18 {
            text-align: left;
            font-size: 0.12rem;
            > div:nth-child(1) {
              span:nth-child(1) {
                line-height: 0.3rem;
                /* font-size: 0.14rem; */
                margin-right: 0.05rem;
                font-weight: bolder;
              }
              span:nth-child(2) {
                background: yellow;
                padding: 0rem 0.05rem;
              }
            }
          }
          .van-col--6 {
            i {
              background: yellow;
              border-radius: 100%;
              padding: 0.08rem;
              color: #333;
              margin-top: 0.06rem;
              margin-right: 0.05rem;
            }
          }
          .price {
            text-align: left;
            font-size: 0.12rem;
            line-height: 0.3rem;
            span:nth-child(1) {
              margin-left: -0.02rem;
              margin-right: 0.02rem;
            }
          }
        }
        .van-list__finished-text {
          line-height: 0.3rem;
          font-size: 0.16rem !important;
          text-align: center;
          padding-top: 0.05rem;
          width: 100%;
        }

        .van-list__loading {
          width: 100%;
          line-height: 0.3rem;
          .van-loading--circular {
            text-align: center;
            .van-loading__spinner--circular {
              //   margin-right: 0.05rem;
            }
            .van-loading__text {
              font-size: 0.16rem !important;

              padding-top: 0.05rem;
            }
          }
        }
      }
    }
  }
}
</style>