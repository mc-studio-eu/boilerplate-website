// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n', 'nuxt-simple-sitemap'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      partnerPlatformUrl: process.env.NUXT_PUBLIC_PARTNER_PLATFORM_URL || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      calendarUrl: process.env.NUXT_PUBLIC_CALENDAR_URL || '',
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || '',
      whatsappUrl: process.env.NUXT_PUBLIC_WHATSAPP_URL || '',
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || '',
      instagramUrl: process.env.NUXT_PUBLIC_INSTAGRAM_URL || '',
      xUrl: process.env.NUXT_PUBLIC_X_URL || '',
      googleAnalyticsId: process.env.NUXT_PUBLIC_GA_ID || ''
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Boilerplate marketing générique',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Boilerplate Nuxt générique pour générer un site à partir d’un nom d’entreprise ou d’une URL.' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Boilerplate marketing générique' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://example.com' },
        { property: 'og:image', content: 'https://example.com/hero.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-new.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon-new.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true
    },
  },
})
