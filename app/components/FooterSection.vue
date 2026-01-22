<template>
  <footer id="footer" :style="{ backgroundImage: `url('/img/main/background.png')` }" class="rounded-lg bg-cover bg-center">
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">

      <!-- Main Container -->
      <div class="flex flex-col md:flex-row items-center justify-between text-sm font-inter md:gap-0 gap-8">

        <!-- Identity Group (Logo + Legal) -->
        <!-- "contents" on mobile allows children to be sorted individually in the main flex container. 
             "flex" on desktop groups them together on the left. -->
        <div class="contents md:flex md:items-center md:gap-6 md:order-1 text-white">

          <!-- Logo Section (Mobile: Order 1) -->
          <div class="flex items-center gap-3 order-1">
            <NuxtImg src="/img/main/logo.svg" alt="MC Studio Logo" class="h-10 md:h-8 w-auto" />
            <span class="font-inter text-lg font-medium text-white tracking-tight">Studio</span>
          </div>

        </div>

        <!-- Clocks Section (Mobile: Order 2, Desktop: Order 2) -->
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 order-2 font-medium text-gray-300">
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-primary uppercase tracking-wider">Montréal</span>
            <span>{{ timeMontreal }}</span>
          </div>
          <div class="hidden md:block w-px h-8 bg-gray-700/50"></div>
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-primary uppercase tracking-wider">Lyon</span>
            <span>{{ timeLyon }}</span>
          </div>
          <div class="hidden md:block w-px h-8 bg-gray-700/50"></div>
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-primary uppercase tracking-wider">London</span>
            <span>{{ timeLondon }}</span>
          </div>
        </div>

        <!-- Socials Section (Mobile: Order 3, Desktop: Order 3) -->
        <div class="flex items-center gap-4 text-white order-3">
          <a href="https://www.linkedin.com/in/mohamed-chettah/" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-gold)] transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/mc_studio_eu/" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-gold)] transition-colors">Instagram</a>
          <a href="https://x.com/MohameDevWeb" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-gold)] transition-colors">X</a>
        </div>
      </div>

      <!-- Legal Section (Mobile: Order 4) -->
      <div class="flex flex-col justify-center md:flex-row items-center gap-2 md:gap-4 text-white order-4 md:order-none w-full md:w-auto mt-12">
        <p class="text-sm md:text-xs">&copy; {{ new Date().getFullYear() }} MC Studio</p>
        <!-- Links -->
        <div class="flex gap-4 text-xs">
          <NuxtLink :to="localePath('/privacy')" class="hover:text-white transition-colors">{{ $t('legal.links.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('/terms')" class="hover:text-white transition-colors">{{ $t('legal.links.terms') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
const { t } = useI18n()

// Time logic
const timeMontreal = ref('')
const timeLyon = ref('')
const timeLondon = ref('')

let interval

const updateTime = () => {
  const now = new Date()
  
  timeMontreal.value = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Montreal',
    hour12: false
  }).format(now)

  timeLyon.value = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
    hour12: false
  }).format(now)

  timeLondon.value = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
    hour12: false
  }).format(now)
}

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>