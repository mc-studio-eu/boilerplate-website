<script setup lang="ts">
const socialLinks = [
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' }
]
</script>

<template>
  <footer class="relative overflow-hidden rounded-lg min-h-[330px]">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url('/img/main/background.png')` }"
    ></div>
    
    <!-- Content -->
    <div class="relative z-10 flex flex-col gap-16 items-start pt-6 pb-[25px] px-6">
      <!-- Social Links -->
      <div class="flex items-center justify-center w-full">
        <div class="flex gap-8 items-baseline">
          <a 
            v-for="social in socialLinks" 
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="font-inter font-medium text-xl text-white tracking-[-0.4px] leading-[1.4] hover:text-[#f0bf6c] transition-colors duration-200"
          >
            {{ social.label }}
          </a>
        </div>
      </div>
      
      <!-- Logo & Copyright -->
      <div class="flex flex-col gap-6 items-center justify-center w-full">
        <!-- Logo -->
        <div class="flex flex-col gap-5 items-center justify-center w-full">
          <div class="flex items-center gap-2.5 h-[111px]">
            <NuxtImg 
              src="/img/main/logo.svg" 
              alt="MC Studio" 
              class="w-[74px] h-[71px] object-contain shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
            <span class="logo-text font-inter font-normal text-[26px] text-center">
              Studio
            </span>
          </div>
          
          <!-- Divider -->
          <div class="w-full h-[11px] border-b border-[#d6d4cc]"></div>
        </div>
        
        <!-- Copyright -->
        <p class="font-inter font-medium text-[15px] text-white text-center">
          © 2026 - MC Studio
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo-text {
  background: linear-gradient(to left, #f0bf6c 67.308%, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
