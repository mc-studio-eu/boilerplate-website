<script setup lang="ts">
const site = useBoilerplateSite()

useHead({
  title: computed(() => site.metaTitle.value),
  meta: [
    { name: 'description', content: computed(() => site.metaDescription.value) },
    { property: 'og:title', content: computed(() => site.metaTitle.value) },
    { property: 'og:description', content: computed(() => site.metaDescription.value) }
  ],
  htmlAttrs: {
    class: 'nuxt-ui-scrollbars',
  },
});

const runtimeConfig = useRuntimeConfig()

useHead({
  script: runtimeConfig.public.googleAnalyticsId
    ? [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.googleAnalyticsId}`,
          async: true,
          defer: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${runtimeConfig.public.googleAnalyticsId}');
          `,
          type: 'text/javascript'
        }
      ]
    : []
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
