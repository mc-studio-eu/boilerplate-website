<script setup lang="ts">
// Types
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

// Data
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Souji Nova',
    description: 'Développement d\'une landing page pour la société de nettoyage Souji Nova',
    image: '/img/project/souji-nova.png',
    tags: ['Landing Page', 'Responsive', 'Nuxt.js', 'Figma', 'Tailwind CSS', 'Framer Motion'],
    link: '#'
  },
  {
    id: 2,
    title: 'Clinique des Marques',
    description: 'Refonte complète de l\'identité visuelle et du site web',
    image: '/img/project/clinique-des-marques.png',
    tags: ['Branding', 'Web Design', 'UI/UX', 'Vue.js'],
    link: '#'
  },
  {
    id: 3,
    title: 'Arises',
    description: 'Application SaaS de gestion de projets',
    image: '/img/project/arises.png',
    tags: ['SaaS', 'Full-Stack', 'Nuxt.js', 'Stripe'],
    link: '#'
  }
])

const currentIndex = ref(0)

// Navigation
const nextProject = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length
}

const prevProject = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.value.length) % projects.value.length
}

// Current project computed
const currentProject = computed(() => projects.value[currentIndex.value])
</script>

<template>
  <section id="projets" class="project-section">
    <div class="project-container">
      <!-- Header -->
      <div class="project-header">
        <h2 class="project-title">Nos Projets</h2>
        <p class="project-subtitle">
          Une sélection de projets où design, code et stratégie se rencontrent.
        </p>
      </div>

      <!-- Project Showcase -->
      <div class="project-showcase">
        <div class="project-content">
          <!-- Project Image -->
          <div class="project-image-wrapper">
            <NuxtImg 
              :src="currentProject.image" 
              :alt="currentProject.title"
              class="project-image"
            />
          </div>

          <!-- Project Info -->
          <div class="project-info">
            <h3 class="project-name">{{ currentProject.title }}</h3>
            <p class="project-description">{{ currentProject.description }}</p>

            <!-- Tags -->
            <div class="project-tags">
              <UBadge 
                v-for="tag in currentProject.tags" 
                :key="tag"
                variant="outline"
                color="neutral"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- CTA -->
            <UButton 
              :to="currentProject.link"
              variant="outline"
              color="primary"
              size="sm"
              class="project-cta"
            >
              Voir le site
            </UButton>
          </div>
        </div>

        <!-- Navigation -->
        <div class="project-navigation">
          <button 
            class="nav-button nav-prev"
            @click="prevProject"
            aria-label="Projet précédent"
          >
            <UIcon name="i-lucide-chevron-left" />
          </button>
          <button 
            class="nav-button nav-next"
            @click="nextProject"
            aria-label="Projet suivant"
          >
            <UIcon name="i-lucide-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.project-section {
  padding: 80px 24px;
  background: var(--color-black);
}

.project-container {
  max-width: 832px;
  margin: 0 auto;
}

.project-header {
  text-align: center;
  margin-bottom: 48px;
}

.project-title {
  font-family: var(--font-manrope);
  font-size: 36px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 12px;
}

.project-subtitle {
  font-family: var(--font-inter);
  font-size: 16px;
  color: var(--color-grey);
}

.project-showcase {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (min-width: 768px) {
  .project-content {
    flex-direction: row;
    align-items: flex-start;
  }
}

.project-image-wrapper {
  flex-shrink: 0;
  width: 100%;
  max-width: 398px;
  border-radius: 12px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-name {
  font-family: var(--font-manrope);
  font-size: 24px;
  font-weight: 600;
  color: var(--color-white);
}

.project-description {
  font-family: var(--font-inter);
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-grey-light);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-cta {
  width: fit-content;
}

.project-navigation {
  display: flex;
  gap: 18px;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 42px;
  background: transparent;
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}
</style>

