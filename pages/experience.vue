<template>
  <main class="main">
    <article class="page">
      <p class="page__counter">02.</p>
      <h1 class="page__title">{{title}}</h1>
      <section class="page__content">
        <p>I’ve been in interaction- and CSS-focused UI development gigs since 2015, most recently working at Promontech and Universal Mind. I’m really into SCSS, Vue, and JAMstack architecture.</p>
        <p>
          I’m always open to new opportunities in creative dev or style-code-/UI-centric roles. Check out
          <a
            href="#"
          >my resume</a>, and
          <nuxt-link to="/contact">let’s chat</nuxt-link>!
        </p>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      statueRotation: -0.6,
      title: "experience",
      backgroundText: ["experience–", "vertical"],
      navAlignTop: true
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.title);
    this.$store.commit("SET_BACKGROUND_TEXT", this.backgroundText);
    this.$store.commit("SET_STATUE_ROTATION", this.statueRotation);
    this.$store.commit("SET_NAV_ALIGNMENT", this.navAlignTop);
  }
};
</script>

<style lang="scss" scoped>
// Extremely long title.
.page {
  &__counter,
  &__title {
    font-size: 55px;
  }
}
</style>
