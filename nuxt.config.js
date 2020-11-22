import CONFIG from './zach.config';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: CONFIG.site_name,
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui' },
      { hid: 'og:site_name', name: 'og:site_name', content: CONFIG.site_name },
      { hid: 'og:title', name: 'og:title', content: CONFIG.site_name },
      { hid: 'description', name: 'description', content: CONFIG.description },
      { hid: 'og:description', name: 'og:description', content: CONFIG.description },
      { hid: 'theme-color', name: 'theme-color', content: CONFIG.theme_color },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: CONFIG.site_name },
    ],
    link: [
      { rel: 'canonical', href: `${CONFIG.site_url}/` },

      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'mask-icon', color: '#ffffff', href: '/favicons/safari-pinned-tab.svg' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/font-awesome.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/BKWLD/vue-balance-text
    'vue-balance-text/nuxt/module',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');
      const files = await $content({ deep: true }).only(['path']).fetch();
      return files.map((file) => (file.path === '/index' ? '/' : file.path));
    },
  },

  pwa: {
    meta: false,
    workbox: {
      offlineAnalytics: true,
    },
    manifest: {
      name: CONFIG.site_name,
      short_name: CONFIG.site_name,
      description: CONFIG.description,
      theme_color: CONFIG.theme_color,
      background_color: CONFIG.theme_color,
      lang: 'en',
      display: 'standalone',
    },
  },

  googleAnalytics: {
    id: 'UA-59393507-16',
  },

  sitemap: {
    hostname: CONFIG.site_url,
  },
};
