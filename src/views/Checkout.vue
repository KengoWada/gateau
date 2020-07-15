<template>
  <div>
    <vue-headful title="Checkout | Gâteau" />

    <TopNav />

    <br />
    <br />
    <br />
    <v-container>
      <v-row align="center" justify="center">
        <h1 class="text-center display-1 hidden-sm-and-up">Thank you for ordering.</h1>
        <h1 class="text-center display-4 hidden-xs-only">Thank you for ordering.</h1>
      </v-row>
      <v-row align="center" justify="center">
        <h1 class="text-center display-4 hidden-sm-and-up">Your order will be shipped soon</h1>
        <h1 class="text-center display-5 hidden-xs-only">Your order will be shipped soon</h1>
      </v-row>
    </v-container>

    <homeFooter />
  </div>
</template>

<script>
import Footer from "../components/Navs/Footer";
import TopNav from "../components/Navs/TopNav";

export default {
  name: "Checkout",
  components: {
    homeFooter: Footer,
    TopNav
  }
};
</script>
