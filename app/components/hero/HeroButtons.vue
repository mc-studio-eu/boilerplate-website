<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 w-full px-4 sm:px-0">
    <!-- Primary CTA -->
    <a href="#contact" class="cta-primary gap-2 flex items-center justify-center px-3 py-2 rounded-lg font-medium text-[15px] sm:text-sm md:text-[15px]
    lg:text-base text-[#0f0f0f] cursor-pointer backdrop-blur-md transition-all
    duration-200 no-underline">
     <NuxtImg src="/img/main/founder.png" alt="MC Studio" class="w-6 h-6 md:w-8 md:h-8 object-contain rounded-lg flex items-center justify-center font-inter font-semibold text-[10px] text-[#0f0f0f]" />
      <div class="flex flex-col items-start gap-px">
        <span class="font-inter text-sm leading-tight font-semibold" >Réserver un appel</span>
        <span class="font-inter font-normal text-[9px] leading-tight">Discution gratuite</span>
      </div>
    </a>
    
    <!-- Secondary CTA -->
    <a 
      href="https://api.whatsapp.com/send/?phone=%2B33781724683&text&type=phone_number&app_absent=0" 
      target="_blank" 
      class="secondary-btn group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm text-[#f0eadb] cursor-pointer transition-all duration-300 no-underline"
    >
      <span>{{ $t('hero.cta.whatsapp') }}</span>
    </a>
  </div>
</template>

<style scoped>

</style>
