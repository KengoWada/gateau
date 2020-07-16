<template>
  <v-row class="mb-12">
    <v-col sm="8" md="9" lg="6" offset-lg="2">
      <div>
        <h3 class="display-2">de Gâteaux</h3>
        <v-row>
          <v-col sm="6" md="5" lg="4" v-for="cake in getCakes" :key="cake.id">
            <CakeCard :cake="cake" />
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col sm="4" md="3" order="first" order-sm="last">
      <AddCake />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import CakeCard from "../Card/Cake";
import AddCake from "../Card/AddCake";

export default {
  name: "AdminStore",
  components: {
    AddCake,
    CakeCard
  },
  computed: {
    ...mapGetters(["getCakes"])
  }
};
</script>
