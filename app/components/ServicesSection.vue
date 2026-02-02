<script setup lang="ts">
import { ref, computed } from 'vue';

const { t, tm, rt } = useI18n();

// Expanded card state
const expandedCard = ref<number | null>(null);

const toggleExpand = (index: number) => {
  expandedCard.value = expandedCard.value === index ? null : index;
};

const services = computed(() => [
  {
    title: t('services.cards.landing.title'),
    subtitle: t('services.cards.landing.subtitle'),
    image: "/img/services/lp.png",
    deliverables: Object.values(tm('services.cards.landing.deliverables') as object || {}).map(i => rt(i)),
    result: t('services.modals.landing.result'),
    forWho: Object.values(tm('services.modals.landing.for_who') as object || {}).map(i => rt(i)),
    included: [
      { text: t('services.modals.landing.included.0'), icon: "i-heroicons-magnifying-glass" },
      { text: t('services.modals.landing.included.1'), icon: "i-heroicons-squares-2x2" },
      { text: t('services.modals.landing.included.2'), icon: "i-heroicons-pencil-square" },
      { text: t('services.modals.landing.included.3'), icon: "i-heroicons-swatch" },
      { text: t('services.modals.landing.included.4'), icon: "i-heroicons-paint-brush" },
      { text: t('services.modals.landing.included.5'), icon: "i-heroicons-code-bracket" },
      { text: t('services.modals.landing.included.6'), icon: "i-heroicons-arrow-trending-up" },
      { text: t('services.modals.landing.included.7'), icon: "i-heroicons-clipboard-document-list" },
      { text: t('services.modals.landing.included.8'), icon: "i-heroicons-chart-bar" },
      { text: t('services.modals.landing.included.9'), icon: "i-heroicons-rocket-launch" },
      { text: t('services.modals.landing.included.10'), icon: "i-heroicons-sparkles" }
    ],
    delay: t('services.modals.landing.delay'),
  },
  {
    title: t('services.cards.sprint.title'),
    subtitle: t('services.cards.sprint.subtitle'),
    image: "/img/services/sprint.png",
    deliverables: Object.values(tm('services.cards.sprint.deliverables') as object || {}).map(i => rt(i)),
    result: t('services.modals.sprint.result'),
    forWho: Object.values(tm('services.modals.sprint.for_who') as object || {}).map(i => rt(i)),
    included: [
      { text: t('services.modals.sprint.included.0'), icon: "i-heroicons-magnifying-glass" },
      { text: t('services.modals.sprint.included.1'), icon: "i-heroicons-squares-2x2" },
      { text: t('services.modals.sprint.included.2'), icon: "i-heroicons-pencil-square" },
      { text: t('services.modals.sprint.included.3'), icon: "i-heroicons-swatch" },
      { text: t('services.modals.sprint.included.4'), icon: "i-heroicons-paint-brush" },
      { text: t('services.modals.sprint.included.5'), icon: "i-heroicons-code-bracket" },
      { text: t('services.modals.sprint.included.6'), icon: "i-heroicons-arrow-trending-up" },
      { text: t('services.modals.sprint.included.7'), icon: "i-heroicons-clipboard-document-list" },
    ],
    delay: t('services.modals.sprint.delay'),
  },
  {
    title: t('services.cards.saas.title'),
    subtitle: t('services.cards.saas.subtitle'),
    image: "/img/services/launch.png",
    deliverables: Object.values(tm('services.cards.saas.deliverables') as object || {}).map(i => rt(i)),
    result: t('services.modals.saas.result'),
    forWho: Object.values(tm('services.modals.saas.for_who') as object || {}).map(i => rt(i)),
    included: [
      { text: t('services.modals.saas.included.0'), icon: "i-heroicons-magnifying-glass" },
      { text: t('services.modals.saas.included.1'), icon: "i-heroicons-squares-2x2" },
      { text: t('services.modals.saas.included.2'), icon: "i-heroicons-pencil-square" },
      { text: t('services.modals.saas.included.3'), icon: "i-heroicons-swatch" },
      { text: t('services.modals.saas.included.4'), icon: "i-heroicons-paint-brush" },
      { text: t('services.modals.saas.included.5'), icon: "i-heroicons-code-bracket" },
      { text: t('services.modals.saas.included.6'), icon: "i-heroicons-arrow-trending-up" },
      { text: t('services.modals.saas.included.7'), icon: "i-heroicons-clipboard-document-list" },
      { text: t('services.modals.saas.included.8'), icon: "i-heroicons-chart-bar" },
    ],
    delay: t('services.modals.saas.delay'),
  },
]);

