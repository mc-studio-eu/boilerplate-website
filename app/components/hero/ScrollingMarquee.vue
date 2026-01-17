<script setup lang="ts">
const keywords = [
  "design", "SaaS", "mvp", "devops", "développement", "design", "SaaS", 
  "branding", "SEO", "développement", "branding", "UI/UX", "AI", 
  "développement", "déploiement", "wireframe", "UI/UX", "AI",
]
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 overflow-hidden py-2.5">
    <div class="marquee flex gap-8 w-max">
      <span v-for="(word, index) in [...keywords, ...keywords]" :key="index" class="font-medium text-sm sm:text-base text-white whitespace-nowrap">
        {{ word }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

