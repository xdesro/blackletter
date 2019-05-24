<template>
  <section class="hero">
    <p class="hero__intro">Hi, I'm</p>
    <h1 class="hero__name">Henry Desroches</h1>
    <p
      class="hero__blurb"
    >I’m a creative developer from Denver with a passion for CSS, animation, accessibility, and deleting code.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      statueRotation: -0.2,
      pageTitle: "",
      pageNumber: 0,
      backgroundText: ["summer 2019", "horizontal"],
      navAlignTop: false
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.pageTitle);
    this.$store.commit("SET_PAGE_NUMBER", this.pageNumber);
    this.$store.commit("SET_BACKGROUND_TEXT", this.backgroundText);
    this.$store.commit("SET_STATUE_ROTATION", this.statueRotation);
    this.$store.commit("SET_NAV_ALIGNMENT", this.navAlignTop);
  }
};
</script>

<style lang="scss" >
#page-0 {
  display: none;
}
</style>
