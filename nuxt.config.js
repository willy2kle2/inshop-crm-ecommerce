const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/font-awesome',
    { src: '~/plugins/vue-select', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
    ['nuxt-i18n', {
      defaultLocale: 'en',
      locales: [
        {
          code: 'en',
          iso: 'en_US',
          name: 'English',
          file: 'en.js'
        },
        {
          code: 'ru',
          iso: 'ru_RU',
          name: 'Russian',
          file: 'ru.js'
        }
      ],
      lazy: true,
      langDir: 'lang/'
    }]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  router: {
    linkActiveClass: 'active',
    middleware: 'locale'
  }
}