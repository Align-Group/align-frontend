<template>
  <div class="header-section">
    <div class="brand-logo mt-25 ml-80 mb-60">
      <img v-lazy="localImg('ava.svg')" alt="ava" />
    </div>

    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Reviews</a>
      </li>
      <li>
        <a href="#">Goals</a>
      </li>
      <li>
        <a href="#"> johndoe@gmail.com </a>
        <span class="icon-caret-down"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-section {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 36px;
  padding: 0 77px 0 46px;
  // background-color: $border_grey_light;
}
</style>
