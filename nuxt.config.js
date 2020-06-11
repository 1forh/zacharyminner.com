module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Zach Minner | Frontend Web Developer in Canton, Ohio',
    meta: [
      { charset: 'utf-8' },
      { lang: 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'msapplication-TileColor',
        content: '#f7541e',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-32x32.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f7541e' },
    ],
  },
  router: {
    middleware: 'pages',
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f9cf00' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  styleResources: {
    scss: ['@/assets/scss/base/_index.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/filters/date', '~/plugins/libs/vue-rellax', '~/plugins/libs/prism'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    'vue-balance-text/nuxt/module',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  generate: {
    routes: function() {
      function generateRoutes(type) {
        return fs.readdirSync(`./assets/content/${type}`).map((file) => {
          return {
            route: `/${type}/${file.replace(/(.json)/, '')}`, // Remove the .json from the end of the filename
            payload: require(`./assets/content/${type}/${file}`),
          };
        });
      }

      const fs = require('fs');
      const articles = generateRoutes('articles');
      const projects = generateRoutes('projects');
      const games = generateRoutes('games');
      const routes = []
        .concat(articles)
        .concat(projects)
        .concat(games);

      return routes;
    },
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  markdownit: {
    injected: true,
  },
  webfontloader: {
    google: {
      families: ['Lato:400,700,900'],
    },
  },
  sitemap: {
    hostname: 'https://www.zacharyminner.com/',
    gzip: true,
  },
  googleAnalytics: {
    id: 'UA-59393507-16',
  },
};
