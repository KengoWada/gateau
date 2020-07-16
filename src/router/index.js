import Vue from "vue";
import VueRouter from "vue-router";

import Admin from "../views/Admin.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import Orders from "../components/Admin/Orders.vue";
import AdminStore from "../components/Admin/Store.vue";
import AdminHome from "../components/Admin/Home.vue";

import store from "../store";

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
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "",
        name: "AdminHome",
        component: AdminHome,
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
        beforeEnter(to, from, next) {
          if (!store.getters.getUser) {
            next("/admin");
          }
          next();
        },
      },
      {
        path: "store",
        name: "AdminStore",
        component: AdminStore,
        beforeEnter(to, from, next) {
          if (!store.getters.getUser) {
            next("/admin");
          }
          next();
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
