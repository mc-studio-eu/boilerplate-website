<script setup lang="ts">
const site = useSiteContent()

usePageSeo(
  'Château de Rajat | Lieu de réception premium près de Lyon',
  'Site vitrine premium du Château de Rajat: événements d’entreprise, mariages, espaces de réception, galerie et prise de contact.',
  site.home.heroImage
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Lieu de réception d’exception"
      :title="site.home.heroTitle"
      :description="site.home.heroText"
      :image="site.home.heroImage"
    />

    <section class="section-space">
      <div class="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <SectionHeading
          eyebrow="Présentation"
          title="Un domaine de caractère pour recevoir, célébrer et se retrouver dans un cadre d’exception."
          description="Aux portes de Lyon, Rajat réunit patrimoine, lumière, parc arboré et accompagnement sur mesure pour les événements professionnels comme les réceptions privées."
        />
        <div class="rounded-[1.75rem] border border-[var(--color-border)] bg-[linear-gradient(145deg,#f5ebe0_0%,#f0e3d6_100%)] p-7 shadow-[0_22px_50px_rgba(84,52,28,0.07)]">
          <p class="eyebrow">Le domaine</p>
          <h3 class="mt-4 font-serif-display text-3xl leading-tight text-[var(--color-ink)]">Un château, une Orangerie et un parc pour accueillir des formats variés avec élégance.</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="stat in site.home.stats" :key="stat" class="flex items-start gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <span class="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span>{{ stat }}</span>
            </li>
          </ul>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/contact" class="btn-primary">Contactez-nous</NuxtLink>
            <a :href="site.phoneHref" class="btn-secondary text-center">{{ site.phone }}</a>
          </div>
        </div>
      </div>
    </section>

    <ContentSection
      eyebrow="Univers"
      title="Deux univers pour les événements d’entreprise et les réceptions privées"
      description="Le Château de Rajat accueille aussi bien les formats corporate que les moments de célébration, dans un même esprit d’exigence et d’hospitalité."
    >
      <CardGrid :items="site.universes" columns="2" />
    </ContentSection>

    <ContentSection
      eyebrow="Espaces"
      title="Des espaces de réception qui portent chacun une ambiance distincte"
      description="Le Château, l’Orangerie et les extérieurs composent des atmosphères complémentaires pour accueillir plusieurs usages et plusieurs rythmes."
    >
      <CardGrid :items="site.spaces" columns="3" />
    </ContentSection>

    <ContentSection
      eyebrow="Temps forts"
      title="Événements d’entreprise et réceptions privées"
      description="Séminaires, soirées, mariages ou célébrations prennent place dans un domaine pensé pour recevoir avec attention."
    >
      <div class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-8">
          <p class="eyebrow">Entreprise</p>
          <h3 class="mt-4 font-serif-display text-4xl text-[var(--color-ink)]">Un cadre à la hauteur des formats corporate exigeants</h3>
          <p class="mt-5 text-base leading-8 text-[var(--color-muted)]">
            Séminaires, conventions, soirées de gala ou lancements trouvent ici un lieu à la fois marquant, accessible et agréable à vivre.
          </p>
          <NuxtLink to="/evenements-entreprise" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-deep)]">
            Explorer l’univers entreprise
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </article>

        <article class="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-8">
          <p class="eyebrow">Particuliers</p>
          <h3 class="mt-4 font-serif-display text-4xl text-[var(--color-ink)]">Une destination chaleureuse pour les moments importants</h3>
          <p class="mt-5 text-base leading-8 text-[var(--color-muted)]">
            Mariages et célébrations privées s’appuient sur un décor de caractère, beaucoup de lumière et un accompagnement qui rassure.
          </p>
          <NuxtLink to="/evenements-particuliers" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-deep)]">
            Explorer l’univers particuliers
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </article>
      </div>
    </ContentSection>

    <ContentSection
      eyebrow="Galerie"
      title="Une sélection d’images pour laisser le lieu parler"
      description="Façades, salons, Orangerie, parc et ambiances de réception donnent à voir les différentes facettes du domaine."
    >
      <GalleryGrid :items="site.gallery.slice(0, 6)" />
    </ContentSection>

    <TeamHighlight />

    <ContentSection
      eyebrow="Crédibilité"
      title="Ce que les invités et organisateurs retiennent du lieu"
      description="Le standing du domaine doit être renforcé par des preuves sobres, lisibles et crédibles."
    >
      <QuoteGrid :items="site.quotes" />
    </ContentSection>

    <CtaBand
      title="Parlons de votre événement"
      text="Mariage, séminaire, réception ou soirée: l’équipe du Château de Rajat vous accompagne pour imaginer un événement à la hauteur du lieu."
    />
  </div>
</template>
