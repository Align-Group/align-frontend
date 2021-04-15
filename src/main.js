import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import vueHeadful from "vue-headful";
import { BootstrapVue } from "bootstrap-vue";
import VueLazyload from "vue-lazyload";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../public/css/app.css";

import RenderAssets from "@/scripts/mixins/RenderAssets";

Vue.use(BootstrapVue);
Vue.use(VueLazyload);
Vue.mixin(RenderAssets);

Vue.component("vue-headful", vueHeadful);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
