<template>
  <div class="primary-main">
    <Header></Header>
    <Container ref="container"></Container>
    <Footer v-if="$route.path != '/shipAddr'" ref="footer"></Footer>
    <Choice></Choice>
  </div>
</template>
<script>
import Header from "./header";
import Container from "./container";
import Footer from "./footer";
import Choice from "../pages/choice";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    if (window.sessionStorage.getItem("currentCity"))
      this.changeCity(JSON.parse(window.sessionStorage.getItem("currentCity")));
    this.$router.push({
      path: window.sessionStorage.getItem("currentCity")
        ? this.$route.path == "/" ? "/home" : this.$route.path
        : "/shipAddr"
    });
  },
  components: {
    Header,
    Container,
    Footer,
    Choice
  },
  methods: {
    ...mapActions(["changeCity"])
  },
  watch: {
    $route: {
      deep: true,
      handler(value) {
        // console.log(value, "111");
      }
    }
  }
};
</script>

