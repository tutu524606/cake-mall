<template>
    <section class="ship-address">
        <div class="select-city">
            <div class="select-city">
                <van-icon name="star" />
            </div>
            <p>请选择您所在的城市</p>
        </div>
        <div class="select-content">
            <van-cell-group>
                <van-cell title="item.city" is-link v-for="(item,i) in list" :key="i" />
            </van-cell-group>
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
      ]
    };
  }
};
</script>

<style lang="less">
.ship-address {
  background-color: rgba(211, 225, 236);
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
      margin-top: 0.2rem;
    }
  }
}
</style>