<script setup lang="ts">
const site = useBoilerplateSite()

const faqWhatsappBtn = ref(null)
const faqWhatsappWrapper = ref(null)
useTextSlideAnimation(faqWhatsappBtn, faqWhatsappWrapper)

const openItems = ref<number[]>([site.faqItems.value[0]?.id || 1])

const toggleItem = (id: number) => {
  const index = openItems.value.indexOf(id)
  if (index > -1) openItems.value.splice(index, 1)
  else openItems.value.push(id)
}

const isOpen = (id: number) => openItems.value.includes(id)
</script>

<template>
  <section id="faq" class="py-20 px-6 bg-[var(--bg-primary)] transition-colors duration-300">
    <div class="max-w-[1216px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16">
        <div class="flex flex-col">
          <h2 class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-8 text-[var(--text-primary)]">
            {{ site.copy.value.faq.title }}
          </h2>
          <p class="font-inter text-base text-[var(--text-secondary)] mb-4">{{ site.copy.value.faq.subtitle }}</p>

          <div class="flex items-center gap-3.5 py-4">
            <div class="w-[55px] h-[55px] rounded-lg bg-[linear-gradient(135deg,var(--color-gold)_0%,#e8a84c_100%)] flex items-center justify-center font-inter font-bold text-lg text-black shrink-0">
              {{ site.companyInitials.value }}
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-inter text-sm font-semibold text-[var(--text-primary)]">{{ site.copy.value.faq.cardTitle }}</span>
              <span class="font-inter text-[13px] text-[var(--text-secondary)]">{{ site.companyName.value }}</span>
            </div>
          </div>

          <p class="font-inter text-sm leading-relaxed text-[var(--text-secondary)] mt-4">
            {{ site.copy.value.faq.cardText }}
          </p>

          <a
            ref="faqWhatsappBtn"
            :href="site.sourceLink.value || '#showcase'"
            :target="site.sourceLink.value ? '_blank' : undefined"
            class="mt-2 w-fit px-4 py-2 rounded-md font-medium text-sm cursor-pointer bg-[#232323] text-white hover:bg-transparent transition-colors duration-200 no-underline inline-block"
          >
            <span class="text-slide-container h-[20px]">
              <span ref="faqWhatsappWrapper" class="text-slide-wrapper">
                <span class="text-slide-text h-[20px] leading-[20px]">{{ site.copy.value.faq.button }}</span>
                <span class="text-slide-text h-[20px] leading-[20px]">{{ site.copy.value.faq.button }}</span>
              </span>
            </span>
          </a>
        </div>

        <div class="flex flex-col">
          <div v-for="item in site.faqItems.value" :key="item.id" class="border-b border-[var(--border-subtle)]">
            <button class="flex items-center justify-between gap-4 w-full py-6 bg-transparent border-none cursor-pointer text-left" @click="toggleItem(item.id)">
              <span class="font-inter text-[15px] font-medium text-[var(--text-primary)] leading-normal">{{ item.question }}</span>
              <div class="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-200" :class="{ '!bg-[var(--color-gold)] !text-[#0f0f0f]': isOpen(item.id) }">
                <UIcon :name="isOpen(item.id) ? 'i-lucide-minus' : 'i-lucide-plus'" />
              </div>
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-300 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[200px]"
              leave-from-class="opacity-100 max-h-[200px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="isOpen(item.id)" class="pb-6 overflow-hidden">
                <p class="font-inter text-sm leading-relaxed text-[var(--text-secondary)] whitespace-pre-line">{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-slide-container {
  display: block;
  position: relative;
  overflow: hidden;
}

.text-slide-wrapper {
  display: flex;
  flex-direction: column;
}

.text-slide-text {
  display: block;
}
</style>
