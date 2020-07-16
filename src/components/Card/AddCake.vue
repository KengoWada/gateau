<template>
  <div>
    <v-card outlined>
      <v-card-title>Add New Cake</v-card-title>
      <v-card-text>
        <v-text-field
          label="Name"
          :error="nameError.error"
          :error-messages="nameError.message"
          outlined
          v-model="name"
        ></v-text-field>

        <v-text-field
          label="Price"
          :error="price.error"
          :error-messages="priceError.message"
          outlined
          v-model="price"
        ></v-text-field>

        <v-text-field
          label="Image URL"
          :error="imageError.error"
          :error-messages="imageError.message"
          placeholder="https://source.unsplash.com/<imageID>"
          outlined
          v-model="image"
        ></v-text-field>

        <v-btn width="100%" color="success" outlined @click="addCake">Add</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AddCake",
  data() {
    return {
      name: "",
      price: "",
      image: "",
      nameError: { error: false, message: [] },
      priceError: { error: false, message: [] },
      imageError: { error: false, message: [] }
    };
  },
  methods: {
    addCake() {
      let errors = 0;

      if (!this.name || !this.name.replace(/\s/g, "").length) {
        this.nameError.error = true;
        this.nameError.message = "Invalid name";
        errors++;
      }

      const regex = new RegExp(/^\d+$/);
      if (!this.price || !regex.test(this.price)) {
        this.priceError.error = true;
        this.priceError.message = "Invalid price";
        errors++;
      }

      if (!this.image || !this.image.replace(/\s/g, "").length) {
        this.imageError.error = true;
        this.imageError.message = "Invalid link";
        errors++;
      }

      const URLRegex = new RegExp("^https://source.unsplash.com/[a-zA-z0-9]");
      if (!URLRegex.test(this.image)) {
        this.imageError.error = true;
        this.imageError.message = "Use a valid unsplash link.";
        errors++;
      }

      if (errors > 0) {
        return;
      }

      const cake = {
        name: this.name,
        price: this.price,
        image: this.image.replace("/photo", "")
      };

      this.$store.dispatch("addCake", cake);
      (this.name = ""),
        (this.price = ""),
        (this.image = ""),
        (this.nameError = { error: false, message: [] }),
        (this.priceError = { error: false, message: [] }),
        (this.imageError = { error: false, message: [] });
    }
  }
};
</script>
