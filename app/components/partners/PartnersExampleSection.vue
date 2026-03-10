<template>
  <section
    class="py-16 px-0 sm:px-4 bg-[var(--bg-primary)] transition-colors duration-300"
  >
    <div
      class="max-w-[1216px] mx-auto px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center"
    >
      <div class="space-y-4">
        <p class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
          Exemple concret de gain
        </p>
        <h2
          class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-[var(--text-primary)]"
        >
          Un exemple simple pour vous projeter.
        </h2>
        <p
          class="text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
        >
          Vous recommandez un prospect qui a un besoin clair pour refondre son produit ou lancer une
          nouvelle interface. Après cadrage, le projet est signé à
          <span class="font-semibold text-[var(--color-gold)]">15&nbsp;000&nbsp;€ HT</span>.
        </p>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="theme-bg-card theme-border rounded-xl border px-4 py-4">
            <p class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              Montant du projet
            </p>
            <p class="font-manrope text-2xl font-semibold text-[var(--text-primary)] mt-1">
              15&nbsp;000&nbsp;€
            </p>
          </div>

          <div class="theme-bg-card theme-border rounded-xl border px-4 py-4">
            <p class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              Taux de commission
            </p>
            <p class="font-manrope text-2xl font-semibold text-[var(--text-primary)] mt-1">
              10&nbsp;%
            </p>
          </div>

          <div class="theme-bg-card theme-border rounded-xl border px-4 py-4">
            <p class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              Commission versée
            </p>
            <p class="font-manrope text-2xl font-semibold text-[var(--color-gold)] mt-1">
              1&nbsp;500&nbsp;€
            </p>
          </div>
        </div>
      </div>

      <div
        class="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 px-6 py-6 flex flex-col gap-4"
      >
        <p class="font-inter text-sm text-[var(--text-primary)]">
          «&nbsp;L’ambition du programme Partner n’est pas de multiplier les leads, mais de concentrer notre
          énergie sur des recommandations vraiment qualifiées. Si vous partagez cette vision, on avancera
          très bien ensemble.&nbsp;»
        </p>
        <div class="flex items-center gap-3">
          <div
            class="w-[44px] h-[44px] rounded-lg bg-[linear-gradient(135deg,var(--color-gold)_0%,#e8a84c_100%)] flex items-center justify-center font-inter font-bold text-sm text-black shrink-0 relative overflow-hidden"
          >
            <NuxtImg
              src="/img/main/founder.png"
              alt="Avatar de Mohamed Chettah"
              width="44"
              height="44"
              class="rounded-md object-cover absolute inset-0 w-full h-full"
            />
          </div>
          <div class="flex flex-col">
            <span class="font-inter text-xs font-semibold text-[var(--text-primary)]">
              Mohamed Chettah
            </span>
            <span class="font-inter text-[11px] text-[var(--text-secondary)]">
              Fondateur · MC Studio
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

