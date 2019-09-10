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
                    <div><span>{{item.goodName}}</span><span v-show="item.mark">{{item.mark}}</span></div>
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
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: [],
      goodsList: [
        {
          goodName: "蓝莓轻乳拿破仑",
          mark: "金牌",
          type: "1",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/1.jpg")
        },
        {
          goodName: "黑森林拿破仑",
          mark: "",
          type: "1",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/2.jpg")
        },
        {
          goodName: "经典香草拿破仑",
          mark: "",
          type: "1",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/3.jpg")
        },
        {
          goodName: "黛西的履行",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/4.jpg")
        },
        {
          goodName: "蔓越莓红丝绒",
          mark: "人气",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/5.jpg")
        },
        {
          goodName: "鲜莓印雪",
          mark: "人气",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/6.jpg")
        },
        {
          goodName: "爱丽丝花境",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/7.jpg")
        },
        {
          goodName: "芒果.Mangue",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/8.jpg")
        },
        {
          goodName: "法香奶油可丽",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/9.jpg")
        },
        {
          goodName: "卡法香缇",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/10.jpg")
        },
        {
          goodName: "榴莲雪塔",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/11.jpg")
        },
        {
          goodName: "天使巧克力",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/12.jpg")
        },
        {
          goodName: "百利派对",
          mark: "",
          type: "2",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/13.jpg")
        },
        {
          goodName: "安逸兔",
          mark: "人气",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/14.jpg")
        },

        {
          goodName: "尼诺",
          mark: "人气",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/15.jpg")
        },
        {
          goodName: "香溢新芝",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/16.jpg")
        },
        {
          goodName: "Mojito 柠.漾",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/17.jpg")
        },
        {
          goodName: "君度可可",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/18.jpg")
        },
        {
          goodName: "沙布蕾芭菲",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/19.jpg")
        },
        {
          goodName: "巧克力黑兰",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/20.jpg")
        },
        {
          goodName: "摩登茶道",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/21.jpg")
        },
        {
          goodName: "提拉米苏",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/22.jpg")
        },
        {
          goodName: "阳光心芒",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/23.jpg")
        },
        {
          goodName: "约瑟芬玫瑰",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/24.jpg")
        },
        {
          goodName: "百香果慕斯",
          mark: "",
          type: "3",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/25.jpg")
        },
        {
          goodName: "花样.年华",
          mark: "新品",
          type: "4",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/26.jpg")
        },
        {
          goodName: "浓巧·迷情冰淇淋蛋糕",
          mark: "新品",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/27.jpg")
        },
        {
          goodName: "魔鬼巧克力",
          mark: "新品",
          type: "5",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/28.jpg")
        },
        {
          goodName: "榛果摩卡布拉吉",
          mark: "新品",
          type: "6",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/29.jpg")
        },
        {
          goodName: "朗姆醇栗",
          mark: "新品",
          type: "7",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/30.jpg")
        },
        {
          goodName: "蜜桃无语",
          mark: "新品",
          type: "8",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/31.jpg")
        },
        {
          goodName: "海岸蓝调",
          mark: "新品",
          type: "9",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/32.jpg")
        },
        {
          goodName: "卢克和咚咚冰淇淋蛋糕",
          mark: "",
          type: "9",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/33.jpg")
        },
        {
          goodName: "浓巧·迷情冰淇淋蛋糕",
          mark: "",
          type: "9",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/32.jpg")
        },
        {
          goodName: "恋恋·草莓冰淇淋蛋糕",
          mark: "",
          type: "9",
          isCart: false,
          price: "298.00",
          englishDes: "Croissant français",
          imgUrl: require("@/assets/images/goods/cake/33.jpg")
        }
      ],
      fitting: [
        {
          goodName: "数字蜡烛",
          mark: "",
          type: "10",
          isCart: false,
          price: "298.00",
          englishDes: "",
          imgUrl: require("@/assets/images/fitting/1.jpg")
        },
        {
          goodName: "生日牌",
          mark: "",
          type: "10",
          isCart: false,
          price: "298.00",
          englishDes: "",
          imgUrl: require("@/assets/images/fitting/2.jpg")
        },
        {
          goodName: "缤纷生日礼包",
          mark: "新品",
          type: "10",
          isCart: false,
          price: "298.00",
          englishDes: "Des paquets de cadeaux",
          imgUrl: require("@/assets/images/fitting/3.jpg")
        }
      ],
      filterGoodsList: [],
      isLoading: false,
      finished: false,
      loading: false,
      toast: ""
    };
  },
  components: {},
  computed: {
    choiceIndex() {
      return this.$store.state.choice.choiceIndex;
    }
  },
  mounted() {
    // this.goodsList = [...this.goodsList, ...this.goodsList];

    Promise.resolve()
      .then(() => {
        this.toast = Toast.loading({
          mask: true,
          message: "加载中...",
          duration: 0
        });
        this.$route.params.searchContent
          ? this.fiterGoods(undefined, this.$route.params.searchContent)
          : this.fiterGoods(this.choiceIndex);
      })
      .then(() => {
        setTimeout(() => {
          this.toast.clear();
        }, 500);
      });
  },
  methods: {
    ...mapActions(["changeMenuItem", "changeChoice"]),
    onRefresh() {
      console.log(123);
    },
    onLoad() {
      setTimeout(() => {
        this.list = this.list.concat(
          this.filterGoodsList.slice(this.list.length, this.list.length + 6)
        );
        // 加载状态结束
        this.loading = false;
        // this.toast.clear();
        // Toast.clear();
        // 数据全部加载完成
        if (this.list.length >= this.filterGoodsList.length) {
          this.finished = true;
        }
      }, 400);
    },
    getGoodsData() {
      this.$http({
        url: "/cakeMarket/homeGoodsList",
        method: "get",
        success: response => {
          this.goodsList = response.data.data;
        }
      });
    },
    fiterGoods(index, flag) {
      this.filterGoodsList =
        index == ""
          ? [...this[flag === true ? "fitting" : "goodsList"]]
          : this.goodsList.filter(v => {
              return typeof flag != "undefined"
                ? v.goodName.includes(flag)
                : v.type == index;
            });
      this.list = [].concat(this.filterGoodsList.slice(0, 6));
    }
  },
  beforeDestroy() {
    this.changeChoice("");
  },
  watch: {
    choiceIndex(index) {
      Promise.resolve()
        .then(() => {
          this.toast = Toast.loading({
            mask: true,
            message: "加载中...",
            duration: 0
          });
          this.list = [];
          this.fiterGoods(index);
          this.finished = false;
        })
        .then(() => {
          setTimeout(() => {
            this.toast.clear();
          }, 400);
        });
    }
  }
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
        justify-content: flex-start;
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