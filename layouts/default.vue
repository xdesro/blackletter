<template>
  <div class="app">
    <Header/>
    <main class="main">
      <article class="page">
        <SectionHead/>
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
import SectionHead from "~/components/SectionHead";

export default {
  components: {
    Header,
    BackgroundText,
    Hercules,
    SectionHead
  },
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


<style lang="scss">
@import "~assets/scss/main";
</style>
 