<template>
  <div>
    <v-row>
      <v-col sm="12" offset-lg="3" lg="7">
        <h1 class="display-2">Orders ({{ getOrders.length }})</h1>
        <br />
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Product ID</th>
              <th class="text-left">Item</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Total</th>
            </tr>
          </thead>
          <tbody v-for="order in getOrders" :key="order.id">
            <tr>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-left">{{ order.id }}</td>
              <td class="text-center">
                <v-btn color="error" outlined @click="done(order.id)">Done</v-btn>
              </td>
            </tr>
            <tr v-for="(cake) in order.items" :key="cake.itemId">
              <td class="text-left">{{ cake.itemId }}</td>
              <td class="text-left">{{ cake.name }}</td>
              <td class="text-left">{{ cake.quantity }}</td>
              <td class="text-left">{{ cake.price * cake.quantity | currency }}</td>
            </tr>
            <tr>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-left">{{ getTotal(order.items) | currency }}</td>
            </tr>
            <v-divider></v-divider>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Orders",
  computed: {
    ...mapGetters(["getOrders"])
  },
  methods: {
    getTotal(items) {
      let total = 0;
      for (let i of items) {
        total += i.price * i.quantity;
      }
      return total;
    },
    done(orderId) {
      this.$store.dispatch("removeOrder", orderId);
    }
  }
};
</script>
