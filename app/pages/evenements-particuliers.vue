<script setup lang="ts">
const site = useSiteContent()

usePageSeo(
  'Événements particuliers | Château de Rajat',
  'Mariages, réceptions privées et célébrations au Château de Rajat, dans un cadre de caractère près de Lyon.',
  '/img/chateau/wedding.jpg'
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Événements particuliers"
      title="Un cadre rare pour célébrer les moments qui comptent vraiment."
      description="Mariages, anniversaires et réceptions privées trouvent à Rajat un domaine lumineux, chaleureux et propice aux souvenirs durables."
      image="/img/chateau/wedding.jpg"
      compact
    />

    <ContentSection
      eyebrow="Réceptions"
      title="Mariages et célébrations dans un lieu de caractère"
      description="Le cadre, la lumière et la qualité d’accueil donnent à chaque réception une atmosphère à la fois élégante et profondément chaleureuse."
    >
      <CardGrid :items="site.privateFormats" columns="3" />
    </ContentSection>

    <ContentSection
      eyebrow="Approche"
      title="Une expérience plus sereine, du premier rendez-vous au jour J"
      description="L’équipe accompagne l’organisation avec écoute, précision et attention, pour permettre aux hôtes de profiter pleinement de leur réception."
    >
      <FeatureGrid :items="site.privateBenefits" />
    </ContentSection>

    <section class="section-space">
      <div class="container-site grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p class="eyebrow">Cadre</p>
          <h2 class="mt-4 font-serif-display text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
            Le domaine associe la noblesse du Château, la lumière de l’Orangerie et l’ampleur du parc.
          </h2>
          <p class="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Cette combinaison permet de recevoir les invités dans plusieurs ambiances, avec beaucoup de fluidité entre les différents temps de la journée.
          </p>
        </div>
        <div class="overflow-hidden rounded-[2rem]">
          <NuxtImg src="/img/chateau/hero.jpg" alt="Le domaine du Château de Rajat" class="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <ContentSection
      eyebrow="Témoignages"
      title="Le souvenir d’un lieu magnifique et d’une équipe présente"
      description="Les retours clients mettent en avant la beauté du domaine, la qualité du suivi et la fluidité de l’organisation."
    >
      <QuoteGrid :items="site.quotes.slice(1)" />
    </ContentSection>

    <CtaBand
      title="Contactez-nous pour votre réception"
      text="Mariage, anniversaire ou célébration privée: le Château de Rajat vous accompagne pour imaginer une réception élégante, chaleureuse et sur mesure."
    />
  </div>
</template>
