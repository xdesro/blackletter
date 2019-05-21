<template>
  <article class="page">
    <p class="page__counter">0{{pageNumber}}.</p>
    <transition name="page-title">
      <h1 :v-bind="pageTitle" class="page__title">{{pageTitle}}</h1>
    </transition>
    <section class="page__content">
      <nuxt/>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    pageNumber: { type: Number, default: 0 },
    pageTitle: { type: String, default: "" }
  }
};
</script>

<style>
.page-title-enter-active,
.page-title-leave-active {
  transition: all 2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.page-title-enter,
.page-title-leave-to {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}
.page-title-leave,
.page-title-enter-to {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
