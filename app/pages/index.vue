<script setup lang="ts">
// Auto-imports from Nuxt - no need to import components manually
</script>

<template>
  <main class="page-container">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Projects Section -->
    <ProjectSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Process Section -->
    <ProcessSection />
    
    <!-- Testimonials Section -->
    <TestimonialSection />
    
    <!-- FAQ Section -->
    <FaqSection />
    
    <!-- CTA Section -->
    <CtaSection />
    
    <!-- Footer -->
    <FooterSection />
  </main>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  padding: 24px;
  background: #0f0f0f;
}

/* Section spacing */
.page-container > section {
  scroll-margin-top: 80px;
}
</style>
