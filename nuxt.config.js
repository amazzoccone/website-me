const webpack = require('webpack')

module.exports = {
  env: {
    //
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Andres Mazzo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal website' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  css: [
    'milligram/dist/milligram.min.css',
    'animate.css/animate.css',
    '@/assets/css/main.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Own or external plugins
  */
  plugins: [ '~/plugins/eventBus.js' ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // Automatically load plugin instead of having to import or require them everywhere.
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
  },
  modules: [
      ['nuxt-i18n', {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en-US/index.js'
          },
          {
            code: 'es',
            iso: 'es-ES',
            name: 'Español',
            file: 'es-ES/index.js'
          }
        ],
        defaultLocale: 'en',
        loadLanguagesAsync: true,
        lazy: true,
        langDir: 'lang/'
      }]
  ],
}
