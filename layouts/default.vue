<template>
  <div class="app">
    <Header/>
    <main class="main">
      <nuxt name="hero"/>
      <article :id="'page-'+pageNumber" class="page">
        <p class="page__counter" :v-bind="pageNumber">0{{pageNumber}}.</p>
        <transition name="page-title" mode="out-in">
          <h1 :key="pageTitle" class="page__title">{{pageTitle}}</h1>
        </transition>
        <nuxt/>
      </article>
    </main>
    <BackgroundText text="Summer 2019"/>
    <no-ssr>
      <Hercules/>
    </no-ssr>
  </div>
</template>

<script>
import Header from "~/components/Header";
import BackgroundText from "~/components/BackgroundText";
import Hercules from "~/components/Hercules";

export default {
  components: {
    Header,
    BackgroundText,
    Hercules
  },
  computed: {
    pageNumber() {
      return this.$store.state.pageNumber;
    },
    pageTitle() {
      return this.$store.state.pageTitle;
    }
  },
  mounted() {
  }
  // data() {
  //   return {
  //     pageNumber: this.$store.state.pageNumber,
  //     pageTitle: this.$store.state.pageTitle
  //   };
  // }
};
</script>


<style lang="scss">
@import "~assets/scss/main";

.page-title-enter-active,
.page-title-leave-active {
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.page-title-enter {
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
}
.page-title-leave-to {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
.page-title-leave,
.page-title-enter-to {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
 