const otherServices = computed(() => Object.values(tm('services.other_services.list') as object || {}).map(i => rt(i)));
</script>

<template>
  <section id="services" class="py-5 md:py-10 lg:py-12 px-6 transition-colors duration-300 bg-[var(--bg-primary)]">
    <div class="max-w-[1216px] mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-[var(--text-primary)]" v-html="$t('services.title')">
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]" v-html="$t('services.subtitle')">
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-10 items-start">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card border-white/10 rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.4)] border transition-all duration-300"        >
          <!-- Card Content -->
          <div class="p-6 sm:p-8">
            <!-- Title -->
            <h3 class="font-semibold text-xl sm:text-2xl mb-2 transition-colors duration-300 text-[var(--text-primary)]">{{ service.title }}</h3>
            <p class="text-xs mb-6 transition-colors duration-300 text-[var(--text-secondary)]">{{ service.subtitle }}</p>

            <!-- Image -->
            <div class="w-full h-[200px] rounded-lg mb-6 overflow-hidden transition-colors duration-300 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <NuxtImg
                :src="service.image"
                alt="Service Image"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Deliverables -->
            <div class="mb-5">
              <p class="font-light text-sm sm:text-[15px] mb-2 transition-colors duration-300 text-[var(--text-primary)]">{{ $t('services.common.deliverables_label') }}</p>
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

            <!-- Details Button -->
            <button 
              class="details-btn bg-[#2a2a2a] text-white shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
              @click="toggleExpand(index)"
            >
              <UIcon 
                :name="expandedCard === index ? 'i-heroicons-minus' : 'i-heroicons-plus'" 
                class="w-4 h-4 transition-transform duration-300" 
              />
              <span class="text-sm font-medium">{{ $t('services.common.details') }}</span>
            </button>
          </div>

          <!-- Expanded Details -->
          <Transition name="expand">
            <div v-if="expandedCard === index" class="expanded-section">
              <div class="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/10">
                <!-- Result -->
                <div class="pt-6 pb-4">
                  <p class="text-sm text-[var(--text-secondary)] leading-relaxed">{{ service.result }}</p>
                </div>

                <!-- Pour qui -->
                <div class="mb-5">
                  <h4 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[#F0BF6C]">{{ $t('services.common.for_who') }}</h4>
                  <ul class="space-y-2">
                    <li v-for="item in service.forWho" :key="item" class="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span class="text-[#F0BF6C] mt-0.5">•</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Inclus -->
                <div class="mb-5">
                  <h4 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[#F0BF6C]">{{ $t('services.common.included') }}</h4>
                  <ul class="grid grid-cols-1 gap-2">
                    <li v-for="item in service.included" :key="item.text" class="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                      <div class="w-6 h-6 rounded-md bg-[#F0BF6C]/10 flex items-center justify-center flex-shrink-0">
                        <UIcon :name="item.icon" class="w-3.5 h-3.5 text-[#F0BF6C]" />
                      </div>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Delay -->
                <div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--bg-card)]">
                  <div>
                    <span class="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">{{ $t('services.common.delay') }}</span>
                    <p class="text-sm font-medium text-[var(--text-primary)]">{{ service.delay }}</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Other Services -->
      <div class="p-6 sm:p-8 rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10">
        <div class="mb-5">
          <h4 class="font-manrope font-semibold text-lg mb-1 transition-colors duration-300 text-[var(--text-primary)]">{{ $t('services.other_services.title') }}</h4>
          <p class="text-sm transition-colors duration-300 text-[var(--text-secondary)]">{{ $t('services.other_services.subtitle') }}</p>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span 
            v-for="svc in otherServices" 
            :key="svc"
            class="inline-flex items-center px-3 sm:px-4 py-2 bg-white text-black border rounded-lg text-xs sm:text-sm transition-colors cursor-default"
          >
            {{ svc }}
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

/* Expand transition */
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
