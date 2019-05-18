<template>
  <main class="main">
    <section class="hero">
      <p class="hero__intro">Hi, I'm</p>
      <h1 class="hero__name">
        Henry
        <br>Desroches
      </h1>
      <p
        class="hero__blurb"
      >I’m a creative developer from Denver with a passion for CSS, animation, accessibility, and deleting code.</p>
    </section>
  </main>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  components: {
    // Logo
  },
  data() {
    return {};
  },
  asyncData() {
    return {
      title: "",
      backgroundText: ["summer 2019", "horizontal"]
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
  }
};
</script>

<style lang="scss">
.main {
  height: 100vh;
  display: inline-grid;
  margin: 0 auto;
  place-items: center;
  position: relative;
  z-index: 1;
}
.hero {
  font-size: 32px;
  margin: 0 auto;
  max-width: 510px;
  width: 100%;

  &__intro {
    text-align: center;
    font-family: var(--font-sans--accent);
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  &__name {
    text-align: center;
    font-size: 164px;
    font-family: var(--font-blackletter);
    margin-bottom: 40px;
    line-height: 0.93;
  }
  &__blurb {
    line-height: 1.25;
  }
}
</style>
