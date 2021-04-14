// GLOBAL ROUTES

const authRoute = [
  {
    path: "/login/:token?",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Auth/Login.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/signup/:token?",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Auth/Signup.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/signup-invitation/:token",
    name: "SignupInvitation",
    component: () =>
      import(
        /* webpackChunkName: "LoginRoute" */ "@/views/Auth/SignupInvitation"
      ),
    meta: {
      guest: true,
    },
  },

  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: () =>
      import(
        /* webpackChunkName: "ForgetPassword" */ "@/views/Auth/ForgetPassword"
      ),
    meta: {
      guest: true,
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import(
        /* webpackChunkName: "ResetPassword" */ "@/views/Auth/PasswordReset"
      ),
    meta: {
      guest: true,
    },
  },
];

export default authRoute;
