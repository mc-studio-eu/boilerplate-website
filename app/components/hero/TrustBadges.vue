<template>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-9 mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-2 sm:px-4 w-full max-w-[340px] sm:max-w-none">
    <!-- Badge 1: Experience -->
    <div class="flex items-center justify-center gap-1.5 sm:gap-2 h-7 sm:h-8 md:h-9 py-1 sm:py-1.5 px-2.5 sm:px-3 md:px-4 bg-white border border-[#f0bf6c] rounded-md sm:rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(240,191,108,0.2)]">
      <svg class="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="#0f0f0f" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span class="font-medium text-[11px] sm:text-xs md:text-sm text-[#474747] whitespace-nowrap">{{ $t('hero.badges.experience') }}</span>
    </div>
    
    <!-- Badge 2: Projects -->
    <div class="flex items-center justify-center gap-1.5 sm:gap-2 h-7 sm:h-8 md:h-9 py-1 sm:py-1.5 px-2.5 sm:px-3 md:px-4 bg-white border border-[#f0bf6c] rounded-md sm:rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(240,191,108,0.2)]">
      <svg class="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="#0f0f0f" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span class="font-medium text-[11px] sm:text-xs md:text-sm text-[#474747] whitespace-nowrap">{{ $t('hero.badges.projects') }}</span>
    </div>
    
    <!-- Badge 3: Location -->
    <div class="flex items-center justify-center gap-1.5 sm:gap-2 h-7 sm:h-8 md:h-9 py-1 sm:py-1.5 px-2.5 sm:px-3 md:px-4 bg-white border border-[#f0bf6c] rounded-md sm:rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(240,191,108,0.2)]">
      <!-- French Flag -->
      <div class="flex w-5 h-3 sm:w-6 sm:h-4 rounded-[2px] overflow-hidden shadow-sm shrink-0">
        <div class="w-1/3 bg-[#002395]"></div>
        <div class="w-1/3 bg-white"></div>
        <div class="w-1/3 bg-[#ED2939]"></div>
      </div>
      <span class="font-medium text-[11px] sm:text-xs md:text-sm text-[#474747] whitespace-nowrap">{{ $t('hero.badges.location') }}</span>
    </div>
  </div>
</template>