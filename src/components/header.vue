<template>
  <header class="header">
    <van-row>
      <van-col span="8">
        <van-icon name="location-o" />
        <span>配送至</span>
      </van-col>
      <van-col span="8" class="logo">
        <img :src="logoData" alt />
      </van-col>
      <van-col span="8" class="header-right">
        <span>
          <van-icon name="search" />
        </span>
        <span>
          <van-icon name="coupon-o" />
        </span>
      </van-col>
    </van-row>
  </header>
</template>
<script>
export default {
  data() {
    return {
      logoData: ""
    };
  },
  mounted() {
    if (!window.sessionStorage.getItem("logoData")) this.getLogoData();
    else this.logoData = JSON.parse(window.sessionStorage.getItem("logoData"));
  },
  methods: {
    getLogoData() {
      this.$http({
        url: "/cakeMarket/logo",
        method: "get",
        success: response => {
          this.logoData = response.data.data.imgData;
          window.sessionStorage.setItem(
            "logoData",
            JSON.stringify(this.logoData)
          );
        }
      });
    }
  }
};
</script>

<style lang="less">
.header {
  height: 0.66rem;
  line-height: 0.66rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
  .van-row {
    .van-col:nth-child(1) {
      color: #c6c6c6;
      //   display: table;
      i,
      span {
        vertical-align: middle;
        display: table-cell;
        font-size: 0.17rem;
      }
      i {
        text-align: right;
        font-weight: bolder;
        padding-left: 0.15rem;
      }
      span {
        text-align: left;
        text-indent: 0.02rem;
      }
    }
    .logo {
      img {
        height: 0.2rem;
        vertical-align: middle;
      }
    }
    .header-right {
      text-align: right;
      padding-right: 0.05rem;
      span {
        line-height: 0.75rem;
        font-size: 0.2rem;
        color: #c6c6c6;
      }
      span:first-child {
        padding-left: 0.1rem;
        i {
          border-right: 0.01rem solid #c6c6c6;
          padding-right: 0.1rem;
        }
      }
      span:last-child {
        padding: 0px 0.1rem;
      }
    }
  }
}
</style>
