import pkg from "./package";

export default {
  mode: "universal",
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: `Henry Desroches | Creative Developer`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { name: "theme-color", content: "#030303" },
      { name: "msapplication-TileColor", content: "#030303" },
      { name: "image", content: "https://henry.codes/opengraph-1.png" },
      { itemprop: "name", content: "Henry Desroches | Creative Developer" },
      {
        itemprop: "description",
        content:
          "Personal site and portfolio of UX engineer and prolific twitter user xdesro."
      },
      { itemprop: "image", content: "https://henry.codes/opengraph-1.png" },

      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Henry Desroches | Creative Developer"
      },
      {
        name: "twitter:description",
        content:
          "Personal site and portfolio of UX engineer and prolific twitter user xdesro."
      },
      { name: "twitter:site", content: "@xdesro" },
      { name: "twitter:creator", content: "@xdesro" },
      { name: "twitter:image:src", content: "https://henry.codes/twitter.jpg" },
      { name: "og:title", content: "Henry Desroches | Creative Developer" },
      {
        name: "og:description",
        content:
          "Personal site and portfolio of UX engineer and prolific twitter user xdesro."
      },
      { name: "og:image", content: "https://henry.codes/open-graph.jpg" },
      { name: "og:url", content: "https://henry.codes" },
      {
        name: "og:site_name",
        content: "Henry Desroches | Creative Developer"
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
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-92721708-1"
      }
    ]
  ],
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
