<template>
  <div>
    <vue-headful title="Admin | Gâteau" />
    <TopNav />
    <router-view></router-view>
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
