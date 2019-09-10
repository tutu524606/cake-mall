<template>
    <section class="search-view">
        <van-popup
        v-model="$parent.cancelShow"
        position="top"
        @close="searchPopClose"
        :close-on-click-overlay="false"
        >
            <div>
                <van-cell-group>
                    <van-field v-model="searchContent" :placeholder="placeholder" @blur.stop="blur" @focus.stop="getFocus"/>
                </van-cell-group>
                <p><span v-for="(item,i) in tags" :key="i">{{item}}</span></p>
            </div>
            <van-button type="primary" @touchstart.native.prevent.stop="search">搜索</van-button>
        </van-popup>
    </section>
    
</template>
<script>
import { Field, Button } from "vant";
export default {
  data() {
    return {
      searchContent: "",
      tags: ["拿破仑", "巧克力", "芝士", "鲜奶", "坚果", "小食"],
      placeholder: "请输入关键词"
    };
  },
  methods: {
    searchPopClose() {
      this.$parent.cancelShow = false;
    },
    getFocus() {
      this.placeholder = "";
    },
    blur() {
      this.placeholder = "请输入关键词";
    },
    search() {
      // this.$parent.$parent.$refs.container.$children[0].fiterGoods(
      //   undefined,
      //   this.searchContent
      // );
      Promise.resolve()
        .then(() => {
          if (!this.$parent.$parent.$refs.container.$children[0].fiterGoods)
            this.$router.push({
              name: "cake",
              params: {
                searchContent: this.searchContent
              }
            });
        })
        .then(() => {
          this.$parent.$parent.$refs.container.$children[0].fiterGoods(
            undefined,
            this.searchContent
          );
          this.$parent.cancelShow = false;
        });
    }
  }
};
</script>
<style lang="less">
.search-view {
  text-align: center;
  .van-overlay {
    top: 0.66rem;
    background-color: rgba(245, 245, 245, 1);
  }
  .van-popup--top {
    top: 0.67rem;
    > div {
      margin: 0rem 0.7rem;
      .van-field {
        font-size: 0.16rem;
        margin-top: 0.2rem;
        line-height: 0.4rem;
        padding: 0rem;
        .van-field__control {
          text-align: center;
          color: #333;
        }
        .van-field__control::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #555;
        }

        .van-field__control::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #555;
        }

        .van-field__control:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #555;
        }
      }
      > p {
        line-height: 0.3rem;
        font-size: 0.12rem;
        color: #666;
        span {
        }
        span::after {
          content: "、";
        }
        span:last-child::after {
          content: "";
        }
      }
    }
    .van-button--primary {
      width: calc(100% - 0.2rem);
      margin: 0 0.1rem;
      font-size: 0.2rem;
      color: #111;
      letter-spacing: 0.04rem;
      text-indent: 0.04rem;
      line-height: 0.5rem;
      background: yellow;
      border-color: yellow;
      margin-bottom: 0.2rem;
      height: auto;
    }
    .van-hairline--top-bottom::after {
      border: none;
    }
  }
}
</style>

