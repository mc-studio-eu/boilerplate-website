<script setup lang="ts">
const site = useSiteContent()
</script>

<template>
  <footer class="mt-10 border-t border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(245,238,228,0.55)_0%,rgba(239,231,220,0.92)_100%)]">
    <div class="container-site py-5">
      <div class="flex flex-col gap-3 rounded-[1.6rem] border border-[var(--color-border)] bg-white/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-accent-deep)]">Château de Rajat</p>
        <p class="text-sm text-[var(--color-muted)]">Lieu de réception premium près de Lyon pour événements d’entreprise et réceptions privées.</p>
      </div>
    </div>
    <div class="container-site grid gap-10 py-14 lg:grid-cols-[1.15fr_0.8fr_0.85fr]">
      <div class="space-y-5">
        <NuxtImg src="/img/chateau/logo.webp" alt="Château de Rajat" class="h-10 w-auto object-contain" />
        <p class="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          Lieu de réception aux portes de Lyon, le Château de Rajat accueille événements d’entreprise,
          mariages et célébrations dans un cadre de caractère, lumineux et accessible.
        </p>
        <div class="flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
          <a
            v-for="social in site.socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            class="inline-flex rounded-full border border-[var(--color-border)] px-3 py-2 transition hover:border-[var(--color-border-strong)] hover:bg-white/65 hover:text-[var(--color-ink)]"
          >
            {{ social.label }}
          </a>
        </div>
      </div>

      <div>
        <h2 class="footer-title">Navigation</h2>
        <ul class="space-y-3 text-sm text-[var(--color-muted)]">
          <li v-for="item in site.navigation" :key="item.to">
            <NuxtLink :to="item.to" class="transition hover:text-[var(--color-ink)]">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">Coordonnées</h2>
        <div class="space-y-3 text-sm text-[var(--color-muted)]">
          <p v-for="line in site.address" :key="line">{{ line }}</p>
          <p><a :href="site.emailHref" class="transition hover:text-[var(--color-ink)]">{{ site.email }}</a></p>
          <p><a :href="site.phoneHref" class="transition hover:text-[var(--color-ink)]">{{ site.phone }}</a></p>
          <p><a :href="site.mapUrl" target="_blank" rel="noreferrer" class="transition hover:text-[var(--color-ink)]">Voir l’itinéraire</a></p>
        </div>
      </div>
    </div>
    <div class="border-t border-[var(--color-border)]">
      <div class="container-site flex flex-col gap-3 py-5 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Château de Rajat. Tous droits réservés.</p>
        <p>Site vitrine premium conçu pour clarifier l’offre et valoriser le lieu.</p>
      </div>
    </div>
  </footer>
</template>
