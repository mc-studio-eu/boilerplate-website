<template>
  <NuxtLink 
    to="https://share.google/yo1oHEU6RO9rgz5g8"
    target="_blank"
    class="google-badge"
  >
    <div class="inline-flex items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10 px-2 sm:px-2.5 h-5 sm:h-6 border border-[#f0bf6c] rounded-md sm:rounded-lg bg-transparent hover:bg-white/5 transition-colors">
      <!-- Google Logo -->
      <svg class="shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      
      <!-- Separator -->
      <div class="w-px h-4 sm:h-5 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      
      <!-- Stars -->
      <div class="flex gap-0.5 items-center">
        <svg 
          v-for="i in 5" 
          :key="i" 
          class="shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3"
          viewBox="0 0 24 24" 
          fill="#F0BF6C"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>
