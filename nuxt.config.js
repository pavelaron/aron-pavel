export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aron Pavel - Mobile Application Developer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      },
      { hid: 'description', name: 'description', content: 'Aron Pavel - Mobile Application Developer' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#000000' },

      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

      // Add to home screen for Safari on iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Aron Pavel' },

      // Add to home screen for Windows
      { name: 'msapplication-TileImage', content: '/img/icons/msapplication-icon-144x144.png' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },

      // Twitter Card data
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@aronpavel' },
      { name: 'twitter:title', content: 'Aron Pavel' },
      { name: 'twitter:description', content: 'Mobile Application Developer' },
      { name: 'twitter:image', content: 'https://aron-pavel.web.app/img/logo.png' },

      // Open Graph data
      { property: 'og:title', content: 'Aron Pavel' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://aron-pavel.web.app' },
      { property: 'og:image', content: 'https://aron-pavel.web.app/img/logo.png' },
      { property: 'og:description', content: 'Mobile Application Developer' },
      { property: 'og:site_name', content: 'Aron Pavel' },

      { name: 'dc.publisher', content: 'https://aron-pavel.web.app' },
      { name: 'dc.language', content: 'en' },
      { name: 'dc.title', content: 'Aron Pavel' },
      { name: 'dc.description', content: 'Mobile Application Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/icons/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/img/icons/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },

  publicRuntimeConfig: {
    // Google Apps Script
    gasId: 'AKfycby6FtzwYLhH9fnEsOphMcuuhG-6QOMqCjSVXF8JlYStAMhiV47cVXbg0VaPSPzza-DXrg'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@sweetalert2/theme-wordpress-admin/wordpress-admin.css',
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDjnoO5rcSwUeD_H0xDQcbEQ0cPM3sqq78',
          authDomain: 'aron-pavel.firebaseapp.com',
          databaseURL: 'https://aron-pavel.firebaseio.com',
          projectId: 'aron-pavel',
          storageBucket: 'aron-pavel.appspot.com',
          messagingSenderId: '172278638041',
          appId: '1:172278638041:web:4df4fc8b4d6902e8f3a5c8',
          measurementId: 'G-N7B65T69F4'
        },
        services: {
          storage: true,
          analytics: true
        }
      }
    ]
  ],

  generate: {
    fallback: '404.html'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Aron Pavel - Mobile Application Developer',
      short_name: 'Aron Pavel',
      description: 'Aron Pavel - Mobile Application Developer',
      icons: [
        {
          src: '/img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/img/icons/icon-maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      start_url: '/',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#000000'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
