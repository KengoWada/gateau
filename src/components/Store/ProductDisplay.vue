<template>
  <div>
    <h3 class="display-2">Liste de Gâteaux</h3>
    <v-row>
      <v-col sm="6" md="4" v-for="cake in cakes" :key="cake.id">
        <VerticalCard :product="cake" :addToCart="addToCart" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import VerticalCard from "../Card/VerticalCard";

export default {
  name: "ProductDisplay",
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
