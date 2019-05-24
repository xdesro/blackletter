import pkg from "./package";

export default {
  mode: "universal",
  head: {
    title: `Henry Desroches | Creative Developer`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  router: {
    linkActiveClass: "nav__link--active"
  },
  loading: { color: "var(--color-primary)" },
  css: ["~/assets/scss/main.scss"],
  plugins: [],
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
