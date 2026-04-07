<script setup lang="ts">
const sourceUrl = ref('https://example.com')
const promptTemplate = computed(() =>
  [
    'Analyse ce site et génère une nouvelle homepage à partir de ce boilerplate.',
    `URL source: ${sourceUrl.value}`,
    'Objectif: extraire le positionnement, la structure d’offre, les éléments de réassurance et proposer une version plus claire et plus premium.',
    'Contrainte: produire uniquement le contenu et la structure de la homepage, sans garder le design existant.'
  ].join('\n')
)
</script>

<template>
  <main class="min-h-screen px-6 py-10">
    <div class="mx-auto flex max-w-5xl flex-col gap-8">
      <section class="rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] px-8 py-10 shadow-2xl shadow-black/20">
        <span class="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          Nuxt Boilerplate
        </span>
        <h1 class="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Base minimale pour générer des sites à partir d’une URL source.
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
          Ce projet ne contient plus de pages métier, de composants de design ou de contenu spécifique.
          Il sert uniquement de point de départ pour qu’une IA puisse reconstruire un site à partir d’un lien.
        </p>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6">
          <h2 class="text-lg font-semibold">Usage prévu</h2>
          <ul class="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
            <li>1. Tu fournis une URL source à une IA.</li>
            <li>2. L’IA analyse l’offre, les sections et le positionnement du site.</li>
            <li>3. Elle génère une nouvelle homepage dans ce repo à partir de cette base Nuxt.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6">
          <h2 class="text-lg font-semibold">Ce que contient encore le projet</h2>
          <ul class="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
            <li>Nuxt 4</li>
            <li>@nuxt/ui</li>
            <li>@nuxt/image</li>
            <li>Une seule page d’accueil neutre</li>
          </ul>
        </div>
      </section>

      <section class="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6">
        <label for="source-url" class="text-sm font-medium text-[var(--text-secondary)]">URL source</label>
        <input
          id="source-url"
          v-model="sourceUrl"
          type="url"
          class="mt-2 w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          placeholder="https://example.com"
        >

        <div class="mt-6 rounded-2xl border border-[var(--border-color)] bg-black/20 p-4">
          <p class="mb-3 text-sm font-medium">Prompt de base à donner à une IA</p>
          <pre class="overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-[var(--text-secondary)]">{{ promptTemplate }}</pre>
        </div>
      </section>
    </div>
  </main>
</template>
