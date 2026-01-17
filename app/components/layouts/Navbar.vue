<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const language = ref('FR')
const languages = [
  { label: 'FR', value: 'FR' },
  { label: 'EN', value: 'EN' },
]
const activeSection = ref('')

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 200
    
    // Detect active section based on scroll position
    const sections = ['projets', 'services', 'process', 'avis', 'faq']
    for (const section of sections.reverse()) {
      const el = document.getElementById(section)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 300) {
          activeSection.value = section
          break
        }
      }
    }
    if (window.scrollY < 300) activeSection.value = ''
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
const closeMenu = () => isMenuOpen.value = false
</script>

<template>
  <div>
    <!-- Header -->
    <header class="flex items-center justify-between gap-0 pt-6 px-4 justify-center md:gap-[100px] md:pt-12 md:px-5 w-full max-w-[782px] mx-auto">
    <!-- Logo -->
    <div class="flex items-center gap-2.5 shrink-0">
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="w-9 h-[34px] md:w-[50px] md:h-12 object-contain" />
      </NuxtLink>
      <span class="font-inter font-normal text-sm md:text-[18px] bg-[linear-gradient(to_left,#f0bf6c_20.308%,white)] bg-clip-text text-transparent">Studio</span>
    </div>

    <!-- Nav desktop -->
    <nav class="hidden md:flex items-center gap-[26px]">
      <NuxtLink v-for="link in ['Projets', 'Services', 'Process', 'Avis', 'FAQ']" :key="link" :to="`/#${link.toLowerCase()}`" class="font-inter font-medium text-sm text-white no-underline transition-colors duration-200 hover:text-[#f0bf6c]">{{ link }}</NuxtLink>
    </nav>

    <!-- CTA Desktop -->
    <div class="hidden md:flex items-center gap-[11px] shrink-0">
      <USelect v-model="language" :items="languages" class="flex items-center justify-center w-[70px] h-[30px] bg-[#010201] border border-[#f0bf6c] rounded-lg font-inter font-medium text-xs text-[#f0eadb] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:bg-[#1a1a1a]" />
      <UButton class="flex items-center justify-center w-[164px] h-[30px] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none rounded-lg font-inter font-medium text-base text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105">Réserver un call</UButton>
    </div>

    <!-- Mobile Overlay -->
    <Transition enter-active-class="transition-opacity duration-300" leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0" leave-to-class="opacity-0">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 z-40 backdrop-blur-[4px]" @click="closeMenu"></div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition-transform duration-300" leave-active-class="transition-transform duration-300" enter-from-class="translate-x-full" leave-to-class="translate-x-full">
      <nav v-if="isMenuOpen" class="fixed top-0 right-0 w-full min-[480px]:w-[280px] h-screen bg-[#0a0a0a] border-l border-[#f0bf6c]/20 z-50 flex flex-col pt-24 px-8 pb-10">
        <NuxtLink v-for="link in ['Projets', 'Services', 'Process', 'Avis', 'FAQ']" :key="link" :to="`/#${link.toLowerCase()}`" @click="closeMenu" class="font-inter font-normal text-lg text-white no-underline py-4 border-b border-white/10 transition-colors duration-200 hover:text-[#f0bf6c]">{{ link }}</NuxtLink>
        <div class="flex flex-col gap-3 mt-auto pt-8">
          <button class="flex items-center justify-center w-[53px] h-[30px] bg-[#010201] border border-[#f0bf6c] rounded-lg font-inter font-medium text-xs text-[#f0eadb] cursor-pointer">FR</button>
          <button class="flex items-center justify-center w-full h-[30px] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none rounded-lg font-inter font-medium text-base text-[#0f0f0f] cursor-pointer">Réserver un call</button>
        </div>
      </nav>
    </Transition>
  </header>

  <!-- Floating Navbar -->
  <Transition enter-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" leave-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" enter-from-class="opacity-0 translate-y-24" leave-to-class="opacity-0 translate-y-24">
    <nav v-if="isScrolled" class="fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-3 md:px-6 w-full max-w-[850px] pointer-events-none">
      <div class="flex items-center justify-between gap-2 md:gap-3 bg-white/95 backdrop-blur-[20px] rounded-full py-1.5 pr-1.5 pl-1.5 md:py-2 md:pr-2 md:pl-2 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.5)] pointer-events-auto">
        <!-- Logo with Studio -->
        <NuxtLink to="/" class="flex items-center gap-1.5 bg-[#f5f5f5] rounded-full py-1 px-2 md:py-1.5 md:px-3 shrink-0 transition-colors hover:bg-[#ebebeb]">
          <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="w-6 h-6 md:w-7 md:h-7 object-contain" />
          <span class="font-inter font-medium text-xs md:text-sm text-[#1a1a1a] hidden min-[400px]:inline">Studio</span>
        </NuxtLink>

        <!-- Links -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink 
            v-for="link in ['Projets', 'Services', 'Process', 'Avis', 'FAQ']" 
            :key="link" 
            :to="`/#${link.toLowerCase()}`" 
            :class="[
              'font-inter font-medium text-[13px] px-3 py-1.5 rounded-full no-underline transition-all duration-200 whitespace-nowrap',
              activeSection === link.toLowerCase() 
                ? 'bg-[#e8e8e8] text-[#1a1a1a]' 
                : 'text-[#1a1a1a] hover:bg-[#f0f0f0]'
            ]"
          >
            {{ link }}
          </NuxtLink>
        </div>

        <!-- Language Selector (desktop) -->
        <div class="hidden md:flex items-center gap-0.5 bg-[#f5f5f5] rounded-full p-0.5">
          <button 
            v-for="lang in ['FR', 'EN']" 
            :key="lang"
            @click="language = lang"
            :class="[
              'font-inter font-medium text-xs px-2.5 py-1 rounded-full transition-all duration-200',
              language === lang 
                ? 'bg-white text-[#1a1a1a] shadow-sm' 
                : 'text-[#666] hover:text-[#1a1a1a]'
            ]"
          >
            {{ lang }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="md:hidden flex items-center justify-center w-9 h-9 bg-[#1a1a1a] rounded-full cursor-pointer transition-all duration-200 hover:bg-[#2a2a2a]"
          aria-label="Menu"
        >
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- CTA (desktop) -->
        <button class="hidden md:flex items-center gap-2 bg-[#1a1a1a] border-none rounded-full py-1 pr-3 pl-1 md:py-1.5 md:pr-4 md:pl-1.5 cursor-pointer transition-all duration-200 shrink-0 hover:bg-[#2a2a2a] hover:scale-[1.02]">
          <div class="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[#f0bf6c] to-[#e8a84c] flex items-center justify-center font-inter font-semibold text-[9px] md:text-[10px] text-[#0f0f0f]">MC</div>
          <div class="flex flex-col items-start gap-px">
            <span class="font-inter font-semibold text-[11px] md:text-xs text-white leading-tight">Réserver un call</span>
            <span class="font-inter font-normal text-[8px] md:text-[9px] text-white/60 leading-tight">Discussion gratuite</span>
          </div>
        </button>
      </div>
    </nav>
  </Transition>
  </div>
</template>
