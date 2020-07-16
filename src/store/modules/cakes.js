import { firestoreAction } from "vuexfire";

import { dbCakesRef } from "../../firebase";

const state = {
  cakes: [],
};

const getters = {
  cakes(state) {
    return state.cakes.sort(() => Math.random() - 0.5);
  },
  getCakes(state) {
    return state.cakes;
  },
};

const actions = {
  setCakesRef: firestoreAction((context) => {
    return context.bindFirestoreRef("cakes", dbCakesRef);
  }),
  async addCake(context, cake) {
    try {
      await dbCakesRef.add(cake);
    } catch (error) {
      return;
    }
  },
  async removeCake(context, cakeId) {
    try {
      await dbCakesRef.doc(cakeId).delete();
    } catch (error) {
      return;
    }
  },
};

const mutations = {};

export default { state, getters, actions, mutations };
