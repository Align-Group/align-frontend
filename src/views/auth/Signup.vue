<template>
  <div>
    <vue-headful title="Signup | Ava" description="Description goes here" />

    <div class="signup-section">
      <div class="row">
        <div class="col-12">
          <img v-lazy="localImg('ava.svg')" class="brand-logo" alt="ava" />
        </div>
      </div>
      <div class="container">
        <div class="row base-layout">
          <div class="col-12 col-md-6 col-lg-6 left-layout">
            <div class="form-block">
              <h6 class="text-center">Welcome to Ava!</h6>
              <h6 class="text-center font-weight-bold my-4">
                Let's kick off with few simple steps
              </h6>

              <form action="" autocomplete="off">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label
                        for="firstName"
                        class="color_grey_dark font-weight-bold font-13"
                        >First name</label
                      >
                      <input
                        type="text"
                        id="firstName"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label
                        for="lastName"
                        class="color_grey_dark font-weight-bold font-13"
                        >Last name</label
                      >
                      <input
                        type="text"
                        id="lastName"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>

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
                  <div class="col-12 col-md-6 col-lg-6">
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
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label
                        for="confrimPass"
                        class="color_grey_dark font-weight-bold font-13"
                        >Confirm passsword</label
                      >
                      <input
                        type="password"
                        id="confirmPass"
                        class="form-control"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label
                        for="company"
                        class="color_grey_dark font-weight-bold font-13"
                        >Company name</label
                      >
                      <input
                        type="text"
                        id="company"
                        class="form-control"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label
                        for="industry"
                        class="color_grey_dark font-weight-bold font-13"
                        >Industry</label
                      >
                      <select required class="form-control">
                        <option value selected disabled>Select Industry</option>
                        <option>agric</option>
                        <option>tech</option>
                        <option>engi</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="auth-cta w-100 d-flex justify-content-center">
                  <button class="btn btn-primary btn-stretch my-3">
                    Register
                  </button>
                </div>
                <!-- DISCLAIMER BLOCK -->
                <div class="disclaimer-block color_grey_dark">
                  <p class="text-center">
                    By signing up, you agree to our
                    <router-link :to="{ name: '' }" class="btn-link"
                      >Privacy Policies</router-link
                    >&nbsp;,&nbsp;
                    <router-link :to="{ name: '' }" class="btn-link"
                      >Terms of Use</router-link
                    >&nbsp;and&nbsp;
                    <router-link :to="{ name: '' }" class="btn-link"
                      >Cookie Policy</router-link
                    >
                  </p>
                </div>
              </form>

              <div class="auth-signup-cta mt-3">
                <p class="text-center font-15">
                  Already have an account?
                  <router-link :to="{ name: 'login' }" class="btn-link"
                    >&nbsp; Login here</router-link
                  >
                </p>
              </div>
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
            <img
              src="../../../public/img/landing.svg"
              alt="landing image"
              class="img-responsive"
            />
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
}
</style>
