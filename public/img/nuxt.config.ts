// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,

  runtimeConfig: {
    private : {
      API_SECRET_URL: process.env.NUXT_API_KEY,
    }
  },

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
        { name: 'description', content: 'Notre studio de développement web crée des sites internet et applications sur mesure pour transformer vos idées en projets digitaux réussis.' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: "MC Studio | Création d'expériences digital" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.mc-studio.eu' },
        { property: 'og:image', content: 'https://www.mc-studio.eu/img/fond-site.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-new.png' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon-new.png' }
      ]
    }
  },

  image: {
    // Options
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css','@fortawesome/fontawesome-svg-core/styles.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-simple-sitemap', '@nuxt/image', '@hypernym/nuxt-gsap', "@nuxt/ui", 'nuxt-calendly', 'nuxt-marquee'],

  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true
    },
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },

  imports : {
    dirs : ['store']
  },

  ui: {
    global: true,
    icons: ['heroicons','mdi'],
  },

  colorMode : {
    preference: 'light',
    fallback: 'light',
  },

  compatibilityDate: '2025-02-27',
})