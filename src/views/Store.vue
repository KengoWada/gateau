<template>
  <div>
    <vue-headful title="Store | Gâteau" />
    <TopNav />
    <v-container>
      <v-col sm="12" offset-lg="3" lg="7">
        <ProductDisplay />
      </v-col>
    </v-container>
    <homeFooter />
  </div>
</template>

<script>
import Footer from "../components/Navs/Footer";
import TopNav from "../components/Navs/TopNav";
import ProductDisplay from "../components/Store/ProductDisplay";

export default {
  name: "Store",
  components: {
    homeFooter: Footer,
    TopNav,
    ProductDisplay
  }
};
</script>
