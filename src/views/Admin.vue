<template>
  <div>
    <vue-headful title="Admin | Gâteau" />
    <TopNav />
    <v-container>
      <router-view></router-view>
    </v-container>
    <adminFooter />
  </div>
</template>

<script>
import TopNav from "../components/Navs/TopNav";
import Footer from "../components/Navs/Footer";

export default {
  name: "Admin",
  components: {
    TopNav,
    adminFooter: Footer
  }
};
</script>
