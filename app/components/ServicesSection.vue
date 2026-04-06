<script setup lang="ts">
const site = useBoilerplateSite()
const expandedCard = ref<number | null>(0)

const toggleExpand = (index: number) => {
  expandedCard.value = expandedCard.value === index ? null : index
}
</script>

<template>
  <section id="services" class="py-5 md:py-10 lg:py-12 px-6 transition-colors duration-300 bg-[var(--bg-primary)]">
    <div class="max-w-[1216px] mx-auto">
      <div class="text-center mb-10 md:mb-16">
        <p class="text-gradient text-sm uppercase tracking-[0.24em] mb-3">{{ site.copy.value.services.kicker }}</p>
        <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 text-[var(--text-primary)]">
          {{ site.copy.value.services.title }}
        </h2>
        <p class="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-[var(--text-secondary)]">
          {{ site.copy.value.services.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-10 items-start">
        <div
          v-for="(service, index) in site.serviceCards.value"
          :key="service.title"
          class="service-card border-white/10 rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.4)] border transition-all duration-300"
        >
          <div class="p-6 sm:p-8">
            <h3 class="font-semibold text-xl sm:text-2xl mb-2 text-[var(--text-primary)]">{{ service.title }}</h3>
            <p class="text-xs mb-6 text-[var(--text-secondary)]">{{ service.subtitle }}</p>

            <div class="w-full h-[200px] rounded-lg mb-6 overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <NuxtImg :src="service.image" :alt="service.title" class="w-full h-full object-cover" />
            </div>

            <div class="mb-5">
              <p class="font-light text-sm sm:text-[15px] mb-2 text-[var(--text-primary)]">{{ site.copy.value.services.deliverables }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="deliverable in service.deliverables"
                  :key="deliverable"
                  class="inline-flex items-center px-2 py-1 bg-white border border-[#cad5e2] rounded text-[11px] sm:text-xs text-[#314158] font-medium"
                >
                  {{ deliverable }}
                </span>
              </div>
            </div>

            <button
              class="details-btn bg-[#2a2a2a] text-white shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
              @click="toggleExpand(index)"
            >
              <UIcon :name="expandedCard === index ? 'i-heroicons-minus' : 'i-heroicons-plus'" class="w-4 h-4 transition-transform duration-300" />
              <span class="text-sm font-medium">{{ site.copy.value.services.details }}</span>
            </button>
          </div>

          <Transition name="expand">
            <div v-if="expandedCard === index" class="expanded-section">
              <div class="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/10">
                <div class="pt-6 pb-4">
                  <p class="text-sm text-[var(--text-secondary)] leading-relaxed">{{ service.result }}</p>
                </div>

                <div class="mb-5">
                  <h4 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[#F0BF6C]">{{ site.copy.value.services.forWho }}</h4>
                  <ul class="space-y-2">
                    <li v-for="item in service.forWho" :key="item" class="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span class="text-[#F0BF6C] mt-0.5">•</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div class="mb-5">
                  <h4 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[#F0BF6C]">{{ site.copy.value.services.included }}</h4>
                  <ul class="grid grid-cols-1 gap-2">
                    <li v-for="item in service.included" :key="item" class="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                      <div class="w-6 h-6 rounded-md bg-[#F0BF6C]/10 flex items-center justify-center flex-shrink-0">
                        <UIcon name="i-heroicons-check" class="w-3.5 h-3.5 text-[#F0BF6C]" />
                      </div>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--bg-card)]">
                  <div>
                    <span class="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">{{ site.copy.value.services.delay }}</span>
                    <p class="text-sm font-medium text-[var(--text-primary)]">{{ service.delay }}</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="p-6 sm:p-8 rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10">
        <div class="mb-5">
          <h4 class="font-manrope font-semibold text-lg mb-1 text-[var(--text-primary)]">{{ site.copy.value.services.moreTitle }}</h4>
          <p class="text-sm text-[var(--text-secondary)]">{{ site.copy.value.services.moreSubtitle }}</p>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span
            v-for="block in site.extraBlocks.value"
            :key="block"
            class="inline-flex items-center px-3 sm:px-4 py-2 bg-white text-black border rounded-lg text-xs sm:text-sm cursor-default"
          >
            {{ block }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.expand-enter-active {
  animation: expandIn 0.4s ease-out;
}

.expand-leave-active {
  animation: expandOut 0.3s ease-in;
}

@keyframes expandIn {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 600px;
  }
}

@keyframes expandOut {
  from {
    opacity: 1;
    max-height: 600px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
}

.expanded-section {
  overflow: hidden;
}
</style>
