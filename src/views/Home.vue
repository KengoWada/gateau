<template>
  <div>
    <vue-headful title="Home | Gâteau" />
    <TopNav />
    <homeHeader />
    <PopularProducts />
    <homeFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Footer from "../components/Navs/Footer";
import Header from "../components/Home/Header";
import TopNav from "../components/Navs/TopNav";
import PopularProducts from "../components/Home/PopularProducts";

export default {
  name: "Home",
  components: {
    homeFooter: Footer,
    homeHeader: Header,
    PopularProducts,
    TopNav
  },
  computed: {
    ...mapGetters(["cakes"])
  }
};
</script>
