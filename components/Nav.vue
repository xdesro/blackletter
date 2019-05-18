<template>
  <nav class="header__nav nav">
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
  mounted() {
    // this.emitNextActiveRoute();
  },
  updated() {
    // this.emitNextActiveRoute();
  },
  methods: {
    emitNextActiveRoute() {
      const activeClass = $nuxt.$router.options.linkActiveClass;
      const currentActive = this.$children.find(child => {
        return child.$el.classList.contains(activeClass);
      });
      const currentActiveIndex = this.$children.indexOf(currentActive);
      const nextActiveRoute = this.$children[
        currentActiveIndex + 1 > this.$children.length
          ? 0
          : currentActiveIndex + 1
      ].$props.to;
      console.log(nextActiveRoute);
    }
  }
};
</script>


<style lang="scss">
.nav {
  text-align: right;
  &__list {
    list-style-type: none;
    font-family: var(--font-sans--accent);
    text-transform: uppercase;
    line-height: 2;
    color: #666;
  }
  &__link {
    padding: 8px 0;
    position: relative;
    transition: color 0.1s;

    &:before {
      content: "";
      width: 0;
      height: 1px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      right: calc(100% + 10px);
      display: block;
      background-color: #030303;
      transition: width 0.2s ease-in-out;
    }
    &:hover {
      color: #030303;
      &:before {
        width: 60px;
      }
    }
    &--active {
      color: #030303;
    }
  }
}
</style>
