<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-12 mt-6 sm:mt-7 md:mt-8 lg:mt-9 w-full px-4 sm:px-0">
    <!-- Primary CTA -->
    <button class="cta-primary flex items-center justify-center w-full sm:w-auto min-w-0 sm:min-w-[160px] md:min-w-[180px] lg:min-w-[206px] h-11 sm:h-10 md:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-[15px] lg:text-base text-[#0f0f0f] cursor-pointer backdrop-blur-md transition-all duration-200 hover:brightness-105 hover:-translate-y-0.5 active:scale-[0.98]">
      Réserver un call
    </button>
    
    <!-- Secondary CTA -->
    <button class="cta-secondary flex items-center justify-center gap-2 w-full sm:w-auto min-w-0 sm:min-w-[160px] md:min-w-[180px] lg:min-w-[206px] h-11 sm:h-10 md:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-[15px] lg:text-base bg-[#010201] text-[#f0eadb] cursor-pointer backdrop-blur-md transition-all duration-200 hover:bg-[#1a1a1a] hover:-translate-y-0.5 active:scale-[0.98]">
      <!-- WhatsApp Icon -->
      <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Discuter sur WhatsApp
    </button>
  </div>
</template>

<style scoped>
.cta-primary {
  background: linear-gradient(270deg, #f0bf6c 0%, white 67.308%);
  border: none;
  box-shadow: 
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 9.736px 9.736px 0px rgba(11, 32, 103, 0.05),
    0px 1.391px 2.782px 0px rgba(11, 32, 103, 0.14),
    0px 36.247px 48.329px 0px rgba(0, 0, 0, 0.03);
}

.cta-secondary {
  border: none;
  box-shadow: 
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 9.736px 9.736px 0px rgba(11, 32, 103, 0.05),
    0px 1.391px 2.782px 0px rgba(11, 32, 103, 0.14),
    0px 36.247px 48.329px 0px rgba(0, 0, 0, 0.03);
}

/* Sur mobile, les boutons prennent toute la largeur mais avec une max-width */
@media (max-width: 639px) {
  .cta-primary,
  .cta-secondary {
    max-width: 280px;
  }
}
</style>
