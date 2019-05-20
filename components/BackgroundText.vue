<template>
  <div class="background-text" role="presentation">
    <template v-if="layout == 'horizontal'">
      <div ref="child" class="background-text__horizontal">{{text}}</div>
    </template>
    <template v-else>
      <div ref="child" class="background-text__vertical">
        <div class="background-text__row">
          <span
            v-for="(iteration, index) of iterations"
            :key="index"
            class="background-text__inner"
          >{{text}}</span>
        </div>
        <div class="background-text__row">
          <span
            v-for="(iteration, index) of iterations"
            :key="index"
            class="background-text__inner"
          >{{text}}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  data() {
    return {
      iterations: 7,
      translateEase: { row1: 0, row2: 20 }
    };
  },
  computed: {
    text() {
      return this.$store.state.backgroundText.text;
    },
    layout() {
      return this.$store.state.backgroundText.layout;
    }
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMouseMove);
    TweenLite.ticker.addEventListener("tick", this.updateAnimation);
  },
  methods: {
    handleMouseMove(e) {
      this.translateX = e.clientY / window.innerHeight;
      TweenLite.to(this.translateEase, 1, {
        row1: (e.clientY / window.innerHeight) * 80
      });
    },
    updateAnimation() {
      this.$el.style.setProperty(
        "--translateRow1",
        `${this.translateEase.row1 * 0.12 - 66}%`
      );
      this.$el.style.setProperty(
        "--translateRow2",
        `${this.translateEase.row1 * -0.25 + 20}%`
      );
    }
  }
};
</script>


<style lang="scss">
.background-text {
  --translateRow1: -66%;
  --translateRow2: 20%;
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
  &__vertical {
    font-size: 150px;
    transform: rotate(90deg) translateX(-50%);
    transform-origin: 0 100%;
    display: inline-block;
    top: 50%;
    overflow: hidden;
    width: 270vh;
    left: 250px;
    position: absolute;
  }
  &__row {
    white-space: nowrap;
    &:first-child {
      margin-bottom: -50px;
      transform: translateX(var(--translateRow1));
    }
    &:last-child {
      transform: translateX(var(--translateRow2));
    }
  }
}
</style>
