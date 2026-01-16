<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' }
]
</script>

<template>
  <footer class="footer relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/img/main/footer-bg.png');"></div>
    
    <!-- Fallback gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#2a1810] to-[#f0bf6c]/20"></div>
    
    <!-- Content -->
    <div class="relative z-10 flex flex-col gap-12 sm:gap-16 items-start px-6 py-6 sm:py-8">
      <!-- Social Links -->
      <div class="flex items-center justify-between w-full">
        <div class="flex gap-6 sm:gap-8 items-center">
          <a 
            v-for="social in socialLinks" 
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="font-inter font-medium text-base sm:text-xl text-white tracking-tight hover:text-[#f0bf6c] transition-colors"
          >
            {{ social.label }}
          </a>
        </div>
      </div>
      
      <!-- Logo & Copyright -->
      <div class="flex flex-col gap-5 sm:gap-6 items-center justify-center w-full">
        <!-- Logo -->
        <div class="flex flex-col gap-4 sm:gap-5 items-center justify-center w-full">
          <div class="flex items-center gap-2.5">
            <NuxtImg 
              src="/img/main/logo.svg" 
              alt="MC Studio" 
              class="w-[50px] sm:w-[74px] h-auto shadow-lg"
            />
            <span class="logo-text font-inter font-normal text-xl sm:text-[26px] text-center">
              Studio
            </span>
          </div>
          
          <!-- Divider -->
          <div class="w-full h-px bg-gradient-to-r from-transparent via-[#d6d4cc] to-transparent"></div>
        </div>
        
        <!-- Copyright -->
        <p class="font-inter font-medium text-sm sm:text-[15px] text-white text-center">
          © {{ currentYear }} - MC Studio
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  min-height: 280px;
}

.logo-text {
  background: linear-gradient(to left, #f0bf6c 67.308%, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>

