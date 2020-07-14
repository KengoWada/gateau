import Vue from "vue";
import Accounting from "accounting-js";
import vueHeadful from "vue-headful";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.component("vue-headful", vueHeadful);

Vue.filter("currency", (val) => {
  return Accounting.formatMoney(val, {
    symbol: "UGX. ",
    thousand: ",",
  }).replace(".00", "");
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
