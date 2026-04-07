<script setup lang="ts">
const site = useSiteContent()

usePageSeo(
  'Espaces de réception | Château de Rajat',
  'Découvrez les espaces de réception du Château de Rajat: Château, Orangerie et extérieurs dans un domaine près de Lyon.',
  '/img/chateau/chateau.jpg'
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Nos espaces de réception"
      title="Des espaces complémentaires pour composer des événements à la fois élégants et fluides."
      description="Le Château, l’Orangerie et les extérieurs offrent des atmosphères distinctes pour accueillir réceptions, séminaires, cocktails et célébrations."
      image="/img/chateau/chateau.jpg"
      compact
    />

    <ContentSection
      eyebrow="Les lieux"
      title="Trois signatures pour raconter Rajat"
      description="Chaque espace possède sa personnalité, son rythme et sa manière d’accueillir les invités dans le domaine."
    >
      <CardGrid :items="site.spaces" columns="3" />
    </ContentSection>

    <ContentSection
      eyebrow="Repères"
      title="Une lecture plus simple pour choisir le bon espace"
      description="Selon l’événement, le nombre d’invités et l’ambiance souhaitée, chaque espace révèle un visage différent du domaine."
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <article class="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6">
          <h3 class="font-serif-display text-2xl text-[var(--color-ink)]">Le Château</h3>
          <p class="mt-4 text-sm leading-7 text-[var(--color-muted)]">Pour les formats qui recherchent une atmosphère patrimoniale, une réception plus feutrée et une forte valeur perçue.</p>
        </article>
        <article class="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
          <h3 class="font-serif-display text-2xl text-[var(--color-ink)]">L’Orangerie</h3>
          <p class="mt-4 text-sm leading-7 text-[var(--color-muted)]">Pour les grands volumes, les scénographies plus contemporaines et les événements qui demandent beaucoup de lumière.</p>
        </article>
        <article class="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6">
          <h3 class="font-serif-display text-2xl text-[var(--color-ink)]">Le parc</h3>
          <p class="mt-4 text-sm leading-7 text-[var(--color-muted)]">Pour créer l’effet d’arrivée, ouvrir les perspectives et enrichir les temps de réception ou de pause.</p>
        </article>
      </div>
    </ContentSection>

    <ContentSection
      eyebrow="Inspiration"
      title="Des images qui montrent comment les espaces vivent"
      description="La page espaces doit rester très visuelle pour aider à la projection."
    >
      <GalleryGrid :items="site.gallery.slice(0, 5)" />
    </ContentSection>

    <CtaBand
      title="Choisir l’espace le plus adapté à votre format"
      text="Le contact peut se faire à partir d’une simple intention. L’essentiel est de montrer que Rajat sait orienter et accompagner."
    />
  </div>
</template>
