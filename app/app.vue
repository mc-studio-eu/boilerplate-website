<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => t('meta.title')),
  meta: [
    { name: 'description', content: computed(() => t('meta.description')) },
    { property: 'og:title', content: computed(() => t('meta.title')) },
    { property: 'og:description', content: computed(() => t('meta.description')) }
  ]
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
