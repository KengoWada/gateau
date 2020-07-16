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
  async makeOrder({ commit }, order) {
    try {
      await dbOrdersRef.add(order);
      commit("updateCart", []);
    } catch (e) {
      commit("updateCart", []);
    }
  },
};

const mutations = {
  updateCart(state, cart) {
    state.cart = cart;
  },
};

export default { state, getters, actions, mutations };
