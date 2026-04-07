<script setup lang="ts">
useHead({
  title: 'Nuxt Website Boilerplate',
  meta: [
    {
      name: 'description',
      content: 'Base Nuxt minimale pour générer des sites à partir d’une URL source.'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
