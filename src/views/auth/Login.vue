<template>
  <div>
    <vue-headful title="Login | Ava" description="Description goes here" />

    <div class="login-section">
      <div class="row">
        <div class="col-12">
          <div class="brand-logo mt-25 ml-80 mb-60">
            <img v-lazy="localImg('ava.svg')" alt="ava" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row base-layout">
          <div class="col-12 col-md-6 col-lg-6 left-layout">
            <div class="form-block">
              <h6 class="text-center">Welcome to Ava!</h6>
              <h6 class="text-center font-weight-bold my-4">
                Login to your account
              </h6>

              <form action="" autocomplete="off">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label
                        for="email"
                        class="color_grey_dark font-weight-bold font-13"
                        >Work email address</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        required
                        placeholder="example@mail.com"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label
                        for="password"
                        class="color_grey_dark font-weight-bold font-13"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>

                <div class="auth-cta w-100 d-flex justify-content-center">
                  <button class="btn btn-primary btn-stretch my-3">
                    Login
                  </button>
                </div>
                <!-- DISCLAIMER BLOCK -->
                <div class="disclaimer-block color_grey_dark">
                  <p class="text-center">
                    Forgot your password ?
                    <router-link :to="{ name: '' }" class="btn-link"
                      >Click here</router-link
                    >
                  </p>

                  <p class="text-center">
                    Don't have an account ?
                    <router-link :to="{ name: 'Signup' }" class="btn-link"
                      >Register here</router-link
                    >
                  </p>
                </div>
              </form>
            </div>

            <!-- AUTH COPYRIGHT -->
            <div class="auth-copyright mt-4 mb-3">
              <p class="text-center color_grey_dark font-12">
                © {{ currentDate.getFullYear() }}, Ava. All rights reserved.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6 right-layout">
            <h1 class="font-weight-bold mt-2">
              Performance management has never been easier
            </h1>
            <img v-lazy="localImg('landing.svg')" alt="landing" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
// hide landing image on smaller screens
@media screen and (max-width: 576px) {
  .right-layout {
    display: none !important;
  }

  .brand-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
}
</style>
