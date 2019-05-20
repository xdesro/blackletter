<template>
  <div class="app">
    <Header/>
    <nuxt/>
    <BackgroundText text="Summer 2019"/>
    <no-ssr>
      <Hercules/>
    </no-ssr>
  </div>
</template>

<script>
// import _ from "lodash";
import Header from "~/components/Header";
import BackgroundText from "~/components/BackgroundText";
import Hercules from "~/components/Hercules";
export default {
  components: {
    Header,
    BackgroundText,
    Hercules
  }
};
</script>


<style lang="scss">
@import "~assets/scss/index";
</style>
