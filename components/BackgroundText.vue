<template>
  <div class="background-text" role="presentation">
    <transition name="background-text__horizontal" mode="out-in">
      <div v-if="layout == 'horizontal'" ref="child" class="background-text__horizontal">{{text}}</div>
    </transition>
    <transition name="background-text__vertical" mode="out-in">
      <div v-if="layout == 'vertical'" :key="text" ref="child" class="background-text__vertical">
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
    </transition>
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
    this.$nextTick(() => {
      TweenLite.ticker.addEventListener("tick", this.updateAnimation);
    });
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
        `${this.translateEase.row1 * 0.12 -
          this.$el.style.getPropertyValue("--translateRow1-init")}%`
      );
      this.$el.style.setProperty(
        "--translateRow2",
        `${this.translateEase.row1 * -0.25 +
          this.$el.style.getPropertyValue("--translateRow2-init")}%`
      );
    }
  }
};
</script>


<style lang="scss">
</style>
