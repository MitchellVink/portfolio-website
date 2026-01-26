import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      title: 'KNIV Studios',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/icon-black.svg',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/icon-white.svg',
          media: '(prefers-color-scheme: dark)',
        },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
      script: [
        {defer: true, src: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrambleTextPlugin.min.js"},
      ],
      meta: [
        { name: 'robots', content: 'all' },
        { name: 'author', content: "Bas van Cleef" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'application-name', content: 'KNIV Studios.' },
        { name: 'theme-color', content: '#000000' },
        { name: 'description', content: 'Lorem ipsum dolor sit amet.' },
        { property: 'og:title', content: 'KNIV Studios' },
        { property: 'og:description', content: 'Lorem ipsum dolor sit amet.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'nl' },
        { property: 'og:url', content: 'https://kniv-studios.nl' },
      ],
    },
  },

  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  devtools: { enabled: false },

  modules: ['@nuxt/content', '@nuxt/icon'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})