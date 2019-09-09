<template>
    <main :class="$route.path == '/shipAddr' ? 'main-ship' : 'main'">
        <router-view/>
    </main>
</template>
<script>
export default {
  mounted() {},
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
  height: calc(100vh - 1.1rem);
  // overflow-y: scroll;
  overflow-x: hidden;
}
.main-ship {
  margin-top: 0.66rem;
  height: calc(100vh - 0.66rem);
  // overflow-y: scroll;
  overflow-x: hidden;
}
.main::-webkit-scrollbar {
  display: none;
}
</style>
