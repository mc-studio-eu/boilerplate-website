<script setup lang="ts">
const localePath = useLocalePath()
const site = useBoilerplateSite()

const title = computed(() => (site.locale.value === 'fr' ? "Conditions d'utilisation" : 'Terms of Use'))
const subtitle = computed(() =>
  site.locale.value === 'fr'
    ? 'Base générique à compléter avant mise en production.'
    : 'Generic base to complete before going live.'
)
const content = computed(() =>
  site.locale.value === 'fr'
    ? `
      <h2>1. Acceptation</h2>
      <p>En utilisant ce site, vous acceptez les présentes conditions. Elles doivent être adaptées à l’activité réelle de ${site.companyName.value}.</p>
      <h2>2. Services</h2>
      <p>Décrivez ici les services, produits ou contenus réellement proposés via le site.</p>
      <h2>3. Propriété intellectuelle</h2>
      <p>Les textes, composants, visuels et éléments de marque présents sur le site sont protégés selon le droit applicable.</p>
      <h2>4. Responsabilité</h2>
      <p>Précisez ici vos limites de responsabilité, vos exclusions et les conditions d’usage du contenu.</p>
      <h2>5. Modifications</h2>
      <p>Ces conditions peuvent être mises à jour. Pensez à dater la version publiée.</p>
    `
    : `
      <h2>1. Acceptance</h2>
      <p>By using this site, you agree to these terms. They should be adapted to the actual activity of ${site.companyName.value}.</p>
      <h2>2. Services</h2>
      <p>Describe here the actual services, products or content offered through the site.</p>
      <h2>3. Intellectual property</h2>
      <p>Texts, components, visuals and brand assets on the site are protected under applicable law.</p>
      <h2>4. Liability</h2>
      <p>Specify your liability limits, exclusions and content usage rules here.</p>
      <h2>5. Changes</h2>
      <p>These terms may be updated. Add a published version date before launch.</p>
    `
)

useHead({
  title: computed(() => `${title.value} | ${site.companyName.value}`),
  meta: [{ name: 'description', content: subtitle }]
})
</script>

<template>
  <div class="min-h-screen bg-[#010201] text-white pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6">
    <div class="max-w-3xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-manrope">{{ title }}</h1>
        <p class="text-white/60 font-inter">{{ subtitle }}</p>
      </div>

      <div class="prose prose-invert prose-gold max-w-none font-inter text-white/80" v-html="content" />

      <div class="mt-12 text-center">
        <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 text-[#f0bf6c] hover:text-[#e8a84c] transition-colors font-medium">
          <UIcon name="i-heroicons-arrow-left" />
          {{ site.locale.value === 'en' ? 'Back to home' : "Retour à l'accueil" }}
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
