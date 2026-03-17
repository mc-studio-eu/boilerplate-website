<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <section
      id="principe"
      class="pt-24 pb-16 px-0 sm:px-4 bg-[var(--bg-primary)] transition-colors duration-300"
    >
      <div class="max-w-[1216px] mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <div class="space-y-4">
          <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-gradient">
            {{ t('partners.principle.title') }}
          </h2>
          <p
            class="font-inter text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
            v-html="t('partners.principle.subtitle')"
          ></p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          <div
            class="theme-bg-card theme-border rounded-xl border px-4 py-4 flex flex-col gap-2"
          >
            <span class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
              {{ t('partners.principle.steps.1.label') }}
            </span>
            <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
              {{ t('partners.principle.steps.1.title') }}
            </h3>
            <p class="font-inter text-xs text-[var(--text-secondary)]">
              {{ t('partners.principle.steps.1.text') }}
            </p>
          </div>

          <div
            class="theme-bg-card theme-border rounded-xl border px-4 py-4 flex flex-col gap-2"
          >
            <span class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
              {{ t('partners.principle.steps.2.label') }}
            </span>
            <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
              {{ t('partners.principle.steps.2.title') }}
            </h3>
            <p class="font-inter text-xs text-[var(--text-secondary)]">
              {{ t('partners.principle.steps.2.text') }}
            </p>
          </div>

          <div
            class="theme-bg-card theme-border rounded-xl border px-4 py-4 flex flex-col gap-2"
          >
            <span class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
              {{ t('partners.principle.steps.3.label') }}
            </span>
            <h3 class="font-inter font-semibold text-sm text-[var(--text-primary)]">
              {{ t('partners.principle.steps.3.title') }}
            </h3>
            <p class="font-inter text-xs text-[var(--text-secondary)]">
              {{ t('partners.principle.steps.3.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
