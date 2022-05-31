export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - LightWorld",
    title: "LightWorld | 辉光世界",
    htmlAttrs: {
      lang: "zh-CN",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss", "animate.css",'@mdi/font/css/materialdesignicons.css','typeface-roboto/index.css'],

  // Customize the progress-bar color
  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/route", ssr: false },
    { src: "@/plugins/md-editor", ssr: false },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true,
    },
    defaultAssets: {
      font: false, // 关闭google字体
      icons: false // 关闭远程图标
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    BASEIMAGE: "https://cdn.lwmc.net",
    BASEURL:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:9000"
        : "http://dev.lwmc.net",
  },
  // server: {
  //   host: "0.0.0.0", // 监听所有的网卡服务器，保证生产服务器能够被访问
  //   port: 3000, // 项目端口
  // },
};
