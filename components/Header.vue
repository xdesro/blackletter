<template>
  <header class="header">
    <div class="header__letterhead">
      <p>portfolio</p>
      <p>resume</p>
    </div>
    <div class="header__page-number">
      <p>00.</p>
      <p class="header__accent-title">{{$store.state.pageTitle}}</p>
    </div>
    <div class="header__date">
      <span>summer 2019</span>
    </div>
    <Nav/>
  </header>
</template>

<script>
import Nav from "~/components/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
</style>
