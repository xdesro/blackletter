<template>
  <main class="main">
    <article class="page">
      <p class="page__counter">0{{pageNumber}}.</p>
      <h1 class="page__title">{{pageTitle}}</h1>
      <section class="page__content">
        <p>
          I’ve designed and coded projects ranging from Dungeons &amp; Dragons
          <a
            href="https://crit.fail"
          >companion apps</a>, large scale end-to-end mortgage fullfilment
          <a
            href="https://promontech.com"
          >app ecosystems</a>, and
          <a href="https://divinegoddessjessica.com">websites for dominatrices</a>.
        </p>
        <p>
          I’ve also open-sourced a bunch of code, such as
          <a
            href="https://super.henry.codes"
          >an Alfred app</a> that makes your text much, much ˢᵐᵃˡˡᵉʳ ᵃⁿᵈ ʰᵃʳᵈᵉʳ ᵗᵒ ʳᵉᵃᵈ or a simple Webpack/ThreeJS
          <a
            href="https://github.com/xdesro/threejs-webpack-starter"
          >boilerplate</a>.
        </p>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      statueRotation: -0.4,
      pageTitle: "work",
      pageNumber: 1,
      backgroundText: ["work–", "vertical"],
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

<style lang="scss">
</style>
