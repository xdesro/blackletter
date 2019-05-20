<template>
  <main class="main">
    <article class="page">
      <p class="page__counter">03.</p>
      <section class="page__content">
        <p>
          I’m most active and reachable
          <a href="https://twitter.com/xdesro">on Twitter</a> or
          <a href="mailto:yo@henry.codes">via email</a>, but you can find me most places on the internet as
          <strong>@xdesro</strong>.
        </p>
        <!-- <ul class="social-list">
            <li class="social-list__item"></li>
        </ul>-->
      </section>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      statueRotation: -0.8,
      title: "contact",
      backgroundText: ["contact–", "vertical"]
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.title);
    this.$store.commit("SET_BACKGROUND_TEXT", this.backgroundText);
    this.$store.commit("SET_STATUE_ROTATION", this.statueRotation);
  }
};
</script>