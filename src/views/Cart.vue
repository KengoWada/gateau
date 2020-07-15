<template>
  <div>
    <vue-headful title="Cart | Gâteau" />

    <TopNav />
    <v-container>
      <v-row>
        <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
          <ProductList />
        </v-col>
        <v-col sm="4" md="3" order="first" order-sm="last">
          <CheckoutBox />
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />
    <br />
    <homeFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Footer from "../components/Navs/Footer";
import TopNav from "../components/Navs/TopNav";
import CheckoutBox from "../components/Cart/CheckoutBox";
import ProductList from "../components/Cart/ProuctList";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["getCart"])
  },
  components: {
    homeFooter: Footer,
    TopNav,
    CheckoutBox,
    ProductList
  }
};
</script>
