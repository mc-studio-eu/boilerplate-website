<template>
  <footer id="footer" :style="{ backgroundImage: `url('/img/main/background.png')` }" class="rounded-lg bg-cover bg-center">
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-sm text-gray-400 font-inter">
        
        <!-- Left: Copyright & Legal -->
        <div class="flex items-center gap-4 order-3 md:order-1">
          <p>&copy; {{ new Date().getFullYear() }} MC Studio</p>
          <span class="hidden md:inline text-gray-600">|</span>
          <div class="flex gap-4">
            <NuxtLink :to="localePath('/privacy')" class="hover:text-white transition-colors">{{ $t('legal.links.privacy') }}</NuxtLink>
            <NuxtLink :to="localePath('/terms')" class="hover:text-white transition-colors">{{ $t('legal.links.terms') }}</NuxtLink>
          </div>
        </div>

        <!-- Center: World Clock -->
        <div class="flex items-center gap-6 order-1 md:order-2 font-medium text-gray-300">
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-gray-500 uppercase tracking-wider">Montréal</span>
            <span>{{ timeMontreal }}</span>
          </div>
          <div class="w-px h-8 bg-gray-700/50"></div>
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-gray-500 uppercase tracking-wider">Lyon</span>
            <span>{{ timeLyon }}</span>
          </div>
          <div class="w-px h-8 bg-gray-700/50"></div>
          <div class="flex flex-col items-center">
            <span class="text-[10px] text-gray-500 uppercase tracking-wider">London</span>
            <span>{{ timeLondon }}</span>
          </div>
        </div>

        <!-- Right: Socials -->
        <div class="flex items-center gap-6 order-2 md:order-3">
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/in/mohamed-chettah/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Instagram</a>
          </div>
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