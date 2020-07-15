<template>
  <div>
    <h2 class="display-3" v-if="getCart.length === 0">No Items in Cart</h2>
    <v-row v-else v-for="(product, i) in getCart" :key="product.id">
      <v-card outlined min-width="100%" class="mb-5 pa-4">
        <div class="d-flex">
          <div>
            <v-img :src="product.image" height="130px" width="130px" />
          </div>
          <div class="d-flex flex-column justify-center">
            <v-card-title class="pt-0">{{ product.name }}</v-card-title>
            <v-card-subtitle>
              <strong>
                Quantity:
                <v-btn color="success" small text @click="reduceQty(i)">
                  <v-icon size="12">fa-minus</v-icon>
                </v-btn>
                {{ product.quantity }}
                <v-btn color="success" small text @click="addQty(i)">
                  <v-icon size="12">fa-plus</v-icon>
                </v-btn>
              </strong>
              <br />
              {{ product.price * product.quantity | currency }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="error"
                max-width="100%"
                class="ml-4"
                small
                outlined
                @click="removeProduct(i)"
              >
                <v-icon left small>fa-minus</v-icon>Remove from cart
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["getCart"])
  },
  data() {
    return {
      cart: this.getCart
    };
  },
  methods: {
    removeProduct(index) {
      const cart = this.getCart;
      cart.splice(index, 1);
      this.$store.commit("updateCart", cart);
    },
    addQty(index) {
      const cart = this.getCart;

      const item = cart[index];
      item.quantity++;

      cart.splice(index, 1);
      this.$store.commit("updateCart", cart);

      cart.splice(index, 0, item);
      this.$store.commit("updateCart", cart);
    },
    reduceQty(index) {
      const cart = this.getCart;
      if (cart[index].quantity === 1) {
        cart.splice(index, 1);
        this.$store.commit("updateCart", cart);
        return;
      }

      const item = cart[index];
      item.quantity--;

      cart.splice(index, 1);
      this.$store.commit("updateCart", cart);

      cart.splice(index, 0, item);
      this.$store.commit("updateCart", cart);
    }
  }
};
</script>
