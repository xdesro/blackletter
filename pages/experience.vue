<template>
  <section class="page__content">
    <p>I’ve been in interaction- and CSS-focused UI development gigs since 2015, most recently working at Promontech and Universal Mind. I’m really into SCSS, Vue, and JAMstack architecture.</p>
    <p>
      I’m always open to new opportunities in creative dev, as well as style-code- or UI-centric roles. Check out
      <a
        href="https://resume.henry.codes"
      >my resume</a>, and
      <nuxt-link to="/contact">let’s chat</nuxt-link>!
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      statueRotation: -0.6,
      pageTitle: "experience",
      pageNumber: 2,
      backgroundText: ["experience–", "vertical"],
      navAlignTop: true
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
