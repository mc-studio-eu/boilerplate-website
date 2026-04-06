<script setup lang="ts">
const site = useBoilerplateSite()

const projectCtaBtn = ref(null)
const projectCtaWrapper = ref(null)
useTextSlideAnimation(projectCtaBtn, projectCtaWrapper)

const currentIndex = ref(0)
const isPaused = ref(false)
let autoScrollInterval: ReturnType<typeof setInterval> | null = null

const nextProject = () => {
  currentIndex.value = (currentIndex.value + 1) % site.showcaseItems.value.length
}

const prevProject = () => {
  currentIndex.value = (currentIndex.value - 1 + site.showcaseItems.value.length) % site.showcaseItems.value.length
}

const currentProject = computed(() => site.showcaseItems.value[currentIndex.value])

const startAutoScroll = () => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
  autoScrollInterval = setInterval(() => {
    if (!isPaused.value) nextProject()
  }, 5000)
}

onMounted(startAutoScroll)

onUnmounted(() => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
})
</script>

<template>
  <section id="showcase" class="py-16 md:py-20 px-6 bg-[var(--bg-primary)]" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    <div class="max-w-[1000px] mx-auto">
      <div class="text-center mb-10 md:mb-16">
        <p class="text-gradient text-sm uppercase tracking-[0.24em] mb-3">{{ site.copy.value.showcase.kicker }}</p>
        <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 text-[var(--text-primary)]">
          {{ site.copy.value.showcase.title }}
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-[var(--text-secondary)]">
          {{ site.copy.value.showcase.subtitle }}
        </p>
      </div>

      <div v-if="currentProject" class="flex flex-col gap-6">
        <div class="flex flex-col md:flex-row md:items-start gap-8">
          <div class="shrink-0 w-full max-w-[510px] rounded-xl overflow-hidden">
            <NuxtImg :src="currentProject.image" :alt="currentProject.title" class="w-full h-[250px] sm:h-[400px] object-cover" />
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-manrope text-2xl font-semibold text-[var(--text-primary)]">{{ currentProject.title }}</h3>
            <p class="font-inter text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{{ currentProject.description }}</p>

            <div class="flex flex-wrap gap-2">
              <UBadge v-for="tag in currentProject.tags" :key="tag" variant="outline" class="font-inter bg-white text-black" size="sm">
                {{ tag }}
              </UBadge>
            </div>

            <a
              ref="projectCtaBtn"
              :href="currentProject.link"
              :target="currentProject.link.startsWith('http') ? '_blank' : undefined"
              class="w-36 flex items-center justify-center h-[30px] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none rounded-lg font-inter font-medium text-sm text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105 no-underline"
            >
              <span class="text-slide-container h-[20px]">
                <span ref="projectCtaWrapper" class="text-slide-wrapper">
                  <span class="text-slide-text h-[20px] leading-[20px]">{{ site.copy.value.showcase.cta }}</span>
                  <span class="text-slide-text h-[20px] leading-[20px]">{{ site.copy.value.showcase.cta }}</span>
                </span>
              </span>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="ml-1 w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="flex gap-8 mt-2.5 justify-start sm:flex-row flex-col">
          <div class="flex gap-[18px]">
            <button class="flex items-center justify-center w-[44px] h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)]" @click="prevProject" aria-label="Previous section">
              <UIcon name="i-lucide-chevron-left" />
            </button>
            <button class="flex items-center justify-center w-[44px] h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)]" @click="nextProject" aria-label="Next section">
              <UIcon name="i-lucide-chevron-right" />
            </button>
          </div>

          <div class="flex items-center gap-3">
            <button
              v-for="(project, index) in site.showcaseItems.value"
              :key="project.id"
              class="w-6 h-1 rounded bg-[var(--border-subtle)] border-none cursor-pointer p-0 transition-all duration-300 hover:bg-[var(--text-secondary)]"
              :class="{ '!bg-[var(--color-gold)] !w-8': currentIndex === index }"
              @click="currentIndex = index"
              :aria-label="`Go to section ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-slide-container {
  display: block;
  position: relative;
  overflow: hidden;
}

.text-slide-wrapper {
  display: flex;
  flex-direction: column;
}

.text-slide-text {
  display: block;
}
</style>
