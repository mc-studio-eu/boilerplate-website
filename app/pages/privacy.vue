<script setup lang="ts">
const localePath = useLocalePath()
const site = useBoilerplateSite()

const title = computed(() => (site.locale.value === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'))
const subtitle = computed(() =>
  site.locale.value === 'fr'
    ? 'Version générique à adapter selon votre collecte réelle de données.'
    : 'Generic version to adapt to your actual data collection.'
)
const content = computed(() =>
  site.locale.value === 'fr'
    ? `
      <h2>1. Objet</h2>
      <p>Cette politique décrit la manière dont ${site.companyName.value} peut collecter, utiliser et protéger les données personnelles transmises via ce site.</p>
      <h2>2. Données concernées</h2>
      <p>Selon les blocs que vous activez, ce site peut traiter des données de contact, de navigation, de prise de rendez-vous ou de formulaire. Adaptez cette section à votre stack réelle.</p>
      <h2>3. Finalités</h2>
      <p>Les données peuvent être utilisées pour répondre à une demande, planifier un échange, améliorer le site ou suivre l’activité marketing.</p>
      <h2>4. Prestataires</h2>
      <p>Listez ici vos outils réels: hébergement, analytics, calendrier, CRM, emailing, support ou paiement.</p>
      <h2>5. Contact</h2>
      <p>Ajoutez ici votre adresse de contact ou votre DPO avant mise en production.</p>
    `
    : `
      <h2>1. Purpose</h2>
      <p>This policy describes how ${site.companyName.value} may collect, use and protect personal data shared through this website.</p>
      <h2>2. Data involved</h2>
      <p>Depending on the enabled blocks, this site may process contact, browsing, scheduling or form data. Adapt this section to your real stack.</p>
      <h2>3. Purposes</h2>
      <p>Data may be used to respond to requests, schedule calls, improve the site or monitor marketing activity.</p>
      <h2>4. Vendors</h2>
      <p>List your actual tools here: hosting, analytics, scheduler, CRM, email, support or payment providers.</p>
      <h2>5. Contact</h2>
      <p>Add your contact address or DPO details here before going live.</p>
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
