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
    },
    darkTheme() {
      return this.$store.state.darkMode;
    }
  },
  watch: {
    darkTheme() {
      if (this.darkTheme === false) {
        document.documentElement.style.setProperty(
          `--color-primary`,
          `#030303`
        );
        document.documentElement.style.setProperty(`--color-secondary`, `#666`);
        document.documentElement.style.setProperty(
          `--color-tertiary`,
          `#d5d5d5`
        );
        document.documentElement.style.setProperty(
          `--color-neutral`,
          `#efefef`
        );
      } else {
        document.documentElement.style.setProperty(
          `--color-primary`,
          `#efefef`
        );
        document.documentElement.style.setProperty(`--color-secondary`, `#888`);
        document.documentElement.style.setProperty(`--color-tertiary`, `#333`);
        document.documentElement.style.setProperty(`--color-neutral`, `#111`);
      }
    }
  }
};
</script>
