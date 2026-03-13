<script setup lang="ts">
const isScrolled = ref(false)
const isFooterVisible = ref(false)
const activeSection = ref('')
const colorMode = useColorMode()

const { t, locale, setLocale } = useI18n()
const config = useRuntimeConfig()
const platformUrl = computed(() => String(config.public.partnerPlatformUrl || ''))

const language = computed({
  get: () => locale.value.toUpperCase(),
  set: (value) => setLocale(value.toLowerCase() as 'en' | 'fr')
})

const partnerSections = ['principe', 'pourquoi', 'suivi', 'faq-partner']

const partnerNavItems = [
  { label: 'Principe', id: 'principe' },
  { label: 'Pourquoi', id: 'pourquoi' },
  { label: 'Suivi', id: 'suivi' },
  { label: 'FAQ', id: 'faq-partner' }
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 200

    for (const section of [...partnerSections].reverse()) {
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

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isFooterVisible.value = entry.isIntersecting
      })
    },
    { threshold: 0.1 }
  )

  const footerEl = document.getElementById('footer')
  if (footerEl) footerObserver.observe(footerEl)

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (footerEl) footerObserver.unobserve(footerEl)
  })
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
    leave-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0,3,1)]"
    enter-from-class="opacity-0 translate-y-24"
    leave-to-class="opacity-0 translate-y-24"
  >
    <nav
      v-if="isScrolled && !isFooterVisible"
      class="fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-3 md:px-6 w-full pointer-events-none max-w-[700px]"
    >
      <div
        :class="[
          'backdrop-blur-[20px] pointer-events-auto overflow-hidden rounded-lg',
          'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          colorMode.value === 'dark'
            ? 'bg-[#1a1a1a]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)]'
            : 'bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.5)]'
        ]"
      >
        <div class="flex items-center justify-between gap-2 px-2 py-1.5 md:px-3 md:py-2">
          <!-- Logo with Studio -->
          <NuxtLink
            to="/"
            :class="[
              'flex items-center gap-1.5 rounded-lg py-1 px-2 md:py-1.5 md:px-3 shrink-0 transition-colors',
              colorMode.value === 'dark' ? 'bg-[#2a2a2a] hover:bg-[#333]' : 'bg-[#f5f5f5] hover:bg-[#ebebeb]'
            ]"
          >
            <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="w-6 h-6 md:w-7 md:h-7 object-contain" />
            <span
              :class="[
                'font-inter font-medium text-xs md:text-sm',
                colorMode.value === 'dark' ? 'text-white' : 'text-[#1a1a1a]'
              ]"
            >
              Studio
            </span>
          </NuxtLink>

          <!-- Desktop Links -->
          <div class="hidden md:flex items-center gap-1">
            <a
              v-for="item in partnerNavItems"
              :key="item.id"
              :href="`#${item.id}`"
              :class="[
                'font-inter font-medium text-[13px] px-3 py-1.5 rounded-lg no-underline transition-all duration-200 whitespace-nowrap',
                activeSection === item.id
                  ? colorMode.value === 'dark'
                    ? 'bg-[#333] text-white'
                    : 'bg-[#e8e8e8] text-[#1a1a1a]'
                  : colorMode.value === 'dark'
                    ? 'text-white/80 hover:bg-[#2a2a2a]'
                    : 'text-[#1a1a1a] hover:bg-[#f0f0f0]'
              ]"
            >
              {{ item.label }}
            </a>
          </div>

          <!-- Desktop Language Selector -->
          <div
            :class="[
              'hidden md:flex items-center gap-0.5 rounded-lg p-0.5 shrink-0',
              colorMode.value === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#f5f5f5]'
            ]"
          >
            <button
              v-for="lang in ['FR', 'EN']"
              :key="lang"
              @click="language = lang"
              :class="[
                'font-inter font-medium text-xs px-2.5 py-1 rounded-lg transition-all duration-200',
                language === lang
                  ? colorMode.value === 'dark'
                    ? 'bg-[#3a3a3a] text-white shadow-sm'
                    : 'bg-white text-[#1a1a1a] shadow-sm'
                  : colorMode.value === 'dark'
                    ? 'text-white/60 hover:text-white'
                    : 'text-[#666] hover:text-[#1a1a1a]'
              ]"
            >
              {{ lang }}
            </button>
          </div>

          <!-- Desktop CTA -->
          <a
            :href="platformUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-2 border-none rounded-lg py-1 pr-3 pl-1 md:py-1.5 md:pr-4 md:pl-1.5 cursor-pointer transition-all duration-200 shrink-0 hover:scale-[1.02] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] font-inter font-medium text-sm text-[#0f0f0f] backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] hover:brightness-105 no-underline"
          >
            <NuxtImg
              src="/img/main/founder.png"
              alt="MC Studio"
              class="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-gradient-to-br from-[#f0bf6c] to-[#e8a84c] flex items-center justify-center font-inter font-semibold text-[9px] md:text-[10px] text-[#0f0f0f] object-contain"
            />
            <div class="flex flex-col items-start gap-px">
              <span class="text-slide-container h-[14px]">
                <span class="text-slide-wrapper">
                  <span class="text-slide-text h-[14px] leading-[14px] font-inter font-semibold text-[11px] md:text-xs">
                    {{ t('partners.nav.cta') }}
                  </span>
                </span>
              </span>
              <span class="text-slide-container h-[11px]">
                <span class="text-slide-wrapper">
                  <span
                    class="text-slide-text h-[11px] leading-[11px] font-inter font-normal text-[9px] text-[#1a1a1a]/60"
                  >
                    {{ t('partners.hero.primary_sub') }}
                  </span>
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  </Transition>
</template>

