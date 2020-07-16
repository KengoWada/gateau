<template>
  <v-container>
    <v-col align="center" justify="center" sm="12" offset-lg="2" lg="7">
      <Login v-if="getUser === null" />
      <h1 class="dislay-1" v-else>You are logged in as {{ getUser }}</h1>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import { dbOrdersRef } from "@/firebase";
import Login from "../Forms/Login";

export default {
  name: "AdminHome",
  components: {
    Login
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  created() {
    this.$store.dispatch("setCakesRef", dbOrdersRef);
  }
};
</script>
