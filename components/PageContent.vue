<template>
  <article class="page">
    <p class="page__counter">0{{pageNumber}}.</p>
    <h1 class="page__title">{{pageTitle}}</h1>
    <section class="page__content">
      <slot/>
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
</style>
