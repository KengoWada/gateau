<template>
  <div>
    <v-card outlined>
      <v-card-title>Payment Details</v-card-title>
      <v-card-text>
        <v-text-field
          label="Name"
          :error="nameError.error"
          :error-messages="nameError.message"
          outlined
          v-model="name"
        ></v-text-field>

        <v-text-field
          label="Phone Number"
          :error-messages="numberError.message"
          :error="numberError.error"
          type="text"
          prefix="+256"
          outlined
          v-model="number"
        ></v-text-field>
        <p>
          Total:
          <strong>{{ total | currency }}</strong>
        </p>
        <v-btn :disabled="total === 0" color="success" @click="goToCheckout">Checkout</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CheckoutBox",
  data() {
    return {
      name: "",
      number: "",
      nameError: { error: false, message: [] },
      numberError: { error: false, message: [] }
    };
  },
  computed: {
    total() {
      const cart = this.getCart();
      if (cart.length === 0) {
        return 0;
      }

      let total = 0;

      for (let i of cart) {
        total += i.price * i.quantity;
      }
      return total;
    }
  },
  methods: {
    ...mapGetters(["getCart"]),
    goToCheckout() {
      this.nameError = { error: false, message: [] };
      this.numberError = { error: false, message: [] };

      let errors = 0;

      if (!this.total) {
        return;
      }

      if (
        !this.name ||
        !this.name.replace(/\s/g, "").length ||
        this.name.length < 3
      ) {
        errors++;
        this.nameError.error = true;
        this.nameError.message =
          "Invalid name. Name must be at least 3 characters";
      }

      const regex = new RegExp(/^\d+$/);
      if (
        !this.number ||
        this.number.length !== 9 ||
        !regex.test(this.number)
      ) {
        errors++;
        this.numberError.error = true;
        this.numberError.message = "Invalid phone number.";
      }

      if (errors > 0) {
        return;
      }

      const order = {
        name: this.name,
        phoneNumber: "+256" + this.number,
        total: this.total,
        items: this.getCart()
      };

      console.log(order);

      this.$store.commit("updateCart", []);
      this.$router.push("checkout");
    }
  }
};
</script>
