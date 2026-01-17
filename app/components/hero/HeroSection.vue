<script setup lang="ts">
import Navbar from "../layouts/Navbar.vue"
import GoogleBadge from "./GoogleBadge.vue"
import HeroContent from "./HeroContent.vue"
import HeroButtons from "./HeroButtons.vue"
import TrustBadges from "./TrustBadges.vue"
import ScrollingMarquee from "./ScrollingMarquee.vue"
</script>

<template>
  <section class="hero-section relative w-full rounded-lg overflow-hidden">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center rounded-lg"
      :style="{ backgroundImage: `url('/img/main/background.png')` }"
    ></div>
    
    <!-- Content Container -->
    <div class="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 pb-14 sm:pb-16 md:pb-10">
      <Navbar />
      <GoogleBadge />
      <HeroContent />
      <HeroButtons />
      <TrustBadges />
    </div>

    <ScrollingMarquee />
  </section>
</template>

<style scoped>
.hero-section {
  /* Mobile first - puis ajuster pour les écrans plus grands */
  min-height: calc(100svh - 48px); /* svh pour iOS Safari */
}

@media (min-width: 480px) {
  .hero-section {
    min-height: 620px;
  }
}

@media (min-width: 640px) {
  .hero-section {
    min-height: 600px;
  }
}

@media (min-width: 768px) {
  .hero-section {
    min-height: 620px;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    min-height: 643px;
  }
}
</style>
