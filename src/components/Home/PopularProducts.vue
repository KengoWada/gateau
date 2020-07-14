<template>
  <v-container mb-12>
    <!-- Title -->
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>
          Popular Products
          <v-btn to="store" color="success" text small>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <!-- Card -->
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col sm="6" md="4" v-for="cake in cakes.slice(0, 3)" :key="cake.id">
            <VerticalCard :product="cake" :addToCart="addToCart" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import VerticalCard from "../Card/VerticalCard";

export default {
  name: "PopularProducts",
  components: {
    VerticalCard
  },
  computed: {
    ...mapGetters(["cakes", "getCart"])
  },
  methods: {
    async addToCart(product) {
      this.$store.commit("updateSnackbar", { show: true });

      const cart = this.getCart;
      const cakedExists = await cart.find(cake => cake.id == product.id);
      if (cakedExists) {
        cakedExists.quantity++;
        this.$store.commit("updateCart", cart);
        return;
      }

      product.quantity = 1;
      cart.push(product);
      this.$store.commit("updateCart", cart);
    }
  }
};
</script>
