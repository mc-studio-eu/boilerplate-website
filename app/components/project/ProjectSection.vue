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
    title: 'Arises',
    description: "SaaS IA qui automatise la planification et la priorisation.\nUn copilote de calendrier pour rester focus et gagner du temps.",
    image: '/img/project/arises-tablet.jpeg',
    tags: ['Sprint', 'AI SaaS', 'Landing Page', 'Design', 'UI/UX', 'Copywriting', 'Branding'],
    link: '#'
  },
  {
    id: 2,
    title: 'Souji Nova',
    description: "Landing page sur-mesure pour une société de nettoyage.\nDesign rassurant + parcours optimisé pour générer plus de demandes.",
    image: '/img/project/souji-nova-desktop.png',
    tags: ['Landing Page', 'Branding', 'Design', 'UI/UX', 'Copywriting', 'Société de nettoyage'],
    link: '#'
  },
  {
    id: 3,
    title: 'R&A Energy',
    description: "Site vitrine premium pour un courtier en énergie.\nOffre clarifiée, crédibilité renforcée, conversion orientée prise de contact.",
    image: '/img/project/ra-energy-nohandl.jpeg',
    tags: ['Landing Page', 'Branding', 'Design', 'UI/UX', 'Copywriting', 'Logo', 'Courtage en énergie'],
    link: '#'
  },
  {
    id: 4,
    title: 'Fontaines VTC',
    description: "Site vitrine conçu pour présenter et vendre l’offre clairement.\nMise en confiance et call-to-action pour capter des leads.",
    image: '/img/project/fontaine-vtc.jpeg',
    tags: ['SEO', 'Optimisation CTA', 'Design', 'Copywriting','Entreprise VTC'],
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
  <section id="projets" class="py-16 md:py-20 px-6 transition-colors duration-300" style="background-color: var(--bg-primary);">
    <div class="max-w-[832px] mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300" style="color: var(--text-primary);">
          Nos <span class="text-gradient">Projets</span>
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300" style="color: var(--text-secondary);">
          Une sélection de projets où design, code et stratégie se rencontrent.
        </p>
      </div>

      <!-- Project Showcase -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-col md:flex-row md:items-start gap-8">
          <!-- Project Image -->
          <div class="shrink-0 w-full max-w-[510px] rounded-xl overflow-hidden">
            <NuxtImg 
              :src="currentProject.image" 
              :alt="currentProject.title"
              class="w-full h-auto object-cover"
            />
          </div>

          <!-- Project Info -->
          <div class="flex flex-col gap-4">
            <h3 class="font-manrope text-2xl font-semibold transition-colors duration-300" style="color: var(--text-primary);">{{ currentProject.title }}</h3>
            <p class="font-inter text-sm leading-relaxed transition-colors duration-300" style="color: var(--text-secondary);">{{ currentProject.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
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
            <a 
              :href="currentProject.link"
              class="project-cta-link"
            >
              Voir le site
            </a>
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

.project-cta-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  background: linear-gradient(90deg, #F0BF6C 0%, #FFF8E7 100%);
  color: #1a1a1a;
  border: none;
  box-shadow: 0 4px 15px rgba(240, 191, 108, 0.3);
}

.project-cta-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 191, 108, 0.4);
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
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}
</style>

