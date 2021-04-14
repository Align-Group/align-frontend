const globalRoute = [
  {
    path: "/home/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Dashboard.vue"),
  },
  {
    path: "/home/user-team",
    name: "UserTeam",
    component: () =>
      import(
        /* webpackChunkName: "SETUP WORKSPACE" */
        "@/views/UserTeam.vue"
      ),
  },
  {
    path: "/home/appraisal-templates",
    name: "AppraisalTemplate",
    component: () =>
      import(
        /* webpackChunkName: "APPRAISAL TEMPLATE" */
        "@/views/AppraisalTemplate.vue"
      ),
  },
  {
    path: "/home/schedule",
    name: "Schedule",
    component: () =>
      import(
        /* webpackChunkName: "SCHEDULE" */
        "@/views/Schedule.vue"
      ),
  },
  {
    path: "/home/settings",
    name: "Settings",
    component: () =>
      import(
        /* webpackChunkName: "SETTINGS" */
        "@/views/Settings.vue"
      ),
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
