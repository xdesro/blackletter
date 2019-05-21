<template>
  <main class="main">
    <article class="page">
      <p class="page__counter">0{{pageNumber}}.</p>
      <h1 class="page__title">{{pageTitle}}</h1>
      <section class="page__content">
        <p>
          I’m most active and reachable
          <a href="https://twitter.com/xdesro">on Twitter</a> or
          <a href="mailto:yo@henry.codes">via email</a>, but you can find me most places on the internet as
          <strong>@xdesro</strong>.
        </p>
        <ul class="list list--icons">
          <li
            v-for="(socialLink, index) of socialLinks"
            :key="index"
            :class="'list__item list__item--' + socialLink.name"
          >
            <a class="list__link" :href="socialLink.url">
              <Icon :icon="socialLink.name" class="list__icon"/>
              <span class="list__text">{{ socialLink.name }}</span>
            </a>
          </li>
        </ul>
        <!-- <ul class="social-list">
            <li class="social-list__item"></li>
        </ul>-->
      </section>
    </article>
  </main>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  components: {
    Icon
  },
  data() {
    return {
      statueRotation: -0.8,
      pageTitle: "contact",
      pageNumber: 3,
      backgroundText: ["contact–", "vertical"],
      navAlignTop: true,
      socialLinks: [
        { name: "twitter", url: "https://twitter.com/xdesro" },
        { name: "codepen", url: "https://codepen.io/xdesro" },
        { name: "github", url: "https://github.com/xdesro" },
        { name: "instagram", url: "https://instagram.com/xdesro" },
        { name: "twitch", url: "https://twitch.tv/xdesro" },
        {
          name: "stackoverflow",
          url: "https://stackoverflow.com/users/7868234/henry-desroches"
        },
        { name: "linkedin", url: "https://www.linkedin.com/in/henrydesroches" }
      ]
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