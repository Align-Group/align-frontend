<template>
  <div>
    <!-- BASE NAV COMPONENT -->
    <BaseNav :show_nav="true"></BaseNav>
    <!-- BASE NAV COMPONENT -->
  </div>
</template>

<script>
import BaseNav from "@/components/globalComps/NavComps/BaseNav";

export default {
  name: "BaseBuild",

  components: {
    BaseNav,
  },
};
</script>

<style></style>
