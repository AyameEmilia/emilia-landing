export default {
  server: {
    port: 3005, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ellafern Dev.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'การนอนคือทุกสิ่งไม่เชื่อลองนอนดูสิ!' },
      { name: 'ellafern, elf, developer, nodejs, freelance, AI, รับเขียนโปรแกรม, webshop, rdcw', content: 'keywords' },
      { property: 'og:title', content: 'Ellafern' },
      { property: 'og:description', content: 'การนอนคือทุกสิ่งไม่เชื่อลองนอนดูสิ' },
      { property: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://cdn.discordapp.com/attachments/803211285797535755/1042675257401679872/bg-home.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
