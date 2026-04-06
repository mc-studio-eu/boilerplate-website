<script setup lang="ts">
const site = useBoilerplateSite()
const activeStep = ref(1)
const isPaused = ref(false)

let interval: ReturnType<typeof setInterval>

const setStep = (step: number) => {
  activeStep.value = step
  isPaused.value = true
}

const currentStep = computed(() => site.steps.value.find((step) => step.id === activeStep.value))

onMounted(() => {
  interval = setInterval(() => {
    if (!isPaused.value) {
      activeStep.value = activeStep.value === site.steps.value.length ? 1 : activeStep.value + 1
    }
  }, 5000)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <section id="process" class="py-20 px-6 bg-[var(--bg-primary)] overflow-hidden">
    <div class="max-w-[1216px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div class="relative min-h-[400px] flex items-center justify-center lg:order-1 order-2">
          <div
            class="absolute inset-0 bg-gradient-to-tr from-[#f0bf6c]/10 to-transparent rounded-full blur-[100px] opacity-30 transition-all duration-700"
            :class="{
              'translate-x-0': activeStep === 1,
              'translate-x-10': activeStep === 2,
              '-translate-x-10': activeStep === 3
            }"
          />

          <div class="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            <TransitionGroup
              enter-active-class="transition-all duration-500 ease-out"
              leave-active-class="transition-all duration-300 ease-in"
              enter-from-class="opacity-0 scale-95 translate-y-4"
              leave-to-class="opacity-0 scale-105 -translate-y-4"
              mode="out-in"
            >
              <div v-if="currentStep" :key="currentStep.id" class="absolute inset-0 flex items-center justify-center">
                <div class="w-auto h-auto max-w-full max-h-full rounded-2xl shadow-2xl overflow-hidden border border-white/5 bg-[#1c1c1c]">
                  <NuxtImg :src="currentStep.image" :alt="currentStep.title" class="w-full h-full object-contain" />
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        <div class="lg:order-2 order-1">
          <div class="mb-10">
            <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3">{{ site.copy.value.process.title }}</h2>
            <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-[var(--text-secondary)]">
              {{ site.copy.value.process.subtitle }}
            </p>
          </div>

          <div class="space-y-6">
            <div
              v-for="step in site.steps.value"
              :key="step.id"
              class="flex gap-6 group cursor-pointer relative"
              @click="setStep(step.id)"
              @mouseenter="isPaused = true"
              @mouseleave="isPaused = false"
            >
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-[var(--border-subtle)] rounded-full overflow-hidden transition-all duration-300">
                <div class="w-full bg-[var(--color-gold)] transition-all duration-500 ease-out" :class="activeStep === step.id ? 'h-full' : 'h-0'" />
              </div>

              <div class="pl-8 py-2 w-full transition-all duration-300" :class="activeStep === step.id ? 'opacity-100 translate-x-2' : 'opacity-50 hover:opacity-80'">
                <h3 class="font-manrope text-xl font-semibold mb-2 transition-colors duration-300" :class="activeStep === step.id ? 'text-[var(--color-gold)]' : 'text-[var(--text-primary)]'">
                  {{ step.title }}
                </h3>
                <p class="font-inter text-sm leading-relaxed text-[var(--text-secondary)] max-w-[480px]">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
