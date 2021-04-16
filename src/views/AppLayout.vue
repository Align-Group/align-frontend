<template>
  <div>
    <BaseBuild />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import BaseBuild from "@/views/NavBuildUp/BaseBuild";

export default {
  name: "BaseEntry",

  components: { BaseBuild },
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
