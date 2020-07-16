import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";

import admin from "./modules/admin";
import cakes from "./modules/cakes";
import cart from "./modules/cart";
import misc from "./modules/misc";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    admin,
    cakes,
    cart,
    misc,
  },
});
