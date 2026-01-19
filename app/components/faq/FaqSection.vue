<script setup lang="ts">
// Types
interface FaqItem {
  id: number
  question: string
  answer: string
}

// Data
// Data
const { t } = useI18n();

const faqItems = computed<FaqItem[]>(() => [
  {
    id: 0,
    question: t('faq.items.0.question'),
    answer: t('faq.items.0.answer')
  },
  {
    id: 1,
    question: t('faq.items.1.question'),
    answer: t('faq.items.1.answer')
  },
  {
    id: 5,
    question: t('faq.items.5.question'),
    answer: t('faq.items.5.answer')
  },
  {
    id: 2,
    question: t('faq.items.2.question'),
    answer: t('faq.items.2.answer')
  },
  {
    id: 3,
    question: t('faq.items.3.question'),
    answer: t('faq.items.3.answer')
  },
  {
    id: 4,
    question: t('faq.items.4.question'),
    answer: t('faq.items.4.answer')
  }
])


// Track open items
const openItems = ref<number[]>([])

const toggleItem = (id: number) => {
  const index = openItems.value.indexOf(id)
  if (index > -1) {
    openItems.value.splice(index, 1)
  } else {
    openItems.value.push(id)
  }
}

const isOpen = (id: number) => openItems.value.includes(id)

// Founder info
const founder = computed(() => ({
  name: 'Mohamed Chettah',
  role: t('faq.founder_role')
}))
</script>

<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      <div class="faq-content">
        <!-- Left Column - Info -->
        <div class="faq-info">
          <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-8 transition-colors duration-300" style="color: var(--text-primary);" v-html="$t('faq.title')">
          </h2>
          <p class="faq-subtitle">{{ $t('faq.subtitle') }}</p>

          <!-- Founder Card -->
          <div class="founder-card">
            <div class="founder-avatar">
              <NuxtImg
                src="/img/main/founder.png"
                alt="Avatar de Mohamed Chettah"
                width="55"
                height="55"
                class="rounded-md object-cover"
              />
            </div>
            <div class="founder-details">
              <span class="founder-name">{{ founder.name }}</span>
              <span class="founder-role">{{ founder.role }}</span>
            </div>
          </div>

          <p class="contact-text">
            {{ $t('faq.contact_text') }}
          </p>

          <UButton 
            size="md"
            class="whatsapp-btn w-43 cursor-pointer bg-[#232323] text-white"
          >
            {{ $t('faq.whatsapp_btn') }}
          </UButton>
        </div>

        <!-- Right Column - Accordion -->
        <div class="faq-accordion">
          <div 
            v-for="item in faqItems" 
            :key="item.id"
            class="accordion-item"
            :class="{ 'accordion-item--open': isOpen(item.id) }"
          >
            <button 
              class="accordion-header"
              @click="toggleItem(item.id)"
            >
              <span class="accordion-question">{{ item.question }}</span>
              <div class="accordion-icon">
                <UIcon :name="isOpen(item.id) ? 'i-lucide-minus' : 'i-lucide-plus'" />
              </div>
            </button>
            <Transition name="accordion">
              <div v-if="isOpen(item.id)" class="accordion-content">
                <p class="accordion-answer">{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.faq-section {
  padding: 80px 24px;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.faq-container {
  max-width: 1216px;
  margin: 0 auto;
}

.faq-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 768px) {
  .faq-content {
    grid-template-columns: 280px 1fr;
    gap: 64px;
  }
}

/* Left Column */
.faq-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-title {
  font-family: var(--font-manrope);
  font-size: 36px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.faq-subtitle {
  font-family: var(--font-inter);
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

/* Founder Card */
.founder-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0;
}

.founder-avatar {
  width: 55px;
  height: 55px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--color-gold) 0%, #e8a84c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-black);
}

.founder-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.founder-name {
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.founder-role {
  font-family: var(--font-inter);
  font-size: 13px;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.contact-text {
  font-family: var(--font-inter);
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-top: 16px;
  transition: color 0.3s ease;
}

.whatsapp-btn {
  margin-top: 8px;
}

/* Accordion */
.faq-accordion {
  display: flex;
  flex-direction: column;
}

.accordion-item {
  border-bottom: 1px solid var(--border-subtle);
  transition: border-color 0.3s ease;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
}

.accordion-question {
  font-family: var(--font-inter);
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.5;
  transition: color 0.3s ease;
}

.accordion-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--border-subtle);
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.accordion-item--open .accordion-icon {
  background: var(--color-gold);
  color: #0f0f0f;
}

.accordion-content {
  padding-bottom: 24px;
  overflow: hidden;
}

.accordion-answer {
  font-family: var(--font-inter);
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  white-space: pre-line;
}

/* Accordion Animation */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>

