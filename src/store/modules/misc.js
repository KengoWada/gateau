const state = {
  snackbar: {
    show: false,
    variant: "success",
    message: "Success! Item added to cart.",
  },
};

const getters = {
  snackbar(state) {
    return state.snackbar;
  },
};

const actions = {};

const mutations = {
  updateSnackbar(state, { show }) {
    state.snackbar.show = show;
  },
};

export default { state, getters, actions, mutations };
