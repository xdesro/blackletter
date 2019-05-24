import pkg from "./package";

export default {
  mode: "universal",
  head: {
    title: `Henry Desroches | Creative Developer`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { name: "theme-color", content: "#030303" },
      { name: "msapplication-TileColor", content: "#030303" },
      { name: "image", content: "https://henry.codes/opengraph.jpg" },
      { itemprop: "name", content: "Creative Developer // Henry Desroches" },
      {
        itemprop: "description",
        content:
          "Personal site and portfolio of UX engineer and prolific twitter user xdesro."
      },
      { itemprop: "image", content: "https://henry.codes/opengraph.jpg" },

      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Creative Developer // Henry Desroches"
      },
      {
        name: "twitter:description",
        content:
          "Personal site and portfolio of UX engineer and prolific twitter user xdesro."
      },
      { name: "twitter:site", content: "@xdesro" },
      { name: "twitter:creator", content: "@xdesro" },
      { name: "twitter:image:src", content: "https://henry.codes/twitter.jpg" },
      { name: "og:title", content: "Creative Developer // Henry Desroches" },
      {
        name: "og:description",
        content:
          "Personal site and portfolio of UX engineer and prolific twitter user xdesro."
      },
      { name: "og:image", content: "https://henry.codes/opengraph.jpg" },
      { name: "og:url", content: "https://henry.codes" },
      {
        name: "og:site_name",
        content: "Creative Developer // Henry Desroches"
      },
      { name: "og:locale", content: "en_US" },
      { name: "og:type", content: "website" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#030303" }
    ]
  },
  router: {
    linkActiveClass: "nav__link--active"
  },
  loading: { color: "var(--color-primary)" },
  css: ["~/assets/scss/main.scss"],
  plugins: [{ src: "~/plugins/LocalStorage.js", ssr: false }],
  build: {
    transpile: ["three/examples/jsm/loaders/GLTFLoader"],
    extend(config, ctx) {
      // Run ESLint on save
      config.module.rules.push({
        enforce: "pre",
        test: /\.(gltf)$/,
        loader: "gltf-webpack-loader"
      });
      config.module.rules.push({
        test: /\.(bin)$/,
        loader: "file-loader"
      });
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader"
        });
      }
    }
  }
};
