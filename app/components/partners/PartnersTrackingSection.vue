<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section
    id="suivi"
    class="py-16 px-0 sm:px-4 bg-[var(--bg-primary)] transition-colors duration-300"
  >
    <div
      class="max-w-[1216px] mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-16 items-start"
    >
      <div class="space-y-4">
        <h2
          class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-gradient"
        >
          {{ t('partners.tracking.title') }}
        </h2>
        <p
          class="font-inter text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
        >
          {{ t('partners.tracking.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.tracking.items.prospects.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.tracking.items.prospects.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.tracking.items.contracts.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.tracking.items.contracts.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.tracking.items.revenue.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.tracking.items.revenue.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.tracking.items.commissions.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.tracking.items.commissions.text') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

