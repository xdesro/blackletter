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
export default {
  transition: {
    name: "test",
    mode: "out-in"
  },
  data() {
    return {
      statueRotation: 0.0,
      title: "",
      backgroundText: ["summer 2019", "horizontal"]
    };
  },
  asyncData() {
    return {};
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
    font-size: 150px;
    font-family: var(--font-blackletter);
    margin-bottom: 40px;
    line-height: 0.93;
  }
  &__blurb {
    line-height: 1.25;
  }
}
</style>
