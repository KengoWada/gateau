<template>
  <v-footer class="pa-4" dark absolute>
    <v-row justify="center">
      &copy; {{ new Date().getFullYear() }}
      <strong>
        <pre> Gâteau</pre>
      </strong>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
