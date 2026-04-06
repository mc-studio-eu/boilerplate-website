<script setup lang="ts">
const site = useBoilerplateSite()

const stableItems = computed(() =>
  site.locale.value === 'fr'
    ? ['Nuxt 4', 'Nuxt UI', 'GSAP', 'Themes', 'Responsive', 'Sections ancrées']
    : ['Nuxt 4', 'Nuxt UI', 'GSAP', 'Themes', 'Responsive', 'Anchored sections']
)

const adaptiveItems = computed(() =>
  site.locale.value === 'fr'
    ? [site.companyName.value, site.sector.value, site.offer.value, site.audience.value]
    : [site.companyName.value, site.sector.value, site.offer.value, site.audience.value]
)
</script>

<template>
  <section id="system" class="py-12 transition-colors duration-300 sm:px-0 px-6">
    <div class="max-w-[1216px] mx-auto">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 text-[var(--text-primary)]">
          {{ site.copy.value.system.title }}
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-[var(--text-secondary)]">
          {{ site.copy.value.system.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div class="team-card">
          <div class="team-card__inner">
            <div class="p-6 sm:p-8 md:p-10">
              <h3 class="team-title">{{ site.copy.value.system.leftTitle }}</h3>
              <p class="team-paragraph">{{ site.copy.value.system.leftText }}</p>
            </div>

            <div class="px-6 sm:px-8 md:px-10 pb-8">
              <div class="flex flex-wrap gap-3">
                <span v-for="item in stableItems" :key="item" class="team-pill">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="team-card">
          <div class="team-card__inner">
            <div class="p-6 sm:p-8 md:p-10">
              <h3 class="team-title">{{ site.copy.value.system.rightTitle }}</h3>
              <p class="team-paragraph">{{ site.copy.value.system.rightText }}</p>
            </div>

            <div class="px-6 sm:px-8 md:px-10 pb-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div v-for="item in adaptiveItems" :key="item" class="team-member-pill">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10 bg-[#0f0f0f] flex items-center justify-center">
                    <span class="font-inter font-semibold text-xs text-[var(--color-gold)]">{{ site.companyInitials.value }}</span>
                  </div>

                  <div class="min-w-0">
                    <p class="font-inter text-sm font-semibold text-[var(--text-primary)] leading-tight truncate">{{ item }}</p>
                    <p class="font-inter text-[11px] text-[var(--text-secondary)] leading-tight truncate">Dynamic input</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-card {
  border-radius: 28px;
  border: 1px solid var(--border-subtle);
  background: color-mix(in srgb, var(--bg-secondary) 72%, transparent);
  overflow: hidden;
  position: relative;
  min-height: 320px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.team-card__inner {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.team-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 280px at 18% 12%, rgba(240, 191, 108, 0.10), transparent 55%),
    radial-gradient(700px 240px at 80% 35%, rgba(240, 191, 108, 0.08), transparent 60%),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06), transparent 38%);
  pointer-events: none;
}

.team-title {
  font-family: var(--font-manrope, ui-sans-serif);
  font-weight: 500;
  font-size: 26px;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.team-paragraph {
  font-family: var(--font-inter, ui-sans-serif);
  font-size: 0.95rem;
  line-height: 1.65;
  margin-top: 14px;
  color: var(--text-secondary);
}

.team-pill {
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--border-subtle) 75%, transparent);
  background: color-mix(in srgb, var(--bg-primary) 58%, transparent);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  font-size: 0.85rem;
}

.team-member-pill {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem;
  border-radius: 18px;
  border: 1px solid color-mix(in srgb, var(--border-subtle) 75%, transparent);
  background: color-mix(in srgb, var(--bg-primary) 58%, transparent);
}
</style>
