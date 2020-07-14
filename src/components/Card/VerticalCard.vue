<template>
  <v-card outlined dark>
    <v-img :src="product.image" height="200px" />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.price | currency }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined @click="addToCart(product)">
        <v-icon small left>fa-plus</v-icon>Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "VerticalProduct",
  props: {
    product: Object,
    addToCart: Function
  }
};
</script>