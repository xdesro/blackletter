<template>
  <main class="main">
    <article class="page">
      <p class="page__counter">01.</p>
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
      statueRotation: -95,
      title: "work",
      backgroundText: ["work–", "vertical"]
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.title);
    this.$store.commit("SET_BACKGROUND_TEXT", this.backgroundText);
    this.$store.commit("SET_STATUE_ROTATION", this.statueRotation);
  }
};
</script>

<style lang="scss">
.page {
  &__counter {
    font-size: 220px;
    font-family: var(--font-sans--accent);
    line-height: 0.9;
  }
  &__content {
    width: 100%;
    max-width: 730px;
    font-size: 32px;
    padding: 1rem;
    p {
      margin-block-end: 2rem;
    }
    a {
      text-decoration: underline;
      transition: color 0.1s ease-in-out;
      &:hover {
        color: #666;
      }
    }
  }
}
</style>
