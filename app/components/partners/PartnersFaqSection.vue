<script setup lang="ts">
interface FaqItem {
  id: number
  question: string
  answer: string
}

const { t } = useI18n()

const faqItems: FaqItem[] = [
  {
    id: 0,
    question: t('partners.faq.items.0.question'),
    answer: t('partners.faq.items.0.answer')
  },
  {
    id: 1,
    question: t('partners.faq.items.1.question'),
    answer: t('partners.faq.items.1.answer')
  },
  {
    id: 2,
    question: t('partners.faq.items.2.question'),
    answer: t('partners.faq.items.2.answer')
  },
  {
    id: 3,
    question: t('partners.faq.items.3.question'),
    answer: t('partners.faq.items.3.answer')
  },
  {
    id: 4,
    question: t('partners.faq.items.4.question'),
    answer: t('partners.faq.items.4.answer')
  }
]

const openFaqItems = ref<number[]>([0])

const toggleFaqItem = (id: number) => {
  if (openFaqItems.value.includes(id)) {
    openFaqItems.value = openFaqItems.value.filter((itemId) => itemId !== id)
  } else {
    openFaqItems.value.push(id)
  }
}

const isFaqOpen = (id: number) => openFaqItems.value.includes(id)
</script>

<template>
  <section
    id="faq-partner"
    class="py-16 px-0 sm:px-4 bg-[var(--bg-primary)] transition-colors duration-300"
  >
    <div class="max-w-[1216px] mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
      <div class="space-y-4">
        <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-gradient">
          {{ t('partners.faq.title') }}
        </h2>
        <p class="font-inter text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]">
          {{ t('partners.faq.subtitle') }}
        </p>
      </div>

      <div class="flex flex-col">
        <div
          v-for="item in faqItems"
          :key="item.id"
          class="border-b border-[var(--border-subtle)] transition-colors duration-300"
        >
          <button
            class="flex items-center justify-between gap-4 w-full py-4 bg-transparent border-none cursor-pointer text-left"
            type="button"
            @click="toggleFaqItem(item.id)"
          >
            <span
              class="font-inter text-[15px] font-medium text-[var(--text-primary)] leading-normal transition-colors duration-300"
            >
              {{ item.question }}
            </span>
            <div
              class="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-200"
              :class="{ '!bg-[var(--color-gold)] !text-[#0f0f0f]': isFaqOpen(item.id) }"
            >
              <UIcon :name="isFaqOpen(item.id) ? 'i-lucide-minus' : 'i-lucide-plus'" />
            </div>
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[260px]"
            leave-from-class="opacity-100 max-h-[260px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="isFaqOpen(item.id)" class="pb-4 overflow-hidden">
              <p
                class="font-inter text-sm leading-relaxed text-[var(--text-secondary)] transition-colors duration-300 whitespace-pre-line"
              >
                {{ item.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

