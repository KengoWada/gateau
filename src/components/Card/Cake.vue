<template>
  <v-card outlined dark>
    <v-img :src="cake.image" height="200px" />
    <v-card-title>{{ cake.name }}</v-card-title>
    <v-card-subtitle>{{ cake.price | currency }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="error" outlined @click="removeCake(cake.id)">
        <v-icon small left>fa-minus</v-icon>Remove
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CakeCard",
  props: {
    cake: Object
  },
  methods: {
    removeCake(cakeId) {
      this.$store.dispatch("removeCake", cakeId);
    }
  }
};
</script>
