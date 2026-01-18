<script setup lang="ts">
// Types
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string,
  testimonials?: boolean,
  testimonial?: {
    avis: string
    name: string
    job: string
    avatar: string
  }
}

// Data
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Arises',
    description:
        "Arises est un SaaS IA qui transforme votre calendrier en plan d’action.\nOn a conçu ce SaaS du logo jusqu'au lancement en ligne, tout sur mesure pour maximiser l’activation.",
    image: '/img/project/arises-tablet.jpeg',
    tags: ['Sprint', 'AI SaaS', 'Landing Page', 'Design', 'UI/UX', 'Copywriting', 'Branding'],
    testimonials: false,
    link: 'https://arises.app/'
  },
  {
    id: 2,
    title: 'Souji Nova',
    description:
        "Souji Nova est une société de nettoyage pour particuliers et professionnels.\nLanding page sur-mesure : design rassurant, offre claire, parcours optimisé pour générer plus de demandes.",
    image: '/img/project/souji-nova-desktop.png',
    tags: ['Landing Page', 'Branding', 'Design', 'UI/UX', 'Copywriting', 'Société de nettoyage'],
    testimonials: true,
    testimonial: {
      avis: "MC Studio nous a réalisé un super site internet, très intuitif et très pro. De bons conseils et à l’écoute de ses clients, je recommande !",
      name: "Nelson Maghoun",
      job: "Co-fondateur Souji Nova",
      avatar: "/img/project/avis-souji-nova.jpg"
    },
    link: 'https://soujinova.fr/'
  },
  {
    id: 3,
    title: 'R&A Energy',
    description:
        "R&A Energy est un courtier en énergie dédié aux entreprises et aux pros.\n\nBranding & landing page premium : message simplifié, réassurance renforcée et parcours orienté prise de contact.",
    image: '/img/project/ra-energy.png',
    tags: ['Landing Page', 'Branding', 'Design', 'UI/UX', 'Copywriting', 'Logo', 'Courtage en énergie'],
    testimonials: true,
    testimonial: {
      avis: "MC Studio a réalisé notre site internet et le résultat est excellent. Travail rapide, professionnel et très soigné. Le site est moderne, fluide et parfaitement adapté à notre activité.",
      name: "Yazid Chettah",
      job: "Co-fondateur R&A Energy",
      avatar: "/img/project/avis-ra-energy.jpg"
    },
    link: 'https://ra-energy.fr/'
  },
  {
    id: 4,
    title: 'Fontaines VTC',
    description:
        "Fontaines VTC est une entreprise de transport privé (réservations en ligne).\nOptimisation SEO + CTA : meilleure visibilité locale et plus de conversions sur la prise de réservation.",
    image: '/img/project/fontaines-vtc-dark.jpeg',
    tags: ['SEO', 'Optimisation CTA', 'Design', 'Copywriting', 'Entreprise VTC'],
    testimonials: true,
    testimonial: {
      avis: "MC studio m’a accompagné dans mon projet digital, entreprise très sérieuse professionnelle je la recommande !",
      name: "Mario Convertino",
      job: "Dirigeant Fontaines VTC",
      avatar: "/img/project/avis-fontaines-vtc.jpg"
    },
    link: 'https://fontaines-vtc.fr/'
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
    <div class="max-w-[1000px] mx-auto">
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
      <div class="flex flex-col gap-6" v-if="currentProject">
        <div class="flex flex-col md:flex-row md:items-start gap-8">
          <!-- Project Image -->
          <div class="shrink-0 w-full max-w-[510px] rounded-xl overflow-hidden">
            <NuxtImg 
              :src="currentProject.image" 
              :alt="currentProject.title"
              class="w-full h-[400px] object-cover"
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
                class="font-inter bg-white text-black"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- Call to Action -->
            <UButton :to="currentProject.link"
                     target="_blank"
                     class="w-34 flex items-center justify-center h-[30px] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none rounded-lg font-inter font-medium text-sm text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105"
                     trailing-icon="i-heroicons-arrow-right-20-solid"
            >
              Voir le projet
            </UButton>

            <!-- Testimonials -->

            <div v-if="currentProject.testimonials && currentProject?.testimonial">
              <div class="flex flex-col p-3 gap-3 rounded-xl text-white bg-[#232323]">

                <p class="text-xs xl:whitespace-pre-line"> {{ currentProject?.testimonial.avis }}</p>

                <div class="flex items-center gap-3">
<!--                  <UAvatar :src="avisClient.avatar" size="xl"/>-->
                  <div>
                    <p class="absans xl:text-md text-sm font-semibold">{{ currentProject.testimonial.name }}</p>
                    <p class="text-xs font-light">{{ currentProject.testimonial.job }}</p>
                  </div>
                </div>
              </div>
            </div>

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
  background: #232323;
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

