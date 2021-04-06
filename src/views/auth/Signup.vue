<template>
  <div>
    <vue-headful title="Signup | Ava" description="Description goes here" />
    <div class="row">
      <div class="col-6 col-sm-12">
        <div class="container">
          <div class="form-block">
            <h6 class="text-center">Welcome to Ava!</h6>
            <h5 class="text-center font-weight-bold">
              Let's kick off with few simple steps
            </h5>
            <span class="icon_arrow_down"></span>
            <form action="">
              <div class="form-group row d-flex">
                <div class="col-md-6">
                  <label
                    for="firstName"
                    class="color_grey_dark text-uppercase font-weight-bold font-13"
                    >First name</label
                  >
                  <input
                    type="text"
                    id="firstName"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>

                <div class="col-md-6">
                  <label
                    for="lastName"
                    class="color_grey_dark text-uppercase font-weight-bold font-13"
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

              <div class="form-group">
                <label for="email" class="form-label">Work email address</label>
                <input
                  type="email"
                  class="form-control"
                  required
                  placeholder="example@mail.com"
                />
              </div>

              <div class="form-group row d-flex">
                <div class="col-md-6">
                  <label
                    for="password"
                    class="color_grey_dark text-uppercase font-weight-bold font-13"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>

                <div class="col-md-6">
                  <label
                    for="confirmPass"
                    class="color_grey_dark text-uppercase font-weight-bold font-13"
                    >Confirm password</label
                  >
                  <input
                    type="password"
                    id="confirmPass"
                    class="form-control"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div class="form-group row d-flex">
                <div class="col-md-6">
                  <label
                    for="company"
                    class="color_grey_dark text-uppercase font-weight-bold font-13"
                    >Company name</label
                  >
                  <input
                    type="text"
                    id="company"
                    class="form-control"
                    placeholder="Company name"
                  />
                </div>

                <div class="col-md-6"></div>
              </div>
              <div class="btn btn-primary">Register</div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-12">
        <h1 class="font-weight-bold">
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
</template>

<script>
export default {};
</script>

<style></style>
