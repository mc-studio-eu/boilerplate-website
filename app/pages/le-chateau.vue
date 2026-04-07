<script setup lang="ts">
const site = useSiteContent()

usePageSeo(
  'Le Château | Château de Rajat',
  'Histoire, positionnement, équipe et philosophie du Château de Rajat, lieu de réception près de Lyon.',
  '/img/chateau/park.jpg'
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Le Château"
      title="Un domaine qui conjugue patrimoine, hospitalité et culture de l’événement."
      description="Le Château de Rajat réunit une histoire, un cadre paysager et une culture de l’accueil au service des événements professionnels et privés."
      image="/img/chateau/park.jpg"
      compact
    />

    <ContentSection
      eyebrow="Positionnement"
      title="Ce qui fait la singularité de Rajat"
      description="Le domaine associe cachet patrimonial, accessibilité, espaces variés et attention portée à l’accueil."
    >
      <FeatureGrid :items="site.history" />
    </ContentSection>

    <section class="section-space">
      <div class="container-site grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div class="overflow-hidden rounded-[2rem]">
          <NuxtImg src="/img/chateau/team.jpg" alt="Équipe du Château de Rajat" class="h-full w-full object-cover" />
        </div>
        <div>
          <p class="eyebrow">Équipe</p>
          <h2 class="mt-4 font-serif-display text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
            Une présence attentive avant, pendant et après l’événement.
          </h2>
          <p class="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Le standing du lieu s’exprime aussi dans la qualité d’accompagnement, l’écoute et le soin porté au bon déroulement de chaque projet.
          </p>
        </div>
      </div>
    </section>

    <ContentSection
      eyebrow="Portraits"
      title="Les personnes qui font vivre le lieu"
      description="Le discours gagne en chaleur et en crédibilité lorsqu’il montre les visages, les rôles et la manière d’accompagner."
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <article
          v-for="member in site.team"
          :key="member.name"
          class="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-6"
        >
          <p class="font-serif-display text-3xl text-[var(--color-ink)]">{{ member.name }}</p>
          <p class="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">{{ member.role }}</p>
          <p class="mt-5 text-sm leading-7 text-[var(--color-muted)]">{{ member.bio }}</p>
        </article>
      </div>
    </ContentSection>

    <CtaBand
      title="Découvrir Rajat au-delà des images"
      text="Le Château de Rajat se découvre dans ses volumes, ses perspectives, son parc et la qualité d’accueil de son équipe."
    />
  </div>
</template>
