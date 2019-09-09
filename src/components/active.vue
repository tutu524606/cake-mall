<template>
    <section class="active-view">
        <van-popup
        v-model="$parent.cancelShow"
        position="top"
        @close="searchPopClose"
        >
           <div>
               <div v-for="(item,i) in menus" :key="i">
                   <p><i :class="'iconfont '+ item.icon"></i></p>
                   <p>{{item.name}}</p>
               </div>
           </div>
        </van-popup>
    </section>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "最新活动",
          icon: "icondangao1",
          path: ""
        },
        {
          name: "个人中心",
          icon: "icongerenzhongxinwoderenwubiaozhuntouxianxing",
          path: ""
        },
        {
          name: "关于我们",
          icon: "iconguanyuwomen",
          path: ""
        },
        {
          name: "配送地址",
          icon: "iconpeisongfanweichaxun-copy",
          path: ""
        }
      ]
    };
  },
  methods: {
    searchPopClose() {}
  }
};
</script>
<style lang="less">
.active-view {
  text-align: center;
  .van-overlay {
    top: 0.66rem;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .van-popup--top {
    top: 0.66rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      background-color: rgba(252, 252, 252, 1);
      border-top: 0.01rem solid #ccc;
      > div {
        width: 25vw;
        box-sizing: border-box;
        border-right: 0.01rem solid #ccc;
        padding-bottom: 0.1rem;
        padding-top: 0.1rem;
        p:nth-child(1) {
          line-height: 0.6rem;
          i {
            font-size: 0.4rem;
            color: #aaa;
          }
        }
        p:nth-child(2) {
          line-height: 0.2rem;
          color: #666;
          letter-spacing: 0.01rem;
        }
      }
      > div:last-child {
        border: none;
      }
    }
  }
}
</style>



