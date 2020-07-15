import { dbOrdersRef } from "../../firebase";

const state = {
  cart: [],
};

const getters = {
  getCart(state) {
    return state.cart;
  },
};

const actions = {
  makeOrder({ commit }, order) {
    return dbOrdersRef
      .add(order)
      .then(() => {
        commit("updateCart", []);
      })
      .catch(() => {
        commit("updateCart", []);
      });
  },
};

const mutations = {
  updateCart(state, cart) {
    state.cart = cart;
  },
};

export default { state, getters, actions, mutations };
