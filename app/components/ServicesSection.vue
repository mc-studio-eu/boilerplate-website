<script setup lang="ts">
import { ref, computed } from 'vue';

const { t, tm, rt } = useI18n();

// Modal state
const activeModal = ref<string | null>(null);

const isLandingModalOpen = computed({
  get: () => activeModal.value === 'landing',
  set: (val: boolean) => { activeModal.value = val ? 'landing' : null; }
});

const isSprintModalOpen = computed({
  get: () => activeModal.value === 'sprint',
  set: (val: boolean) => { activeModal.value = val ? 'sprint' : null; }
});

const isSaasModalOpen = computed({
  get: () => activeModal.value === 'saas',
  set: (val: boolean) => { activeModal.value = val ? 'saas' : null; }
});

const openModal = (modalType: string) => {
  activeModal.value = modalType;
};

const services = computed(() => [
  {
    title: t('services.cards.landing.title'),
    subtitle: t('services.cards.landing.subtitle'),
    image: "/img/services/lp.png",
    features: Object.values(tm('services.cards.landing.features') as object || {}).map(i => rt(i)),
    deliverables: Object.values(tm('services.cards.landing.deliverables') as object || {}).map(i => rt(i)),
    highlighted: false,
    modalKey: "landing"
  },
  {
    title: t('services.cards.sprint.title'),
    subtitle: t('services.cards.sprint.subtitle'),
    image: "/img/services/sprint.png",
    features: Object.values(tm('services.cards.sprint.features') as object || {}).map(i => rt(i)),
    deliverables: Object.values(tm('services.cards.sprint.deliverables') as object || {}).map(i => rt(i)),
    highlighted: false,
    modalKey: "sprint"
  },
  {
    title: t('services.cards.saas.title'),
    subtitle: t('services.cards.saas.subtitle'),
    image: "/img/services/launch.png",
    features: Object.values(tm('services.cards.saas.features') as object || {}).map(i => rt(i)),
    deliverables: Object.values(tm('services.cards.saas.deliverables') as object || {}).map(i => rt(i)),
    highlighted: false,
    modalKey: "saas"
  },
]);

const otherServices = computed(() => Object.values(tm('services.other_services.list') as object || {}).map(i => rt(i)));

const switchModal = (direction: 'next' | 'prev') => {
  const keys = services.value.map(s => s.modalKey);
  const currentIndex = keys.indexOf(activeModal.value!);
  if (currentIndex === -1) return;

  let newIndex;
  if (direction === 'next') {
    newIndex = (currentIndex + 1) % keys.length;
  } else {
    newIndex = (currentIndex - 1 + keys.length) % keys.length;
  }
  
  activeModal.value = keys[newIndex] || null;
};
</script>

<template>
  <section id="services" class="py-5 md:py-10 lg:py-12 px-6 transition-colors duration-300 bg-[var(--bg-primary)]">
    <div class="max-w-[1216px] mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-[var(--text-primary)]" v-html="$t('services.title')">
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]" v-html="$t('services.subtitle')">
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-10">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="relative rounded-lg p-6 sm:p-8 transition-colors duration-300"
          :class="service.highlighted ? 'border-[3px] border-[#f0bf6c]' : 'border border-[var(--border-subtle)]'"
        >
          <!-- Card Content -->
          <div class="relative flex flex-col h-full">
            <!-- Title -->
            <h3 class="font-semibold text-xl sm:text-2xl mb-2 transition-colors duration-300 text-[var(--text-primary)]">{{ service.title }}</h3>
            <p class="text-xs mb-6 transition-colors duration-300 text-[var(--text-secondary)]">{{ service.subtitle }}</p>

            <!-- Image placeholder -->
            <div class="w-full h-[200px] rounded-lg mb-6 overflow-hidden transition-colors duration-300 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <NuxtImg
                :src="service.image"
                alt="Service Image"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Livrables -->
            <div class="mt-auto">
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

            <UButton 
              class="bg-[#232323] mt-5 w-24 text-white cursor-pointer hover:bg-transparent focus:bg-transparent"
              icon="i-heroicons-plus-small-solid"
              @click="openModal(service.modalKey)"
            >
              {{ $t('services.common.details') }}
            </UButton>
          </div>
        </div>
      </div>

      <!-- Other Services -->
      <div class="p-6 sm:p-8 rounded-2xl border transition-colors duration-300 border-[var(--border-subtle)]">
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

    <!-- Modals -->
    <ServicesServiceModalLanding 
      v-model:open="isLandingModalOpen" 
      @next="switchModal('next')" 
      @prev="switchModal('prev')" 
    />
    <ServicesServiceModalSprint 
      v-model:open="isSprintModalOpen" 
      @next="switchModal('next')" 
      @prev="switchModal('prev')" 
    />
    <ServicesServiceModalSaas 
      v-model:open="isSaasModalOpen" 
      @next="switchModal('next')" 
      @prev="switchModal('prev')" 
    />
  </section>
</template>

<style scoped>
.service-modal :deep(.modal-content) {
  max-width: 680px;
}
</style>
