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
const { t, tm, rt } = useI18n();

const projects = computed<Project[]>(() => [
  {
    id: 1,
    title: 'Arises',
    description: t('projects.items.arises.description'),
    image: '/img/project/arises-tablet.jpeg',
    tags: Object.values(tm('projects.items.arises.tags') as Record<string, any> || {}).map(tag => rt(tag)),
    testimonials: false,
    link: 'https://arises.app/'
  },
  {
    id: 2,
    title: 'Souji Nova',
    description: t('projects.items.souji_nova.description'),
    image: '/img/project/souji-nova-desktop.png',
    tags: Object.values(tm('projects.items.souji_nova.tags') as Record<string, any> || {}).map(tag => rt(tag)),
    testimonials: true,
    testimonial: {
      avis: t('projects.items.souji_nova.testimonial.review'),
      name: "Nelson M.",
      job: t('projects.items.souji_nova.testimonial.job'),
      avatar: "/img/project/avis-souji-nova.jpg"
    },
    link: 'https://soujinova.fr/'
  },
  {
    id: 3,
    title: 'R&A Energy',
    description: t('projects.items.ra_energy.description'),
    image: '/img/project/ra-energy.png',
    tags: Object.values(tm('projects.items.ra_energy.tags') as Record<string, any> || {}).map(tag => rt(tag)),
    testimonials: true,
    testimonial: {
      avis: t('projects.items.ra_energy.testimonial.review'),
      name: "Yazid C.",
      job: t('projects.items.ra_energy.testimonial.job'),
      avatar: "/img/project/avis-ra-energy.jpg"
    },
    link: 'https://ra-energy.fr/'
  },
  {
    id: 4,
    title: 'Fontaines VTC',
    description: t('projects.items.fontaines_vtc.description'),
    image: '/img/project/fontaines-vtc-dark.jpeg',
    tags: Object.values(tm('projects.items.fontaines_vtc.tags') as Record<string, any> || {}).map(tag => rt(tag)),
    testimonials: true,
    testimonial: {
      avis: t('projects.items.fontaines_vtc.testimonial.review'),
      name: "Mario C.",
      job: t('projects.items.fontaines_vtc.testimonial.job'),
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

  <section id="projets" class="py-16 md:py-20 px-6 transition-colors duration-300 bg-[var(--bg-primary)]">
    <div class="max-w-[1000px] mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-[var(--text-primary)]" v-html="$t('projects.title')">
        </h2>
        <p class="text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]" v-html="$t('projects.subtitle')">
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
              class="w-full h-[250px] sm:h-[400px] object-cover"
            />
          </div>

          <!-- Project Info -->
          <div class="flex flex-col gap-4">
            <h3 class="font-manrope text-2xl font-semibold transition-colors duration-300 text-[var(--text-primary)]">{{ currentProject.title }}</h3>
            <p class="font-inter text-xs sm:text-sm leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]">{{ currentProject.description }}</p>

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
                     class="w-36 flex items-center justify-center h-[30px] bg-[linear-gradient(to_right,white_50%,#f0bf6c)] border-none rounded-lg font-inter font-medium text-sm text-[#0f0f0f] cursor-pointer backdrop-blur-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] transition-all duration-200 hover:brightness-105"
                     trailing-icon="i-heroicons-arrow-right-20-solid"
            >
              {{ $t('projects.cta') }}
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
        <div class="flex gap-8 mt-2.5 justify-start sm:flex-row flex-col">
          <div class="flex gap-[18px]">
            <button
              class="flex items-center justify-center w-[44px] h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] cursor-pointer transition-all duration-200 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              @click="prevProject"
              aria-label="Projet précédent"
            >
              <UIcon name="i-lucide-chevron-left" />
            </button>
            <button
              class="flex items-center justify-center w-[44px] h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] cursor-pointer transition-all duration-200 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              @click="nextProject"
              aria-label="Projet suivant"
            >
              <UIcon name="i-lucide-chevron-right" />
            </button>
          </div>

          <!-- Indicators -->
          <div class="flex items-center gap-3">
            <button
              v-for="(project, index) in projects"
              :key="project.id"
              class="w-6 h-1 rounded bg-[var(--border-subtle)] border-none cursor-pointer p-0 transition-all duration-300 hover:bg-[var(--text-secondary)]"
              :class="{ '!bg-[var(--color-gold)] !w-8': currentIndex === index }"
              @click="currentIndex = index"
              :aria-label="`Aller au projet ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

