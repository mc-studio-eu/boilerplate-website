<script setup lang="ts">
import CreatorNavbar from "./CreatorNavbar.vue"
import GoogleBadge from "../hero/GoogleBadge.vue"
import CreatorHeroContent from "./CreatorHeroContent.vue"
import CreatorHeroButtons from "./CreatorHeroButtons.vue"
import CreatorTrustBadges from "./CreatorTrustBadges.vue"
import CreatorScrollingMarquee from "./CreatorScrollingMarquee.vue"
</script>

<template>
  <section class="relative w-full rounded-lg overflow-hidden min-h-[calc(85svh-10px)] sm:min-h-[600px] md:min-h-[620px] lg:min-h-[643px]">
    <!-- Background Image -->
    <NuxtImg
      src="/img/main/background.svg"
      alt="Hero background" 
      format="svg"
      preload
      class="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
    />
    
    <!-- Content Container -->
    <div class="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 pb-0 sm:pb-16 md:pb-10">
      <CreatorNavbar />
      <GoogleBadge />
      <CreatorHeroContent />
      <CreatorHeroButtons />
      <CreatorTrustBadges />
    </div>

    <CreatorScrollingMarquee />
  </section>
</template>
