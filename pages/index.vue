<template>
  <div/>
</template>

<script>
export default {
  transition: {
    name: "test",
    mode: "out-in"
  },
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
