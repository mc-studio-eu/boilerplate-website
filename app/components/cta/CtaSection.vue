<script setup lang="ts">
const site = useBoilerplateSite()

const contactHref = computed(() => {
  if (site.contactEmail.value) return `mailto:${site.contactEmail.value}`
  if (site.sourceLink.value) return site.sourceLink.value
  return '#'
})
</script>

<template>
  <section id="contact" class="py-20 px-6 bg-[var(--bg-primary)] transition-colors duration-300">
    <div class="max-w-[1216px] mx-auto">
      <div class="text-center md:mb-0 mb-10">
        <h2 class="section-title font-manrope text-2xl sm:text-3xl md:text-[32px] font-semibold text-[var(--text-primary)] mb-4">
          {{ site.copy.value.cta.title }}
        </h2>
        <p class="font-inter text-base text-[var(--text-secondary)] max-w-[842px] mx-auto">
          {{ site.copy.value.cta.subtitle }}
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-full max-w-full min-h-[700px] bg-transparent rounded-3xl overflow-hidden">
          <iframe
            v-if="site.calendarUrl.value"
            :src="site.calendarUrl.value"
            style="width: 100%; height: 100%; min-height: 700px; border: none;"
            :title="site.copy.value.cta.embedLabel"
          />

          <div v-else class="min-h-[420px] rounded-3xl border border-[var(--border-subtle)] bg-[#161616] p-8 md:p-12 flex flex-col items-center justify-center text-center gap-5">
            <div class="w-16 h-16 rounded-2xl bg-[linear-gradient(135deg,var(--color-gold)_0%,#e8a84c_100%)] text-[#0f0f0f] flex items-center justify-center font-semibold text-xl">
              {{ site.companyInitials.value }}
            </div>
            <h3 class="font-manrope text-2xl text-[var(--text-primary)]">{{ site.copy.value.cta.fallbackTitle }}</h3>
            <p class="max-w-xl text-sm sm:text-base text-[var(--text-secondary)]">{{ site.copy.value.cta.fallbackText }}</p>
            <a :href="contactHref" :target="contactHref.startsWith('http') ? '_blank' : undefined" class="inline-flex items-center justify-center h-[42px] px-5 rounded-lg bg-[linear-gradient(to_right,white_50%,#f0bf6c)] text-[#0f0f0f] font-medium no-underline">
              {{ site.copy.value.cta.fallbackButton }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
