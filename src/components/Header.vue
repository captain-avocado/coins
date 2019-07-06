<template lang="pug">
  .header
    .header__container.container
      a(href="#")
        img.header__logo(src="../assets/svg/logo.svg")
</template>
<script>
import "@/icons/logo.js";

export default {};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  height: $header-height;

  &__container {
    @include container;
    display: flex;
    justify-content: center;
    height: calc(100vh-#{$header-height});
  }

  &__logo {
    width: 50px;
    height: 50px;
  }
}
</style>
