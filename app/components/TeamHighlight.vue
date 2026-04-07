<script setup lang="ts">
const site = useSiteContent()
</script>

<template>
  <section class="section-space">
    <div class="container-site">
      <div class="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
        <div class="space-y-5">
          <div class="relative overflow-hidden rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[0_30px_70px_rgba(77,56,33,0.10)]">
            <NuxtImg src="/img/chateau/team-hero.jpg" alt="Équipe du Château de Rajat" class="h-full min-h-[620px] w-full object-cover" />
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,10,0.04)_0%,rgba(18,14,10,0.18)_38%,rgba(18,14,10,0.78)_100%)]" />
            <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/90 backdrop-blur-sm">
                Accueil, conseil, coordination
              </div>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div class="overflow-hidden rounded-[1.55rem] border border-[var(--color-border)] bg-white/76 p-5 sm:min-h-[14rem]">
              <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">20+ ans</p>
              <p class="mt-3 max-w-full break-words font-serif-display text-[1.4rem] leading-[1.05] text-[var(--color-ink)] hyphens-auto sm:text-[1.55rem]">
                Expérience événementielle
              </p>
            </div>
            <div class="overflow-hidden rounded-[1.55rem] border border-[var(--color-border)] bg-white/76 p-5 sm:min-h-[14rem]">
              <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">Sur mesure</p>
              <p class="mt-3 max-w-full break-words font-serif-display text-[1.4rem] leading-[1.05] text-[var(--color-ink)] hyphens-auto sm:text-[1.55rem]">
                Accompagnement et personnalisation
              </p>
            </div>
            <div class="overflow-hidden rounded-[1.55rem] border border-[var(--color-border)] bg-white/76 p-5 sm:min-h-[14rem]">
              <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">Jour J</p>
              <p class="mt-3 max-w-full break-words font-serif-display text-[1.4rem] leading-[1.05] text-[var(--color-ink)] hyphens-auto sm:text-[1.55rem]">
                Régie et coordination terrain
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Notre équipe"
            title="Une équipe présente à chaque étape, de la première conversation au jour J."
            description="Au Château de Rajat, l’accompagnement fait partie intégrante de l’expérience. L’équipe veille à chaque détail pour accueillir, conseiller et coordonner avec justesse."
          />

          <div class="mt-10 rounded-[2.1rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.62)] p-6 shadow-[0_24px_56px_rgba(77,56,33,0.06)] sm:p-8">
            <div
              v-for="(member, index) in site.team"
              :key="member.name"
              class="grid gap-5 py-7 lg:grid-cols-[0.92fr_1.08fr]"
              :class="index !== site.team.length - 1 ? 'border-b border-[var(--color-border)]' : ''"
            >
              <div>
                <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">{{ member.role }}</p>
                <h3 class="mt-3 font-serif-display text-[2.85rem] leading-[0.92] text-[var(--color-ink)]">
                  {{ member.name }}
                </h3>
              </div>

              <div>
                <p class="max-w-xl text-sm leading-8 text-[var(--color-muted)]">
                  {{ member.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
