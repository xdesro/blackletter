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
.header {
  display: grid;
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  grid-template:
    "letterhead pageNumber"
    "date nav";
  justify-content: space-between;
  align-content: space-between;
  font-family: var(--font-sans--accent);
  text-transform: uppercase;
  line-height: 0.9;
  &__letterhead {
    grid-area: letterhead;
    padding-bottom: 40px;
    position: relative;
    &:after {
      content: "";
      height: 10px;
      width: 62px;
      background-color: #030303;
      display: block;
      position: absolute;
      bottom: -10px;
    }
  }
  &__accent-title {
    font-family: var(--font-blackletter);
    font-size: 48px;
    text-transform: lowercase;
    margin-top: 5px;
  }
  &__page-number {
    grid-area: pageNumber;
    position: relative;
    text-align: right;
    padding-right: 20px;
    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 62px;
      background-color: #030303;
      display: block;
      right: 0;
      top: 0;
    }
  }
  &__date {
    grid-area: date;
    display: grid;
    align-items: end;
  }
  &__nav {
    grid-area: nav;
  }
}
</style>
