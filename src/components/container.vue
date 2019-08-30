<template>
    <main class="main">
        <router-view/>
    </main>
</template>
<script>
export default {
  mounted() {
    // console.log(this.$route);
  },
  watch: {
    "$route.path": {
      deep: true,
      handler(value) {}
    }
  }
};
</script>
<style lang="less">
.main {
  margin-top: 0.66rem;
  height: calc(100vh - 0.66rem);
}
</style>
