<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const language = ref('FR')
const languages = [
  { label: 'FR', value: 'FR' },
  { label: 'EN', value: 'EN' },
]
const activeSection = ref('')
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 200
    
    // Detect active section based on scroll position
    const sections = ['projets', 'services', 'avis', 'faq']
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
      <span class="font-inter font-normal text-sm md:text-[18px] text-white">Studio</span>
    </div>

    <!-- Nav desktop -->
    <nav class="hidden lg:flex items-center gap-[26px]">
      <NuxtLink v-for="link in ['Projets', 'Services', 'Avis', 'FAQ']" :key="link" :to="`/#${link.toLowerCase()}`" class="font-inter font-medium text-sm text-white no-underline transition-colors duration-200 hover:text-[#f0bf6c]">{{ link }}</NuxtLink>
    </nav>

    <!-- CTA Desktop -->
    <div class="hidden lg:flex items-center gap-[11px] shrink-0">
      <USelect v-model="language" :items="languages" class="flex items-center justify-center w-[70px] h-[30px] bg-[#010201] border border-[#f0bf6c] rounded-lg font-inter font-medium text-xs text-[#f0eadb] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:bg-[#1a1a1a]" />
      <UButton to="#contact" class="flex items-center justify-center w-[164px] h-[30px] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none rounded-lg font-inter font-medium text-sm text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105">Réserver un appel</UButton>
    </div>

  </header>


  <!-- Floating Navbar -->
  <Transition enter-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" leave-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" enter-from-class="opacity-0 translate-y-24" leave-to-class="opacity-0 translate-y-24">
    <nav v-if="isScrolled" class="fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-3 md:px-6 w-full pointer-events-none" :class="[isMenuOpen ? 'max-w-[340px]' : 'max-w-[700px]']">
      <div 
        :class="[
          'backdrop-blur-[20px] pointer-events-auto overflow-hidden',
          'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          isMenuOpen ? 'rounded-[24px] md:rounded-full' : 'rounded-full',
          colorMode.value === 'dark' 
            ? 'bg-[#1a1a1a]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)]' 
            : 'bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.5)]'
        ]"
      >
        <!-- Main container with smooth height transition -->
        <div 
          :class="[
            'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
            isMenuOpen ? 'py-4 px-4' : 'py-1.5 pr-1.5 pl-1.5 md:py-2 md:pr-2 md:pl-2'
          ]"
        >
          <!-- Top row: Always visible (Logo + Burger/Close) -->
          <div class="flex items-center justify-between gap-2 md:gap-3">
            <!-- Logo with Studio -->
            <NuxtLink 
              to="/" 
              :class="[
                'flex items-center gap-1.5 rounded-full py-1 px-2 md:py-1.5 md:px-3 shrink-0 transition-colors',
                colorMode.value === 'dark' ? 'bg-[#2a2a2a] hover:bg-[#333]' : 'bg-[#f5f5f5] hover:bg-[#ebebeb]'
              ]"
            >
              <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="w-6 h-6 md:w-7 md:h-7 object-contain" />
              <span 
                :class="[
                  'font-inter font-medium text-xs md:text-sm',
                  colorMode.value === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
                ]"
              >Studio</span>
            </NuxtLink>

            <!-- Desktop Links -->
            <div class="hidden md:flex items-center gap-1">
              <NuxtLink 
                v-for="link in ['Projets', 'Services', 'Avis', 'FAQ']" 
                :key="link" 
                :to="`/#${link.toLowerCase()}`" 
                :class="[
                  'font-inter font-medium text-[13px] px-3 py-1.5 rounded-full no-underline transition-all duration-200 whitespace-nowrap',
                  activeSection === link.toLowerCase() 
                    ? (colorMode.value === 'dark' ? 'bg-[#333] text-white' : 'bg-[#e8e8e8] text-[#1a1a1a]')
                    : (colorMode.value === 'dark' ? 'text-white/80 hover:bg-[#2a2a2a]' : 'text-[#1a1a1a] hover:bg-[#f0f0f0]')
                ]"
              >
                {{ link }}
              </NuxtLink>
            </div>

            <!-- Desktop Language Selector -->
            <div 
              :class="[
                'hidden md:flex items-center gap-0.5 rounded-full p-0.5 shrink-0',
                colorMode.value === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#f5f5f5]'
              ]"
            >
              <button 
                v-for="lang in ['FR', 'EN']" 
                :key="lang"
                @click="language = lang"
                :class="[
                  'font-inter font-medium text-xs px-2.5 py-1 rounded-full transition-all duration-200',
                  language === lang 
                    ? (colorMode.value === 'dark' ? 'bg-[#3a3a3a] text-white shadow-sm' : 'bg-white text-[#1a1a1a] shadow-sm')
                    : (colorMode.value === 'dark' ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1a1a1a]')
                ]"
              >
                {{ lang }}
              </button>
            </div>

            <!-- Mobile Menu Button / Close Button -->
            <button 
              @click="toggleMenu"
              :class="[
                'md:hidden flex items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-all duration-300',
                isMenuOpen 
                  ? (colorMode.value === 'dark' ? 'bg-[#2a2a2a] hover:bg-[#333]' : 'bg-[#f0f0f0] hover:bg-[#e5e5e5]')
                  : (colorMode.value === 'dark' ? 'bg-white hover:bg-gray-100' : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]')
              ]"
              :aria-label="isMenuOpen ? 'Close Menu' : 'Open Menu'"
            >
              <svg v-if="!isMenuOpen" :class="['w-4 h-4', colorMode.value === 'dark' ? 'text-[#1a1a1a]' : 'text-white']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else :class="['w-4 h-4 transition-transform duration-300', colorMode.value === 'dark' ? 'text-white' : 'text-[#1a1a1a]']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Desktop CTA -->
            <NuxtLink 
              to="#contact"
              :class="[
                'hidden md:flex items-center gap-2 border-none rounded-full py-1 pr-3 pl-1 md:py-1.5 md:pr-4 md:pl-1.5 cursor-pointer transition-all duration-200 shrink-0 hover:scale-[1.02]',
                colorMode.value === 'dark' ? 'flex items-center justify-center bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none font-inter font-medium text-sm text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105' : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'
              ]"
            >
              <NuxtImg src="/img/main/founder.png" alt="MC Studio" class="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[#f0bf6c] to-[#e8a84c] flex items-center justify-center font-inter font-semibold text-[9px] md:text-[10px] text-[#0f0f0f] object-contain" />
              <div class="flex flex-col items-start gap-px">
                <span :class="['font-inter font-semibold text-[11px] md:text-xs leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]' : 'text-white']">Réserver un appel</span>
                <span :class="['font-inter font-normal text-[9px] leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]/60' : 'text-white/60']">Discussion gratuite</span>
              </div>
            </NuxtLink>
          </div>

          <!-- Expanded content (mobile only) - Smooth expansion like the SUNDAY reference -->
          <div 
            :class="[
              'md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
              isMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            ]"
          >
            <div class="flex flex-col gap-4">
              <!-- Navigation Links - Vertical list like the reference -->
              <div class="flex flex-col gap-1">
                <NuxtLink 
                  v-for="(link, index) in ['Projets', 'Services', 'Avis', 'FAQ']" 
                  :key="link" 
                  :to="`/#${link.toLowerCase()}`"
                  @click="closeMenu"
                  :class="[
                    'font-inter font-medium text-lg py-2 px-3 rounded-xl no-underline transition-all duration-200',
                    'transform transition-all duration-500',
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
                    activeSection === link.toLowerCase() 
                      ? (colorMode.value === 'dark' ? 'bg-[#2a2a2a] text-white' : 'bg-[#f0f0f0] text-[#1a1a1a]')
                      : (colorMode.value === 'dark' ? 'text-white/80 hover:bg-[#2a2a2a] hover:text-white' : 'text-[#1a1a1a] hover:bg-[#f5f5f5]')
                  ]"
                  :style="{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }"
                >
                  {{ link }}
                </NuxtLink>
              </div>

              <!-- Divider -->
              <div :class="['h-px', colorMode.value === 'dark' ? 'bg-white/10' : 'bg-black/10']"></div>

              <!-- Bottom row: Language + CTA -->
              <div 
                :class="[
                  'flex items-center justify-between gap-3 transition-all duration-500',
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                ]"
                :style="{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }"
              >
                <!-- Language Selector -->
                <div 
                  :class="[
                    'flex items-center gap-0.5 rounded-full p-0.5',
                    colorMode.value === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#f5f5f5]'
                  ]"
                >
                  <button 
                    v-for="lang in ['FR', 'EN']" 
                    :key="lang"
                    @click="language = lang"
                    :class="[
                      'font-inter font-medium text-xs px-3 py-1.5 rounded-full transition-all duration-200',
                      language === lang 
                        ? (colorMode.value === 'dark' ? 'bg-[#3a3a3a] text-white shadow-sm' : 'bg-white text-[#1a1a1a] shadow-sm')
                        : (colorMode.value === 'dark' ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1a1a1a]')
                    ]"
                  >
                    {{ lang }}
                  </button>
                </div>

                <!-- CTA Button -->
                <NuxtLink 
                  to="#contact"
                  :class="[
                    'flex items-center gap-2 border-none rounded-full py-1.5 pr-4 pl-1.5 cursor-pointer transition-all bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none font-inter font-medium text-sm text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105',
                    colorMode.value === 'dark' ? 'bg-white hover:bg-gray-100' : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'
                  ]"
                >
                  <NuxtImg src="/img/main/founder.png" alt="MC Studio" class="w-6 h-6 md:w-7 md:h-7 object-contain rounded-full flex items-center justify-center font-inter font-semibold text-[10px] text-[#0f0f0f]" />
                  <div class="flex flex-col items-start gap-px">
                    <span :class="['font-inter font-semibold text-xs leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]' : 'text-white']">Réserver un appel</span>
                    <span :class="['font-inter font-normal text-[9px] leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]/60' : 'text-white/60']">Discussion gratuite</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </Transition>
  </div>
</template>
