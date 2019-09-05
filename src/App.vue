<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
// 引入重置样式和公用基础样式
@import "./assets/css/reset.css";
@import "./assets/css/base.less";
#app {
  // font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.16rem;
  // background-color: #fff;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.24rem;
  span {
    margin-left: 2%;
    color: #666;
  }
}
</style>
