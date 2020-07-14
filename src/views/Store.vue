<template>
  <div>
    <vue-headful title="Store | Gâteau" />

    <TopNav />Store
    <homeFooter />
  </div>
</template>

<script>
import Footer from "../components/Navs/Footer";
import TopNav from "../components/Navs/TopNav";

export default {
  name: "Store",
  components: {
    homeFooter: Footer,
    TopNav
  }
};
</script>
