<script setup lang="ts">
// Auto-imports from Nuxt - no need to import components manually
</script>

<template>
  <main class="min-h-screen p-6 bg-[#0f0f0f]">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Main Content with Border Frame -->
    <div class="relative mx-auto max-w-[1440px]">
      <!-- Left Border Line -->
      <div class="absolute left-[73px] top-0 bottom-0 w-px bg-gradient-to-b from-[#f0bf6c]/40 via-[#f0bf6c]/20 to-transparent hidden lg:block"></div>
      
      <!-- Right Border Line -->
      <div class="absolute right-[73px] top-0 bottom-0 w-px bg-gradient-to-b from-[#f0bf6c]/40 via-[#f0bf6c]/20 to-transparent hidden lg:block"></div>
      
      <!-- Projects Section -->
      <div class="section-separator"></div>
      <ProjectSection id="projets" />
      <div class="section-separator"></div>
      
      <!-- Services Section -->
      <ServicesSection id="services" />
      <div class="section-separator"></div>
      
      <!-- Process Section -->
      <ProcessSection id="process" />
      <div class="section-separator"></div>
      
      <!-- Testimonials Section -->
      <TestimonialSection id="avis" />
      <div class="section-separator"></div>
      
      <!-- FAQ Section -->
      <FaqSection id="faq" />
      <div class="section-separator"></div>
      
      <!-- CTA Section -->
      <CtaSection />
    </div>
    
    <!-- Footer -->
    <FooterSection />
  </main>
</template>

<style scoped>
/* Section separator line */
.section-separator {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #f0bf6c40 20%, #f0bf6c40 80%, transparent 100%);
  margin: 0 auto;
  max-width: calc(100% - 146px);
}

@media (max-width: 1024px) {
  .section-separator {
    max-width: 100%;
    background: linear-gradient(90deg, transparent 0%, #f0bf6c30 10%, #f0bf6c30 90%, transparent 100%);
  }
}

/* Section spacing */
main > div > section,
main > section {
  scroll-margin-top: 80px;
}
</style>
