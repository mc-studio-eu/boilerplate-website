<template>
  <div class="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-4 sm:mt-5 md:mt-6 text-center w-full px-2 sm:px-4 md:px-6">
    <!-- Title -->
    <h1 class="hero-title font-manrope font-medium leading-[1.15] sm:leading-[1.2] md:leading-tight max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] text-transparent bg-clip-text bg-[linear-gradient(270deg,#f0bf6c_0%,white_67.308%)] text-[clamp(1.5rem,6vw,1.75rem)] min-[480px]:text-[clamp(1.75rem,5vw,2rem)] sm:text-[clamp(2rem,4.5vw,2.25rem)] md:text-[clamp(2.25rem,4vw,2.625rem)] lg:text-[2.625rem] xl:text-[3rem]" v-html="$t('hero.title')">
    </h1>
    
    <!-- Subtitle -->
    <p class="font-normal leading-[1.6] sm:leading-[1.7] tracking-wide text-white/90 max-w-[300px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[587px] text-[clamp(0.8125rem,2.5vw,0.875rem)] sm:text-[clamp(0.875rem,2vw,1rem)] md:text-base lg:text-[1.0625rem] xl:text-[1.1875rem]" v-html="$t('hero.subtitle')">
    </p>
  </div>
</template>
