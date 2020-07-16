<template>
  <v-card :width="width" outlined>
    <v-card-title class="justify-center display-1">Sign In</v-card-title>
    <v-card-text>
      <p class="red--text" left>{{ error }}</p>
      <v-text-field label="Email" outlined v-model="email"></v-text-field>
      <v-text-field label="Password" type="password" outlined v-model="password"></v-text-field>
      <v-btn color="success" @click="signIn" outlined>Sign In</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          return "100%";
        case "md":
        case "lg":
        case "xl":
          return "65%";
      }
      return "65%";
    }
  },
  methods: {
    async signIn() {
      this.error = "";
      if (!this.email.length || !this.password.length) {
        this.error = "Invalid credentials";
        return;
      }

      const res = await this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password
      });
      if (!res.isValid) {
        this.error = "Invalid credentials";
        return;
      }

      this.error = "";
      this.email = "";
      this.password = "";
      this.$router.push("/admin/orders");
    }
  }
};
</script>
