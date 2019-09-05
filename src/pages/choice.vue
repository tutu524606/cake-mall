<template>
<div class="choice">
    <van-popup
  v-model="show"
  position="left"
  @close="popClose"
  :style="{ width: '50%',height: '100%' }">精选
    </van-popup>
</div>
</template>
<script>
import { Popup } from "vant";
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    currentMenu() {
      if (
        {}.toString.call(this.$store.state.footer.currentMenu[0]) ==
        "[object Undefined]"
      ) {
        this.show = false;
        return "";
      }
      this.show =
        this.$store.state.footer.currentMenu[0].id == 0 ? true : false;
      return this.$store.state.footer.currentMenu[0];
    }
  },
  methods: {
    popClose() {
      console.log("ooo");
    }
  },
  mounted() {},
  watch: {
    currentMenu: {
      deep: true,
      handler(value) {
        this.show = value.id == 0 ? true : false;
      }
    }
  }
};
</script>
<style lang="less">
.choice {
  .van-popup--left {
    border-bottom-right-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
  }
}
</style>
