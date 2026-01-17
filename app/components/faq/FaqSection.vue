<script setup lang="ts">
// Types
interface FaqItem {
  id: number
  question: string
  answer: string
}

// Data
const faqItems = ref<FaqItem[]>([
  {
    id: 1,
    question: 'Comment obtenir un devis et sous combien de temps répondez-vous ?',
    answer: 'Vous pouvez nous contacter via le formulaire de contact ou directement par WhatsApp. Nous répondons généralement sous 24h avec une première estimation. Un devis détaillé est fourni après notre premier échange.'
  },
  {
    id: 2,
    question: 'Que se passe-t-il si le design ne correspond pas à vos attentes ?',
    answer: 'Nous travaillons de manière itérative avec des validations à chaque étape. Si le design ne vous convient pas, nous effectuons les révisions nécessaires jusqu\'à votre satisfaction complète.'
  },
  {
    id: 3,
    question: 'Quel est le coût d\'un projet ?',
    answer: 'Le coût dépend de la complexité et du scope du projet. Une landing page démarre à partir de 2000€, un MVP à partir de 5000€, et un SaaS complet à partir de 10000€. Chaque projet est unique et fait l\'objet d\'un devis personnalisé.'
  },
  {
    id: 4,
    question: 'Qui est derrière MC Studio ?',
    answer: 'MC Studio est fondé par Mohamed Chettah, développeur et designer avec plus de 5 ans d\'expérience. Passionné par le produit et l\'entrepreneuriat, il accompagne startups et entreprises dans leur transformation digitale.'
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
const founder = {
  name: 'Mohamed Chettah',
  role: 'Fondateur @MC Studio'
}
</script>

<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      <div class="faq-content">
        <!-- Left Column - Info -->
        <div class="faq-info">
          <h2 class="faq-title">FAQ</h2>
          <p class="faq-subtitle">On répond à vos questions :</p>

          <!-- Founder Card -->
          <div class="founder-card">
            <div class="founder-avatar">
              <span>MC</span>
            </div>
            <div class="founder-details">
              <span class="founder-name">{{ founder.name }}</span>
              <span class="founder-role">{{ founder.role }}</span>
            </div>
          </div>

          <p class="contact-text">
            On ne répond pas à toutes les questions ? Contactez-moi directement ici :
          </p>

          <UButton 
            variant="outline"
            color="primary"
            size="md"
            class="whatsapp-btn"
          >
            <UIcon name="i-lucide-message-circle" />
            Message sur WhatsApp
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
  width: fit-content;
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

