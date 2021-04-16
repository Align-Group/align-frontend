<template>
  <div class="navbar-section d-flex justify-content-between align-items-center">
    <div class="brand-logo">
      <router-link :to="'/home/dashboard'">
        <img v-lazy="localImg('ava.svg')" alt="ava" />
      </router-link>
    </div>

    <div class="nav-list">
      <div class="nav-link"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show_nav: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.navbar-section {
  padding-left: 46px;
  padding-right: 77px;
  height: 36px;
  background-color: #f1f1f1f1;

  .nav-items {
    display: flex;
  }
}
</style>
