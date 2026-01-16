<template>
  <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-12 mt-7 sm:mt-9 w-full max-w-[280px] sm:max-w-none sm:w-auto">
    <button class="cta-primary flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[206px] h-11 sm:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-base text-[#0f0f0f] cursor-pointer backdrop-blur-md transition-all duration-200 hover:brightness-105 hover:-translate-y-px">
      Réserver un call
    </button>
    <button class="cta-secondary flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[206px] h-11 sm:h-9 rounded-lg font-medium text-[15px] sm:text-sm md:text-base bg-[#010201] text-[#f0eadb] cursor-pointer backdrop-blur-md transition-all duration-200 hover:bg-[#1a1a1a] hover:-translate-y-px">
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
</style>

