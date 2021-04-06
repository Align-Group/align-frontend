<template>
  <div class="container">
    <vue-headful title="Signup | Ava" description="Description goes here" />
    <div class="row">
      <div class="col col-sm-12">
        <div class="form-block">
          <h6 class="text-center">Welcome to Ava!</h6>
          <h5 class="text-center font-weight-bold">
            Let's kick off with few simple steps
          </h5>
          <form action="">
            <div class="form-group">
              <label for="email">Work email address</label>
              <input
                type="email"
                class="form-control"
                required
                placeholder="example@mail.com"
              />
            </div>
            <div class="btn btn-primary">Register</div>
          </form>
        </div>
      </div>
      <div class="col col-sm-12">
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
