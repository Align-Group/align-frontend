import Vue from "vue";
import VueRouter from "vue-router";

import globalRoute from "./globalRoute.js";
import authRoute from "./authRoute.js";

Vue.use(VueRouter);

const routes = [...globalRoute, ...authRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  duplicateNavigationPolicy: "reload",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
