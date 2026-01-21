<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 w-full px-4 sm:px-0">
    <!-- Primary CTA -->
    <a href="#contact" class="cta-primary flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-auto min-w-0 sm:min-w-[160px] md:min-w-[180px] lg:min-w-[206px] h-11 sm:h-10 md:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-[15px] lg:text-base text-[#0f0f0f] cursor-pointer backdrop-blur-md transition-all duration-200 hover:brightness-105 hover:-translate-y-0.5 active:scale-[0.98] no-underline">
      {{ $t('hero.cta.book') }}
    </a>
    
    <!-- Secondary CTA -->
    <button class="cta-secondary flex items-center justify-center gap-2 w-full max-w-[280px] sm:max-w-none sm:w-auto min-w-0 sm:min-w-[160px] md:min-w-[180px] lg:min-w-[206px] h-11 sm:h-10 md:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-[15px] lg:text-base text-[#f0eadb] cursor-pointer backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] relative border border-transparent">
      {{ $t('hero.cta.whatsapp') }}
    </button>
  </div>
</template>

<style scoped>
.cta-secondary:hover {
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box, 
              linear-gradient(270deg, #f0bf6c 0%, #fff 67.308%) border-box;
}
</style>
