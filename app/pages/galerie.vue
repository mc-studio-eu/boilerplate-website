<script setup lang="ts">
const site = useSiteContent()

usePageSeo(
  'Galerie | Château de Rajat',
  'Galerie photo du Château de Rajat: domaine, espaces de réception, Orangerie, parc et ambiances événementielles.',
  '/img/chateau/hero.jpg'
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Galerie"
      title="Une lecture plus visuelle du domaine, de ses volumes et de ses ambiances."
      description="Façades, salons, Orangerie, parc et instants de réception composent une galerie fidèle à l’esprit du domaine."
      image="/img/chateau/hero.jpg"
      compact
    />

    <ContentSection
      eyebrow="Sélection"
      title="Le lieu, les matières, la lumière et les usages"
      description="Chaque image montre une facette du Château de Rajat, entre patrimoine, nature, réception et moments partagés."
    >
      <GalleryGrid :items="site.gallery" />
    </ContentSection>

    <CtaBand
      title="Voir le lieu en vrai"
      text="La galerie prépare la visite, mais ne la remplace pas. Le prochain pas reste la découverte sur place et l’échange autour du projet."
    />
  </div>
</template>
