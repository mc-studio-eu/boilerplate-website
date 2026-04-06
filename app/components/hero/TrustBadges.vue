<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'

const site = useBoilerplateSite()
const rotatingStats = computed(() => site.trustStats.value)
const rotatingServices = computed(() => site.trustServices.value)
const locations = computed(() => site.trustMarkets.value.map((city) => ({ city })))

const statsIndex = ref(0)
const locationIndex = ref(0)
const servicesIndex = ref(0)
const statsWrapper = ref(null)
const locationWrapper = ref(null)
const servicesWrapper = ref(null)

const currentStat = computed(() => rotatingStats.value[statsIndex.value] || '')
const currentLocation = computed(() => locations.value[locationIndex.value] || { city: '' })
const currentService = computed(() => rotatingServices.value[servicesIndex.value] || '')

let mainInterval = null

// Animation synchronisée pour tous les badges
const animateAll = () => {
  const wrappers = [statsWrapper.value, servicesWrapper.value, locationWrapper.value].filter(Boolean)
  
  // Animate out all
  gsap.to(wrappers, {
    yPercent: -100,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    stagger: 0,
    onComplete: () => {
      // Update all indices
      statsIndex.value = (statsIndex.value + 1) % rotatingStats.value.length
      servicesIndex.value = (servicesIndex.value + 1) % rotatingServices.value.length
      locationIndex.value = (locationIndex.value + 1) % locations.value.length
      
      // Reset positions
      gsap.set(wrappers, { yPercent: 100 })
      
      // Animate in all
      gsap.to(wrappers, {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0
      })
    }
  })
}

onMounted(() => {
  mainInterval = setInterval(animateAll, 2500)
})

onUnmounted(() => {
  if (mainInterval) clearInterval(mainInterval)
})
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-9 mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-2 sm:px-4 w-full max-w-[400px] sm:max-w-none">
    
    <!-- Badge 1: Rotating Stats -->
    <div class="badge-fixed flex items-center justify-center gap-1.5 sm:gap-2 h-7 sm:h-8 md:h-9 py-1 sm:py-1.5 px-2.5 sm:px-3 md:px-4 bg-white border border-[#f0bf6c] rounded-md sm:rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(240,191,108,0.2)]">
      <svg class="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="#0f0f0f" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div class="text-container w-[120px] sm:w-[140px]">
        <span ref="statsWrapper" class="text-content font-medium text-[11px] sm:text-xs md:text-sm text-[#474747] whitespace-nowrap text-center">
          {{ currentStat }}
        </span>
      </div>
    </div>

    <!-- Badge 2: Rotating Services -->
    <div class="badge-fixed flex items-center justify-center gap-1.5 sm:gap-2 h-7 sm:h-8 md:h-9 py-1 sm:py-1.5 px-2.5 sm:px-3 md:px-4 bg-white border border-[#f0bf6c] rounded-md sm:rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(240,191,108,0.2)]">
      <svg class="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="#0f0f0f" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div class="text-container w-[90px] sm:w-[100px]">
        <span ref="servicesWrapper" class="text-content font-medium text-[11px] sm:text-xs md:text-sm text-[#474747] whitespace-nowrap text-center">
          {{ currentService }}
        </span>
      </div>
    </div>
    
    <!-- Badge 3: Market / reach -->
    <div class="badge-fixed flex items-center justify-center h-7 sm:h-8 md:h-9 py-1 sm:py-1.5 px-2.5 sm:px-3 md:px-4 bg-white border border-[#f0bf6c] rounded-md sm:rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(240,191,108,0.2)]">
      <div class="text-container w-[75px] sm:w-[90px]">
        <div ref="locationWrapper" class="location-content">
          <div class="flex w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shadow-sm shrink-0 items-center justify-center bg-[#0f0f0f]">
            <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 text-[#F0BF6C]" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M3 12h18"/>
              <path d="M12 3a14.9 14.9 0 0 1 0 18"/>
              <path d="M12 3a14.9 14.9 0 0 0 0 18"/>
              <path d="M5 7.5h14"/>
              <path d="M5 16.5h14"/>
            </svg>
          </div>
          <span class="font-medium text-[11px] sm:text-xs md:text-sm text-[#474747] whitespace-nowrap">
            {{ currentLocation.city }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 16px;
}

.text-content {
  display: block;
  width: 100%;
  text-align: center;
}

.location-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
}

@media (min-width: 640px) {
  .text-container {
    height: 18px;
  }
  .location-content {
    gap: 8px;
  }
}
</style>
