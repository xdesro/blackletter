<template>
  <header class="header">
    <div class="header__letterhead">
      <p>portfolio</p>
      <p>resume</p>
    </div>
    <div class="header__page-number">
      <p :key="pageNumber">0{{ pageNumber }}.</p>
      <p class="header__accent-title">
        <transition name="accent-title">
          <span :key="pageTitle" class="header__accent-title-inner">{{ pageTitle }}</span>
        </transition>
      </p>
    </div>
    <div class="header__date">
      <span>summer 2019</span>
    </div>
    <Nav/>
  </header>
</template>

<script>
import Nav from "~/components/Nav";
export default {
  components: {
    Nav
  },
  computed: {
    pageNumber() {
      return this.$store.state.pageNumber;
    },
    pageTitle() {
      return this.$store.state.pageTitle;
    }
  }
};
</script>

<style lang="scss">
.accent-title-enter-active,
.accent-title-leave-active {
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.accent-title-enter,
.accent-title-leave-to {
  opacity: 0;
  transform: translateX(40vw);
}
.accent-title-leave,
.accent-title-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
