<script setup lang="ts">
import { ref, computed } from 'vue';

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

const services = [
  {
    title: "Landing Page",
    subtitle: "Une page premium conçue pour convertir.",
    image: "/img/services/lp.png",
    features: [
      "Design premium (Figma)",
      "Copy & structure orientés conversion",
      "Dev sur mesure (mobile et desktop)",
      "Tracking (GA) + Déploiement"
    ],
    deliverables: ["Landing page live", "Tracking & analytics"],
    highlighted: false,
    modalKey: "landing"
  },
  {
    title: "Sprint : MVP",
    subtitle: "Valider son produit en production",
    image: "/img/services/sprint.png",
    features: [
      "UI/UX minimal (écrans essentiels)",
      "1 fonctionnalité clé",
      "Paiement / abonnements (Stripe)",
      "Déploiement + QA"
    ],
    deliverables: ["MVP en production", "Prêt à itérer"],
    highlighted: false,
    modalKey: "sprint"
  },
  {
    title: "Launch : SaaS",
    subtitle: "Un produit complet, prêt à scaler.",
    image: "/img/services/launch.png",
    features: [
      "Branding + design complet (UI/UX)",
      "3 fonctionnalités clés",
      "Paiement & abonnements (Stripe) + onboarding",
      "Déploiement + QA + base scalable"
    ],
    deliverables: ["SaaS en production", "Prêt à scaler"],
    highlighted: false,
    modalKey: "saas"
  },
];

const otherServices = [
  "Branding", "Web Design", "Site multi-pages", "Dev Ponctuel", "SEO", "Copywriting", "Accompagnement Stratégique",
];
</script>

<template>
  <section id="services" class="py-16 md:py-20 lg:py-24 px-6 transition-colors duration-300" style="background-color: var(--bg-primary);">
    <div class="max-w-[1216px] mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300" style="color: var(--text-primary);">
          Nos <span class="text-gradient">Services</span>
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300" style="color: var(--text-secondary);">
          Branding, sites &amp; applications<br class="sm:hidden">
          de la landing au MVP, jusqu'au SaaS prêt à être lancé.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card relative rounded-lg p-6 sm:p-8 transition-colors duration-300"
          :class="service.highlighted ? 'border-[3px] border-[#f0bf6c]' : 'border'"
          style="border-color: var(--border-subtle);"
        >
          <!-- Card Content -->
          <div class="relative flex flex-col h-full">
            <!-- Title -->
            <h3 class="font-semibold text-xl sm:text-2xl mb-1 transition-colors duration-300" style="color: var(--text-primary);">{{ service.title }}</h3>
            <p class="text-xs mb-5 transition-colors duration-300" style="color: var(--text-secondary);">{{ service.subtitle }}</p>

            <!-- Image placeholder -->
            <div class="w-full max-w-[244px] h-[100px] sm:h-[180px] rounded-lg mb-5 overflow-hidden transition-colors duration-300" style="background-color: var(--bg-card);">
              <NuxtImg
                :src="service.image"
                alt="Service Image"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Livrables -->
            <div class="mt-auto">
              <p class="font-light text-sm sm:text-[15px] mb-2 transition-colors duration-300" style="color: var(--text-primary);">Livrables :</p>
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
              class="bg-[#232323] mt-5 w-32 text-white cursor-pointer" 
              icon="i-heroicons-plus-small-solid"
              @click="openModal(service.modalKey)"
            >
              Détails
            </UButton>
          </div>
        </div>
      </div>

      <!-- Other Services -->
      <div class="p-6 sm:p-8 rounded-2xl border transition-colors duration-300" style="border-color: var(--border-subtle);">
        <div class="mb-5">
          <h4 class="font-manrope font-semibold text-lg mb-1 transition-colors duration-300" style="color: var(--text-primary);">Autres Services</h4>
          <p class="text-sm transition-colors duration-300" style="color: var(--text-secondary);">Besoin d'un service sur mesure ? On s'adapte.</p>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span 
            v-for="svc in otherServices" 
            :key="svc"
            class="inline-flex items-center px-3 sm:px-4 py-2 bg-white text-black border rounded-lg text-sm hover:border-[#f0bf6c] hover:text-[#f0bf6c] transition-colors cursor-default"
          >
            {{ svc }}
          </span>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <ServicesServiceModalLanding v-model:open="isLandingModalOpen" />
    <ServicesServiceModalSprint v-model:open="isSprintModalOpen" />
    <ServicesServiceModalSaas v-model:open="isSaasModalOpen" />
  </section>
</template>

<style scoped>
.service-modal :deep(.modal-content) {
  max-width: 680px;
}
</style>
