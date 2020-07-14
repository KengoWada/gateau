import { firestoreAction } from "vuexfire";

import { dbCakesRef } from "../../firebase";

const state = {
  cakes: [],
};

const getters = {
  cakes(state) {
    return state.cakes.sort(() => Math.random() - 0.5);
  },
};

const actions = {
  setCakesRef: firestoreAction((context) => {
    return context.bindFirestoreRef("cakes", dbCakesRef);
  }),
};

const mutations = {};

export default { state, getters, actions, mutations };
