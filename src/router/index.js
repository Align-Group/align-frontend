import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/dashboard/DashboardLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Dashboard.vue"),
        // meta: {
        //   requiresAuth: true,
        // },
      },
      {
        path: "/user-teams",
        name: "Teams",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Teams.vue"),
        // meta: {
        //   requiresAuth: true,
        // },
      },
      {
        path: "/appraisal-template",
        name: "Template",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/AppraisalTemplate.vue"
          ),
        // meta: {
        //   requiresAuth: true,
        // },
      },
      {
        path: "/schedule",
        name: "Schedule",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Schedule.vue"),
        // meta: {
        //   requiresAuth: true,
        // },
      },

      {
        path: "/settings",
        name: "Settings",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Settings.vue"),
        // meta: {
        //   requiresAuth: true,
        // },
      },
    ],
  },
  {
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Signup.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Login.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/setup",
    name: "Setup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Setup.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
