<template>
  <div>
    <v-app-bar dark>
      <v-toolbar-title>Gâteau</v-toolbar-title>

      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn text @click.stop="drawer = !drawer">
          <v-icon small>fas fa-bars</v-icon>
        </v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in navItems" :key="item.name" :to="item.link" text>
          <v-icon small left>fa-{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn v-if="getUser !== null" @click="signOut">
          <v-icon small left>fa-sign-out-alt</v-icon>Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="item in navItems" :key="item.name" :to="item.link" link>
          <v-list-item-icon>
            <v-icon small left>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="getUser !== null" @click="signOut">
          <v-list-item-icon>
            <v-icon small left>fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "topNav",
  computed: {
    ...mapGetters(["getUser"]),
    navItems() {
      if (this.getUser) {
        return this.authItems;
      }
      return this.items;
    }
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Store", link: "store", icon: "shopping-basket" },
        { title: "Cart", link: "cart", icon: "shopping-cart" }
      ],
      authItems: [
        { title: "Orders", link: "/admin/orders", icon: "shopping-basket" },
        { title: "Store", link: "/admin/store", icon: "store" }
      ]
    };
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("signOut");

      this.$router.push("/admin");
    }
  }
};
</script>
