<template>
  <div class="main">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./header";
import Container from "./container";
import Footer from "./footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Container,
    Footer
  },
  watch: {
    $route: {
      deep: true,
      handler(value) {
        console.log(value, "111");
      }
    }
  }
};
</script>

