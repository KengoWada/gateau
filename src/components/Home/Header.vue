<template>
  <v-sheet :height="sheetHeight">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <h1 class="text-center display-1 hidden-sm-and-up">Welcome to Gâteau</h1>
        <h1 class="text-center display-4 hidden-xs-only">Welcome to Gâteau</h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Header",
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
        case "md":
        case "lg":
          return "300px";
        case "xl":
          return "350px";
      }
      return "300px";
    }
  }
};
</script>
