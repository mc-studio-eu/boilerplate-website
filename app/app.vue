<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} · Château de Rajat` : 'Château de Rajat'),
  link: [
    { rel: 'icon', href: 'data:,' },
    { rel: 'shortcut icon', href: 'data:,' },
    { rel: 'apple-touch-icon', href: 'data:,' }
  ],
  meta: [
    {
      name: 'description',
      content: 'Château de Rajat, lieu de réception premium près de Lyon pour événements d’entreprise, mariages et réceptions.'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
