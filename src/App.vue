<template>
  <v-app>
    <router-view></router-view>

    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="5000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn dark text @click="$store.commit('updateSnackbar', {show: false})">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import { dbCakesRef } from "./firebase";

export default {
  name: "App",
  computed: {
    ...mapGetters(["snackbar"])
  },
  created() {
    this.$store.dispatch("setCakesRef", dbCakesRef);
  }
};
</script>
