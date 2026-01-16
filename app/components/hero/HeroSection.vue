<script setup lang="ts">
import Navbar from "../layouts/Navbar.vue";

// Keywords for the scrolling marquee
const keywords = [
  "design", "design", "mvp", "devops", "developpement", "design", "Saas", 
  "branding", "design", "developpement", "branding", "UI/UX", "AI", 
  "developpement", "déploiement"
];
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
      
      <!-- Google Rating Badge -->
      <div class="inline-flex items-center gap-2 mt-8 sm:mt-10 px-2.5 h-6 border border-[#f0bf6c] rounded-lg bg-transparent scale-90 sm:scale-100">
        <svg class="shrink-0" viewBox="0 0 24 24" width="14" height="14">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <div class="w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        <div class="flex gap-0.5 items-center">
          <svg v-for="i in 5" :key="i" class="shrink-0" viewBox="0 0 24 24" fill="#F0BF6C" width="13.5" height="13.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      <!-- Hero Text -->
      <div class="flex flex-col items-center gap-6 sm:gap-8 mt-5 sm:mt-6 text-center max-w-[805px] w-full px-0 sm:px-5">
        <h1 class="hero-title font-medium text-2xl sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-5xl leading-snug sm:leading-tight">
          Design & Développement pour <br class="hidden sm:inline">
          lancer vite, et bien.
        </h1>
        <p class="font-normal text-[13px] sm:text-sm md:text-base lg:text-[17px] xl:text-[19px] leading-[1.7] sm:leading-relaxed tracking-normal sm:tracking-wide text-white max-w-[587px]">
          Branding, landing page et apps : nous accompagnons<br class="hidden sm:inline">
          entrepreneurs et entreprises du concept au lancement.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-12 mt-7 sm:mt-9 w-full max-w-[280px] sm:max-w-none sm:w-auto">
        <button class="cta-primary flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[206px] h-11 sm:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-base text-[#0f0f0f] cursor-pointer backdrop-blur-md transition-all duration-200 hover:brightness-105 hover:-translate-y-px">
          Réserver un call
        </button>
        <button class="cta-secondary flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[206px] h-11 sm:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-base bg-[#010201] text-[#f0eadb] cursor-pointer backdrop-blur-md transition-all duration-200 hover:bg-[#1a1a1a] hover:-translate-y-px">
          Discuter sur WhatsApp
        </button>
      </div>

      <!-- Trust Badges -->
      <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-9 mt-8 sm:mt-12 px-2.5 sm:px-0">
        <div class="flex items-center justify-center gap-2.5 h-[22px] py-1 sm:py-1.5 px-2.5 sm:px-3 bg-white border border-[#f0bf6c] rounded w-full max-w-[200px] sm:w-auto sm:max-w-none">
          <svg class="shrink-0" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f0f0f" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span class="font-medium text-[11px] sm:text-xs text-[#474747] whitespace-nowrap">+5 ans d'expériences</span>
        </div>
        <div class="flex items-center justify-center gap-2.5 h-[22px] py-1 sm:py-1.5 px-2.5 sm:px-3 bg-white border border-[#f0bf6c] rounded w-full max-w-[200px] sm:w-auto sm:max-w-none">
          <svg class="shrink-0" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f0f0f" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span class="font-medium text-[11px] sm:text-xs text-[#474747] whitespace-nowrap">+10 projets réalisés</span>
        </div>
        <div class="flex items-center justify-center gap-2.5 h-[22px] py-1 sm:py-1.5 px-2.5 bg-white border border-[#f0bf6c] rounded w-full max-w-[200px] sm:w-auto sm:max-w-none">
          <div class="flex w-5 h-3.5 rounded-sm overflow-hidden">
            <div class="w-1/3 bg-[#002395]"></div>
            <div class="w-1/3 bg-white"></div>
            <div class="w-1/3 bg-[#ED2939]"></div>
          </div>
          <span class="font-medium text-[11px] sm:text-xs text-[#474747] whitespace-nowrap">Lyon</span>
        </div>
      </div>
    </div>

    <!-- Scrolling Marquee -->
    <div class="absolute bottom-0 left-0 right-0 overflow-hidden py-2.5">
      <div class="marquee flex gap-8 w-max">
        <span v-for="(word, index) in [...keywords, ...keywords]" :key="index" class="font-medium text-sm sm:text-base text-white whitespace-nowrap">
          {{ word }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/css/main.css";

/* Gradient text for title */
.hero-title {
  font-family: 'Manrope', sans-serif;
  background: linear-gradient(270deg, #f0bf6c 0%, white 67.308%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* CTA primary gradient button */
.cta-primary {
  background: linear-gradient(270deg, #f0bf6c 0%, white 67.308%);
  border: none;
  box-shadow: 
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 9.736px 9.736px 0px rgba(11, 32, 103, 0.05),
    0px 1.391px 2.782px 0px rgba(11, 32, 103, 0.14),
    0px 36.247px 48.329px 0px rgba(0, 0, 0, 0.03);
}

/* CTA secondary shadow */
.cta-secondary {
  border: none;
  box-shadow: 
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 9.736px 9.736px 0px rgba(11, 32, 103, 0.05),
    0px 1.391px 2.782px 0px rgba(11, 32, 103, 0.14),
    0px 36.247px 48.329px 0px rgba(0, 0, 0, 0.03);
}

/* Marquee animation */
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
