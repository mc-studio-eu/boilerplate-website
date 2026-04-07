<script setup lang="ts">
const site = useSiteContent()

usePageSeo(
  'Événements d’entreprise | Château de Rajat',
  'Séminaires, conventions, soirées de gala, roadshows et team building au Château de Rajat, près de Lyon.',
  '/img/chateau/corporate.jpg'
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Événements d’entreprise"
      title="Un domaine de caractère pour recevoir, réunir et valoriser votre image."
      description="Séminaires, conventions, soirées de gala, lancements et formats corporate trouvent à Rajat un cadre à la fois élégant, accessible et modulable."
      image="/img/chateau/corporate.jpg"
      compact
    />

    <ContentSection
      eyebrow="Formats"
      title="Des formats corporate accueillis dans un même esprit d’exigence"
      description="Le domaine s’adapte à plusieurs configurations, du temps de travail à la réception, dans un cadre qui marque durablement les invités."
    >
      <CardGrid :items="site.corporateFormats" columns="4" />
    </ContentSection>

    <ContentSection
      eyebrow="Bénéfices"
      title="Pourquoi Rajat fonctionne particulièrement bien pour les événements professionnels"
      description="Le lieu conjugue accessibilité, standing, modularité et qualité d’accompagnement pour les entreprises qui veulent recevoir avec soin."
    >
      <FeatureGrid :items="site.corporateBenefits" />
    </ContentSection>

    <section class="section-space">
      <div class="container-site grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div class="overflow-hidden rounded-[2rem]">
          <NuxtImg src="/img/chateau/interior.jpg" alt="Intérieur du Château de Rajat" class="h-full w-full object-cover" />
        </div>
        <div>
          <p class="eyebrow">Accompagnement</p>
          <h2 class="mt-4 font-serif-display text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
            Un lieu premium ne suffit pas, il faut aussi une expérience de préparation fluide.
          </h2>
          <p class="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            À Rajat, la qualité d’accueil, la souplesse des espaces, la proximité de Lyon et l’attention portée à l’organisation contribuent à la réussite de l’événement.
          </p>
          <ul class="mt-8 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
            <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />Accès rapide depuis Lyon et l’aéroport.</li>
            <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />Espaces permettant différentes séquences dans une même journée.</li>
            <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />Accompagnement commercial et coordination terrain.</li>
          </ul>
        </div>
      </div>
    </section>

    <ContentSection
      eyebrow="Espaces adaptés"
      title="Château, Orangerie ou extérieurs selon le format"
      description="Selon le rythme de la journée et l’atmosphère recherchée, chaque espace apporte un cadre différent à l’événement."
    >
      <CardGrid :items="site.spaces" columns="3" />
    </ContentSection>

    <CtaBand
      title="Échanger sur votre prochain événement d’entreprise"
      text="Séminaire résidentiel, lancement, soirée clients ou team building: Rajat peut être présenté comme un lieu premium, lisible et immédiatement crédible."
    />
  </div>
</template>
