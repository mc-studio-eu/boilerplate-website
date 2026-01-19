<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('legal.privacy.title').replace(/<[^>]*>/g, '') + ' | MC Studio',
  meta: [
    { name: 'description', content: t('legal.privacy.subtitle') }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#010201] text-white pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6">
    <div class="max-w-3xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-manrope" v-html="$t('legal.privacy.title')"></h1>
        <p class="text-white/60 font-inter">{{ $t('legal.privacy.subtitle') }}</p>
      </div>
      
      <div class="prose prose-invert prose-gold max-w-none font-inter text-white/80" v-html="$t('legal.privacy.content')"></div>
      
      <div class="mt-12 text-center">
        <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 text-[#f0bf6c] hover:text-[#e8a84c] transition-colors font-medium">
          <UIcon name="i-heroicons-arrow-left" />
          {{ t('nav.book_call') === 'Book a call' ? 'Back to home' : 'Retour à l\'accueil' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(h2) {
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

:deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
</style>
