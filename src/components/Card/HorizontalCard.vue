<template>
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
              <v-icon small>fa-minus</v-icon>
            </v-btn>
            {{ product.quantity }}
            <v-btn color="success" small text>
              <v-icon small>fa-plus</v-icon>
            </v-btn>
          </strong>
          <br />
          {{ product.price * product.quantity | currency }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="error" max-width="100%" class="ml-4" small outlined @click="updateCart(i)">
            <v-icon left small>fa-minus</v-icon>Remove from cart
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "HorizontalCard",
  props: {
    product: Object,
    updateCart: Function,
    reduceQty: Function,
    i: Number
  }
};
</script>
