// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n', 'nuxt-simple-sitemap'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "MC Studio | Création d'expériences digital",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Le Studio de Design & Développement' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: "MC Studio" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.mc-studio.eu' },
        { property: 'og:image', content: 'https://www.mc-studio.eu/img/fond-site.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-new.png' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon-new.png' }
      ],
      script: [
        {
          innerHTML: `(function(){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';localStorage.setItem('nuxt-color-mode','dark');})();`,
          type: 'text/javascript'
        }
      ]
    }
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' }
    ],
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
    compilation: {
      strictMessage: false
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
})