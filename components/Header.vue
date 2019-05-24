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
      <ThemeToggle/>
    </div>
    <Nav/>
  </header>
</template>

<script>
import Nav from "~/components/Nav";
import ThemeToggle from "~/components/ThemeToggle";
export default {
  components: {
    Nav,
    ThemeToggle
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
</style>
