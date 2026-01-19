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
    id: 0,
    question: 'Quels types de clients accompagnez-vous ?',
    answer:
        "Nous accompagnons des entrepreneurs, startups et entreprises. Nos projets vont de la landing page orientée conversion à des plateformes plus complètes (MVP, SaaS, dashboards), avec une approche centrée sur le design, la clarté de l’offre et la performance."
  },
  {
    id: 1,
    question: 'Comment obtenir un devis et sous combien de temps répondez-vous ?',
    answer:
        "Réserver un appel ou contactez nous directement sur WhatsApp. Nous répondons généralement sous 24h avec quelques questions rapides et une première estimation. Un devis détaillé est ensuite envoyé après un échange de cadrage (objectifs, contenu, délais, périmètre)."
  },
  {
    id: 5,
    question: "Comment se déroule la collaboration ?",
    answer:
        "Vous aurez un canal WhatsApp privé avec nous pour fluidifier les échanges, les briefs et la livraison. Si besoin, on planifie des points de suivi.\n\nTout se passe sur Notion : vous déposez vos demandes (texte, vidéo, docs), on les analyse et on vous donne une deadline. En général, on livre 2 à 3 tâches par semaine selon la complexité.\n\nUne fois livré, vous validez ou demandez des retouches, puis on enchaîne sur la suite."
  },
  {
    id: 2,
    question: "Que se passe-t-il si le design ne correspond pas à vos attentes ?",
    answer:
        "On avance étape par étape avec des validations (direction créative, maquettes, itérations). Chaque projet inclut des révisions pour ajuster jusqu’à obtenir un rendu aligné avec votre vision. L’objectif : un design qui vous ressemble et qui convertit."
  },
  {
    id: 3,
    question: "Quel est le coût d'un projet ?",
    answer:
        "Le budget dépend du périmètre (nombre de pages, fonctionnalités, animations, contenu, intégrations). Après un premier échange, on vous propose une recommandation claire avec un devis transparent — sans surprise."
  },
  {
    id: 4,
    question: 'Qui est derrière MC Studio ?',
    answer:
        "MC Studio réunit une équipe de 4 experts de differents domaines (direction produit, design, dev frontend, dev backend et gestion de projet). Fondé et dirigé par Mohamed Chettah, le studio accompagne entrepreneurs, startups et entreprises de la stratégie au lancement."
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
          <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-8 transition-colors duration-300" style="color: var(--text-primary);">
            <span class="text-gradient">FAQ</span>
          </h2>
          <p class="faq-subtitle">On répond à vos questions :</p>

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

