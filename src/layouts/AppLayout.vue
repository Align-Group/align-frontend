<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "PublicLayout";
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  scroll-behavior: smooth;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
