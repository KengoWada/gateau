import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Store from "../views/Store.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
