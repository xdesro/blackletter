<template>
  <button class="theme-toggle" @click="toggleColorMode">
    <template v-if="darkMode">🌙</template>
    <template v-else>🌞</template>
  </button>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  },
  methods: {
    toggleColorMode() {
      this.$store.commit("TOGGLE_COLOR_MODE");
    }
  }
};
</script>