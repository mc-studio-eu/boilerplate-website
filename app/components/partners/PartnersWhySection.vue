<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section
    id="pourquoi"
    class="py-16 px-0 sm:px-4 bg-[var(--bg-primary)] transition-colors duration-300"
  >
    <div class="max-w-[1216px] mx-auto px-4 sm:px-0">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
        <div class="space-y-4">
          <h2
            class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-gradient"
          >
            {{ t('partners.why.title') }}
          </h2>
          <p
            class="font-inter text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
          >
            {{ t('partners.why.subtitle') }}
          </p>
        </div>

        <div
          class="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-5 py-4 max-w-[360px]"
        >
          <p class="font-inter text-xs text-[var(--text-secondary)] leading-relaxed">
            {{ t('partners.why.side') }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.why.items.income.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.why.items.income.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.why.items.transparency.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.why.items.transparency.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.why.items.tracking.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.why.items.tracking.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.why.items.monetization.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.why.items.monetization.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.why.items.app.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.why.items.app.text') }}
          </p>
        </div>

        <div class="theme-bg-card theme-border rounded-xl border p-4 flex flex-col gap-2">
          <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
            {{ t('partners.why.items.long_term.title') }}
          </h3>
          <p class="font-inter text-xs text-[var(--text-secondary)]">
            {{ t('partners.why.items.long_term.text') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

