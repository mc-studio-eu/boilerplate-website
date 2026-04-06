<script setup lang="ts">
const site = useBoilerplateSite()

const currentIndex = ref(0)
const isPaused = ref(false)
let autoScrollInterval: ReturnType<typeof setInterval> | null = null

const nextQuote = () => {
  currentIndex.value = (currentIndex.value + 1) % site.quotes.value.length
}

const prevQuote = () => {
  currentIndex.value = (currentIndex.value - 1 + site.quotes.value.length) % site.quotes.value.length
}

const currentQuote = computed(() => site.quotes.value[currentIndex.value])

const startAutoScroll = () => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
  autoScrollInterval = setInterval(() => {
    if (!isPaused.value) nextQuote()
  }, 5000)
}

onMounted(startAutoScroll)

onUnmounted(() => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
})
</script>

<template>
  <p class="text-gradient text-center mb-2">{{ site.copy.value.proof.kicker }}</p>
  <p class="text-gradient text-center text-lg sm:text-xl md:text-3xl max-w-3xl mx-auto">{{ site.copy.value.proof.intro }}</p>

  <section id="avis" class="py-12 px-6 sm:py-20 bg-[var(--bg-primary)]" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    <div class="max-w-[1216px] mx-auto">
      <h2 class="section-title text-center font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-6 sm:mb-8 text-[var(--text-primary)]">
        {{ site.copy.value.proof.title }}
      </h2>

      <div v-if="currentQuote" class="w-full max-w-[460px] mx-auto p-6 bg-[#232323] border border-[var(--border-subtle)] rounded-2xl h-[300px] sm:h-[230px] flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        <div class="flex flex-col sm:gap-0 gap-4 justify-between h-full">
          <p class="font-inter text-xs sm:text-sm leading-[1.7] text-white">
            {{ currentQuote.content }}
          </p>

          <div class="flex sm:flex-row flex-col sm:items-center justify-between gap-2 sm:gap-4">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full bg-[linear-gradient(135deg,var(--color-gold)_0%,#e8a84c_100%)] flex items-center justify-center text-[#0f0f0f] font-semibold">
                {{ site.companyInitials.value }}
              </div>
              <div class="flex flex-col gap-[2px]">
                <span class="font-inter text-sm font-semibold text-[var(--text-primary)]">{{ currentQuote.author.name }}</span>
                <span class="font-inter text-xs text-[var(--text-secondary)]">{{ currentQuote.author.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
        <div class="flex gap-3">
          <button class="flex items-center justify-center w-11 h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)]" @click="prevQuote" aria-label="Previous card">
            <UIcon name="i-lucide-chevron-left" />
          </button>
          <button class="flex items-center justify-center w-11 h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)]" @click="nextQuote" aria-label="Next card">
            <UIcon name="i-lucide-chevron-right" />
          </button>
        </div>

        <div class="flex items-center gap-3">
          <button
            v-for="(quote, index) in site.quotes.value"
            :key="quote.id"
            class="w-6 h-1 rounded bg-[var(--border-subtle)] border-none cursor-pointer p-0 transition-all duration-300 hover:bg-[var(--text-secondary)]"
            :class="{ '!bg-[var(--color-gold)] !w-8': currentIndex === index }"
            @click="currentIndex = index"
            :aria-label="`Go to card ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
