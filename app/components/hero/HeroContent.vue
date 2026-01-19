<template>
  <div class="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-4 sm:mt-5 md:mt-6 text-center w-full px-2 sm:px-4 md:px-6">
    <!-- Title -->
    <h1 class="hero-title font-medium leading-[1.15] sm:leading-[1.2] md:leading-tight max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px]" v-html="$t('hero.title')">
    </h1>
    
    <!-- Subtitle -->
    <p class="font-normal leading-[1.6] sm:leading-[1.7] tracking-wide text-white/90 max-w-[300px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[587px]" v-html="$t('hero.subtitle')">
    </p>
  </div>
</template>

<style scoped>
.hero-title {
  font-family: 'Manrope', sans-serif;
  background: linear-gradient(270deg, #f0bf6c 0%, white 67.308%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Mobile */
  font-size: clamp(1.5rem, 6vw, 1.75rem);
}

/* xs: 480px */
@media (min-width: 480px) {
  .hero-title {
    font-size: clamp(1.75rem, 5vw, 2rem);
  }
}

/* sm: 640px */
@media (min-width: 640px) {
  .hero-title {
    font-size: clamp(2rem, 4.5vw, 2.25rem);
  }
}

/* md: 768px */
@media (min-width: 768px) {
  .hero-title {
    font-size: clamp(2.25rem, 4vw, 2.625rem);
  }
}

/* lg: 1024px */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 2.625rem; /* 42px */
  }
}

/* xl: 1280px */
@media (min-width: 1280px) {
  .hero-title {
    font-size: 3rem; /* 48px */
  }
}

/* Subtitle responsive */
p {
  font-size: clamp(0.8125rem, 2.5vw, 0.875rem); /* 13px - 14px */
}

@media (min-width: 640px) {
  p {
    font-size: clamp(0.875rem, 2vw, 1rem); /* 14px - 16px */
  }
}

@media (min-width: 768px) {
  p {
    font-size: 1rem; /* 16px */
  }
}

@media (min-width: 1024px) {
  p {
    font-size: 1.0625rem; /* 17px */
  }
}

@media (min-width: 1280px) {
  p {
    font-size: 1.1875rem; /* 19px */
  }
}
</style>
