<template>
  <nav class="header__nav nav" :class="navAlignTop ? 'nav--align-top' : ''">
    <ul class="nav__list">
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/" exact>about</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/work" exact>work</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/experience" exact>xp</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/contact" exact>contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    navAlignTop() {
      return this.$store.state.navAlignTop;
    }
  },
};
</script>

