<template>
  <div v-if="pageNumber > 0" class="section__head">
    <transition name="page-counter">
      <p class="page__counter" :v-bind="pageNumber">0{{pageNumber}}.</p>
    </transition>
    <transition name="page-title" mode="out-in">
      <h1 :key="pageTitle" class="page__title">{{pageTitle}}</h1>
    </transition>
  </div>
</template>
<script>
export default {
  computed: {
    pageNumber() {
      return this.$store.state.pageNumber;
    },
    pageTitle() {
      return this.$store.state.pageTitle;
    }
  }
};
</script>
