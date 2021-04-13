import Vue from "vue";
import VueRouter from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: AppLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Dashboard.vue"),
        meta: {
          // requiresAuth: true,
          layout: AppLayout,
        },
      },
      {
        path: "/user-teams",
        name: "Teams",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Teams.vue"),
        meta: {
          // requiresAuth: true,
          layout: AppLayout,
        },
      },
      {
        path: "/appraisal-template",
        name: "Template",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/AppraisalTemplate.vue"
          ),
        meta: {
          // requiresAuth: true,
          layout: AppLayout,
        },
      },
      {
        path: "/schedule",
        name: "Schedule",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Schedule.vue"),
        meta: {
          // requiresAuth: true,
          layout: AppLayout,
        },
      },

      {
        path: "/settings",
        name: "Settings",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Settings.vue"),
        meta: {
          // requiresAuth: true,
          layout: AppLayout,
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
        meta: {
          // requiresAuth: true,
          // layout: AppLayout,
        },
      },
    ],
  },

  {
    path: "/",
    redirect: "login",
    component: PublicLayout,
    children: [
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
          // layout: PublicLayout,
        },
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
          // layout: PublicLayout,
        },
      },

      {
        path: "*",
        name: "404*",
        component: require("@/views/404.vue").default, // load sync home
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
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
