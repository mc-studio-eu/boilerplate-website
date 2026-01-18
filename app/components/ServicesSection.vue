<script setup lang="ts">
const services = [
  {
    title: "Landing Page",
    subtitle: "Une page premium conçue pour convertir.",
    features: [
      "Design premium (Figma)",
      "Copy & structure orientés conversion",
      "Dev sur mesure (mobile et desktop)",
      "Tracking (GA) + Déploiement"
    ],
    deliverables: ["Landing page live", "Perf + Conversion"],
    highlighted: false
  },
  {
    title: "Launch : SaaS",
    subtitle: "Une base solide pour scaler",
    features: [
      "Branding + design complet (UI/UX)",
      "3 fonctionnalités clés",
      "Paiement & abonnements (Stripe) + onboarding",
      "Déploiement + QA + base scalable"
    ],
    deliverables: ["SaaS en production", "Prêt à scaler"],
    highlighted: true
  },
  {
    title: "Sprint : MVP",
    subtitle: "Valider son produit en production",
    features: [
      "UI/UX minimal (écrans essentiels)",
      "1 fonctionnalité clé",
      "Paiement / abonnements (Stripe)",
      "Déploiement + QA"
    ],
    deliverables: ["MVP en production", "Prêt à itérer"],
    highlighted: false
  }
];

const otherServices = [
  "Site Vitrine", "Refonte", "Application Web", "E-commerce", 
  "SEO", "Maintenance", "API", "Dashboard"
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
          Branding, sites & applications<br class="sm:hidden">
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
          <div class="relative z-10 flex flex-col h-full">
            <!-- Title -->
            <h3 class="font-semibold text-xl sm:text-2xl mb-1 transition-colors duration-300" style="color: var(--text-primary);">{{ service.title }}</h3>
            <p class="text-xs mb-5 transition-colors duration-300" style="color: var(--text-secondary);">{{ service.subtitle }}</p>

            <!-- Image placeholder -->
            <div class="w-full max-w-[244px] h-[100px] sm:h-[119px] rounded-lg mb-5 overflow-hidden transition-colors duration-300" style="background-color: var(--bg-card);">
              <div class="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                <svg class="w-10 h-10 opacity-20 transition-colors duration-300" style="color: var(--text-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <!-- Inclus -->
            <p class="font-bold text-sm sm:text-[15px] mb-2 transition-colors duration-300" style="color: var(--text-primary);">Inclus :</p>
            <ul class="space-y-1.5 sm:space-y-2 mb-5 flex-grow">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="text-sm sm:text-[15px] leading-relaxed transition-colors duration-300"
                style="color: var(--text-secondary);"
              >
                {{ feature }}
              </li>
            </ul>

            <!-- Livrables -->
            <div class="mt-auto">
              <p class="font-bold text-sm sm:text-[15px] mb-2 transition-colors duration-300" style="color: var(--text-primary);">Livrables :</p>
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
          </div>
        </div>
      </div>

      <!-- Other Services -->
      <div class="p-6 sm:p-8 rounded-2xl border transition-colors duration-300" style="background-color: var(--bg-card); border-color: var(--border-subtle);">
        <div class="mb-5">
          <h4 class="font-manrope font-semibold text-lg mb-1 transition-colors duration-300" style="color: var(--text-primary);">Autres Services</h4>
          <p class="text-sm transition-colors duration-300" style="color: var(--text-secondary);">Besoin d'un service sur mesure ? On s'adapte.</p>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span 
            v-for="svc in otherServices" 
            :key="svc"
            class="inline-flex items-center px-3 sm:px-4 py-2 bg-transparent border rounded-lg text-sm hover:border-[#f0bf6c] hover:text-[#f0bf6c] transition-colors cursor-default"
            style="border-color: var(--border-subtle); color: var(--text-secondary);"
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
  background: var(--bg-card);
  backdrop-filter: blur(10px);
}

:global(.light) .service-card {
  background: var(--bg-secondary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
</style>

