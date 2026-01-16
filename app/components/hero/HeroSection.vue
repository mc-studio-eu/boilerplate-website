<script setup lang="ts">
import Navbar from "../layouts/Navbar.vue"
import GoogleBadge from "./GoogleBadge.vue"
import HeroContent from "./HeroContent.vue"
import HeroButtons from "./HeroButtons.vue"
import TrustBadges from "./TrustBadges.vue"
import ScrollingMarquee from "./ScrollingMarquee.vue"
</script>

<template>
  <section class="relative w-full min-h-[540px] sm:min-h-[580px] md:min-h-[600px] lg:min-h-[643px] rounded-none sm:rounded-lg overflow-hidden">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center rounded-none sm:rounded-lg"
      :style="{ backgroundImage: `url('/img/main/background.png')` }"
    ></div>
    
    <!-- Content Container -->
    <div class="relative z-10 flex flex-col items-center h-full px-4 sm:px-6">
      <Navbar />
      <GoogleBadge />
      <HeroContent />
      <HeroButtons />
      <TrustBadges />
    </div>

    <ScrollingMarquee />
  </section>
</template>
