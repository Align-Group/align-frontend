const globalRoute = [
  {
    path: "/home/:id",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/AppLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */
            "@/views/Dashboard.vue"
          ),
        // meta: {
        //   requiresAuth: true,
        // },
      },
      {
        path: "/user-team",
        name: "UserTeam",
        component: () =>
          import(
            /* webpackChunkName: "SETUP WORKSPACE" */
            "@/views/UserTeam.vue"
          ),
      },
      {
        path: "/appraisal-templates",
        name: "AppraisalTemplate",
        component: () =>
          import(
            /* webpackChunkName: "APPRAISAL TEMPLATE" */
            "@/views/AppraisalTemplate.vue"
          ),
      },
      {
        path: "/schedule",
        name: "Schedule",
        component: () =>
          import(
            /* webpackChunkName: "SCHEDULE" */
            "@/views/Schedule.vue"
          ),
      },
      {
        path: "/settings",
        name: "Settings",
        component: () =>
          import(
            /* webpackChunkName: "SETTINGS" */
            "@/views/Settings.vue"
          ),
      },
    ],
  },

  {
    path: "*",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "404 PAGE" */
        "@/views/404"
      ),
  },
  {
    path: "/setup",
    name: "SetupForm",
    component: () =>
      import(
        /* webpackChunkName: "SETUP WORKSPACE" */
        "@/views/SetupForm.vue"
      ),
  },
];

export default globalRoute;
