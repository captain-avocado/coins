<template lang="pug">
  #app.app
    Header.app__header(:class="scrolled > 0 ? 'active' : ''")
    .app__container
      Table.app__content
</template>
<script>
import "@/assets/sass/main.scss";
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

export default {
  components: {
    Header,
    Table
  },
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss">
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    height: $header-height;
  }

  &__container {
    flex: 1;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))
      rgb(255, 255, 255);
    padding: 50px 0;
    display: flex;
    justify-content: center;
    height: calc(100% - #{$header-height});
    // over
  }

  &__content {
    @include container;
  }
}
</style>
