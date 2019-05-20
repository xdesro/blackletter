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
    linkActiveClass: "nav__link--active",
    scrollBehavior: () => ({ x: 0, y: 50 })
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  // modules: ["@nuxtjs/pwa"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
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
