import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Store from "../views/Store.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
