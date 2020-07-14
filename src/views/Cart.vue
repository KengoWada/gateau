<template>
  <div>
    <vue-headful title="Cart | Gâteau" />

    <TopNav />Cart
    <homeFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Footer from "../components/Navs/Footer";
import TopNav from "../components/Navs/TopNav";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["getCart"])
  },
  components: {
    homeFooter: Footer,
    TopNav
  }
};
</script>
