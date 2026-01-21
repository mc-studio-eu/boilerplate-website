<script setup lang="ts">
// Types
interface Testimonial {
  id: number
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
}

// Data
// Data
const { t } = useI18n();

const testimonials = computed<Testimonial[]>(() => [
  {
    id: 1,
    content: t('testimonials.items.ra_energy.content'),
    author: {
      name: 'Yazid Chettah',
      role: t('testimonials.items.ra_energy.role'),
      avatar: '/img/testimonials/yazid-ra-energy.jpeg'
    },
  },
  {
    id: 2,
    content: t('testimonials.items.souji_nova.content'),
    author: {
      name: 'Nelson Maghoun',
      role: t('testimonials.items.souji_nova.role'),
      avatar: '/img/testimonials/nelson-souji-nova.jpg'
    },
  },
  {
    id: 3,
    content: t('testimonials.items.fontaines_vtc.content'),
    author: {
      name: 'Mario Convertino',
      role: t('testimonials.items.fontaines_vtc.role'),
      avatar: '/img/testimonials/mario-fontaines-vtc.png'
    }
  }
])

const currentIndex = ref(0)

// Navigation
const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}

const currentTestimonial = computed(() => testimonials.value[currentIndex.value])
</script>

<template>

  <p class="text-gradient text-center mb-2">{{ $t('testimonials.intro_label') }}</p>

  <p class="text-gradient text-center text-xl sm:text-3xl" v-html="$t('testimonials.intro_text')">
  </p>
  <section id="avis" class="py-12 px-6 sm:py-20 bg-[var(--bg-primary)] transition-colors duration-300 ease-out">
    <div class="max-w-[1216px] mx-auto">
      <h2 class="text-center font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-6 sm:mb-8 transition-colors duration-300 text-[var(--text-primary)]" v-html="$t('testimonials.title')">
      </h2>

      <!-- Testimonial Card -->
      <div class="w-full max-w-[460px] mx-auto p-6 bg-[#232323] border border-[var(--border-subtle)] rounded-2xl min-h-[180px] flex flex-col justify-center transition-colors duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none" v-if="currentTestimonial">
        <div class="flex flex-col gap-6">
          <!-- Quote -->
          <p class="font-inter text-xs sm:text-sm leading-[1.7] text-[var(--text-secondary)] transition-colors duration-300">
            {{ currentTestimonial.content }}
          </p>

          <!-- Author & Navigation -->
          <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <!-- Author Info -->
            <div class="flex items-center gap-3">
              <NuxtImg :src="currentTestimonial.author.avatar" class="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[#e8a84c] flex items-center justify-center object-cover"/>
              <div class="flex flex-col gap-[2px]">
                <span class="font-inter text-sm font-semibold text-[var(--text-primary)] transition-colors duration-300">{{ currentTestimonial.author.name }}</span>
                <span class="font-inter text-xs text-[var(--text-secondary)] transition-colors duration-300">{{ currentTestimonial.author.role }}</span>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex gap-3 sm:self-auto">
              <button
                  class="flex items-center justify-center w-11 h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] cursor-pointer transition-all duration-200 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  @click="prevTestimonial"
                  aria-label="Projet précédent"
              >
                <UIcon name="i-lucide-chevron-left" />
              </button>
              <button
                  class="flex items-center justify-center w-11 h-[42px] bg-[#232323] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] cursor-pointer transition-all duration-200 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  @click="nextTestimonial"
                  aria-label="Projet suivant"
              >
                <UIcon name="i-lucide-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

