import { firestoreAction } from "vuexfire";

import { firebaseAuth, dbOrdersRef } from "../../firebase";

const state = {
  user: null,
  orders: [],
};

const getters = {
  getUser(state) {
    return state.user;
  },
  getOrders(state) {
    return state.orders;
  },
};

const actions = {
  setOrdersRef: firestoreAction((context) => {
    return context.bindFirestoreRef("orders", dbOrdersRef);
  }),
  async signIn({ commit }, user) {
    try {
      const userData = await firebaseAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      commit("userStatus", userData.user);
      return { isValid: true };
    } catch (error) {
      commit("userStatus", null);
      return { isValid: false };
    }
  },
  async signOut({ commit }) {
    try {
      await firebaseAuth.signOut();
      commit("userStatus", null);
    } catch (error) {
      commit("userStatus", null);
    }
  },
  async removeOrder(commit, id) {
    try {
      await dbOrdersRef.doc(id).delete();
    } catch (error) {
      return;
    }
  },
};

const mutations = {
  userStatus(state, user) {
    user !== null ? (state.user = user.email) : (state.user = null);
  },
};

export default { state, getters, actions, mutations };
