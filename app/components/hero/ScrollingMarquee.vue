<script setup lang="ts">
const keywords = [
  "design", "SaaS", "mvp", "développement", "design", "SaaS", 
  "branding", "SEO", "développement", "branding", "UI/UX", "AI", 
  "développement", "déploiement", "wireframe", "UI/UX", "AI", "design"
]
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 overflow-hidden py-2 sm:py-2.5 bg-gradient-to-r from-transparent via-black/10 to-transparent">
    <div class="marquee flex gap-4 sm:gap-6 md:gap-8 w-max">
      <span 
        v-for="(word, index) in [...keywords, ...keywords]" 
        :key="index" 
        class="font-medium text-xs sm:text-sm md:text-base text-white/90 whitespace-nowrap"
      >
        {{ word }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: scroll 35s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover for accessibility */
.marquee:hover {
  animation-play-state: paused;
}

/* Reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
  }
}
</style>
