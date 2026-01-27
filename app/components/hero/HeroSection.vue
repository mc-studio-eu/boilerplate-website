<script setup lang="ts">
import Navbar from "../layouts/Navbar.vue"
import GoogleBadge from "./GoogleBadge.vue"
import HeroContent from "./HeroContent.vue"
import HeroButtons from "./HeroButtons.vue"
import TrustBadges from "./TrustBadges.vue"
import ScrollingMarquee from "./ScrollingMarquee.vue"
</script>

<template>
  <section class="relative w-full rounded-lg overflow-hidden min-h-[calc(85svh-10px)] sm:min-h-[600px] md:min-h-[620px] lg:min-h-[643px]">
    <!-- Background Image -->
    <!-- Background Image -->
    <NuxtImg 
      src="/img/main/background.png" 
      alt="Hero background" 
      format="webp"
      preload
      class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
    />
    
    <!-- Content Container -->
    <div class="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 pb-0 sm:pb-16 md:pb-10">
      <Navbar />
      <GoogleBadge />
      <HeroContent />
      <HeroButtons />
      <TrustBadges />
    </div>

    <ScrollingMarquee />
  </section>
</template>
