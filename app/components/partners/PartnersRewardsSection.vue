<script setup lang="ts">
const { t } = useI18n()

const tiers = [1, 2, 3]
const activeTier = ref(1)
const isPaused = ref(false)

let interval: ReturnType<typeof setInterval>

const setTier = (tier: number) => {
  activeTier.value = tier
  isPaused.value = true
}

onMounted(() => {
  interval = setInterval(() => {
    if (!isPaused.value) {
      activeTier.value = activeTier.value === 3 ? 1 : activeTier.value + 1
    }
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section
    class="py-20 px-6 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300"
  >
    <div class="max-w-[1216px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Visuel / carte dynamique, à gauche -->
        <div class="relative min-h-[320px] flex items-center justify-center order-2 lg:order-1">
          <div
            class="absolute inset-0 bg-[var(--color-gold)]/10 rounded-full blur-[100px] opacity-40 transition-all duration-700"
            :class="{
              'translate-x-0': activeTier === 1,
              'translate-x-6': activeTier === 2,
              '-translate-x-6': activeTier === 3
            }"
          ></div>

          <div
            class="relative w-full max-w-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-6 py-6 flex flex-col gap-4"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <p class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              {{ t('partners.rewards.label') }}
              <span class="text-[var(--color-gold)]">0{{ activeTier }}</span>
            </p>

            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
              mode="out-in"
            >
              <div :key="activeTier" class="space-y-3">
                <template v-if="activeTier === 1">
                  <h3 class="font-manrope text-xl font-semibold text-[var(--text-primary)]">
                    {{ t('partners.rewards.card.tier_1_title') }}
                  </h3>
                  <p class="font-inter text-xs text-[var(--text-secondary)]">
                    {{ t('partners.rewards.card.tier_1_text') }}
                  </p>
                </template>

                <template v-else-if="activeTier === 2">
                  <h3 class="font-manrope text-xl font-semibold text-[var(--color-gold)]">
                    {{ t('partners.rewards.card.tier_2_title') }}
                  </h3>
                  <p class="font-inter text-xs text-[var(--text-secondary)]">
                    {{ t('partners.rewards.card.tier_2_text') }}
                  </p>
                </template>

                <template v-else>
                  <h3 class="font-manrope text-xl font-semibold text-[var(--text-primary)]">
                    {{ t('partners.rewards.card.tier_3_title') }}
                  </h3>
                  <p class="font-inter text-xs text-[var(--text-secondary)]">
                    {{ t('partners.rewards.card.tier_3_text') }}
                  </p>
                </template>
              </div>
            </Transition>

            <div class="flex items-center gap-3 pt-2">
              <div
                class="rounded-xl px-3 py-2 border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10"
              >
                <p class="font-inter text-[11px] text-[var(--color-gold)]">
                  {{ t('partners.rewards.card.badge') }}
                </p>
              </div>
              <p class="font-inter text-[11px] text-[var(--text-secondary)]">
                {{ t('partners.rewards.card.note') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Texte + slider de paliers, à droite -->
        <div class="order-1 lg:order-2">
          <div class="mb-8 space-y-3">
            <p
              class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]"
            >
              {{ t('partners.rewards.label') }}
            </p>
            <div class="space-y-4">
          <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-gradient">
            {{ t('partners.rewards.title') }}
          </h2>
          <p
            class="font-inter text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
            v-html="t('partners.rewards.subtitle')"
          ></p>
        </div>
          </div>

          <div class="space-y-5">
            <div
              v-for="tier in tiers"
              :key="tier"
              class="flex gap-4 group cursor-pointer"
              @click="setTier(tier)"
              @mouseenter="isPaused = true"
              @mouseleave="isPaused = false"
            >
              <div
                class="mt-1 flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-inter transition-all duration-300"
                :class="
                  activeTier === tier
                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-black'
                    : 'border-[var(--border-subtle)] bg-transparent text-[var(--text-secondary)] group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)]'
                "
              >
                0{{ tier }}
              </div>
              <div
                class="space-y-1 transition-all duration-300"
                :class="activeTier === tier ? 'opacity-100 translate-x-1' : 'opacity-60 group-hover:opacity-90'"
              >
                <h3
                  class="font-inter text-sm font-semibold transition-colors duration-300"
                  :class="activeTier === tier ? 'text-[var(--color-gold)]' : 'text-[var(--text-primary)]'"
                >
                  <span v-if="tier === 1">{{ t('partners.rewards.list.tier_1_title') }}</span>
                  <span v-else-if="tier === 2">{{ t('partners.rewards.list.tier_2_title') }}</span>
                  <span v-else>{{ t('partners.rewards.list.tier_3_title') }}</span>
                </h3>
                <p class="font-inter text-xs leading-relaxed text-[var(--text-secondary)] max-w-[480px]">
                  <span v-if="tier === 1">
                    {{ t('partners.rewards.list.tier_1_text') }}
                  </span>
                  <span v-else-if="tier === 2">
                    {{ t('partners.rewards.list.tier_2_text') }}
                  </span>
                  <span v-else>
                    {{ t('partners.rewards.list.tier_3_text') }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
