<template>
  <div class="background-text" role="presentation">
    <!-- <template v-if="layout == 'horizontal'"> -->
    <div class="background-text__horizontal">{{text}}</div>
    <!-- </template> -->
    <!-- <template v-else>
      <div class="background-text__vertical">
        <div class="background-text__inner">{{text}}</div>
      </div>
    </template>-->
  </div>
</template>

<script>
export default {
  computed: {
    text() {
      return this.$store.state.backgroundText.text;
    },
    layout() {
      return this.$store.state.backgroundText.layout;
    },
    numberOfIterations() {
      console.log(this.$el);
      return 0;
    }
    //   numberOfIterations() {}
  }
};
</script>


<style lang="scss">
.background-text {
  -webkit-text-stroke: 1px #d5d5d5;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-sans--accent);
  font-size: 15vw;
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  &__horizontal {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
