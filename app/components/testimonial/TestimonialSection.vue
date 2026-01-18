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
const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    content: 'MC Studio a réalisé notre site internet et le résultat est excellent. Travail rapide, professionnel et très soigné. Le site est moderne, fluide et parfaitement adapté à nos besoins. Un studio sérieux et réactif que l\'on recommande sans hésiter !',
    author: {
      name: 'Sophie Martin',
      role: 'CEO, Souji Nova'
    }
  },
  {
    id: 2,
    content: 'Une collaboration exceptionnelle du début à la fin. L\'équipe a su comprendre nos besoins et les traduire en une solution technique élégante. Je recommande vivement !',
    author: {
      name: 'Thomas Dupont',
      role: 'Fondateur, TechStart'
    }
  },
  {
    id: 3,
    content: 'Professionnalisme, créativité et réactivité. MC Studio a dépassé toutes nos attentes avec un design moderne et une expérience utilisateur fluide.',
    author: {
      name: 'Marie Bernard',
      role: 'Directrice Marketing, InnovaHub'
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

  <p class="text-gradient text-center text-xl sm:text-2xl">
    Chez MC Studio on à le gout du travail bien fait, on itère vite <br> tout en ayant une attention particulière <br> au travail delivré
  </p>
  <section id="avis" class="testimonial-section">
    <div class="">
      <h2 class="text-center font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-8 transition-colors duration-300" style="color: var(--text-primary);">
        Ce qu'en disent <span class="text-gradient">nos clients</span>
      </h2>

      <!-- Testimonial Card -->
      <div class="testimonial-card">
        <div class="card-content">
          <!-- Quote -->
          <p class="testimonial-quote">
            {{ currentTestimonial.content }}
          </p>

          <!-- Author & Navigation -->
          <div class="card-footer">
            <!-- Author Info -->
            <div class="author-info">
              <div class="author-avatar">
                <span>{{ currentTestimonial.author.name.charAt(0) }}</span>
              </div>
              <div class="author-details">
                <span class="author-name">{{ currentTestimonial.author.name }}</span>
                <span class="author-role">{{ currentTestimonial.author.role }}</span>
              </div>
            </div>

            <!-- Navigation -->
            <div class="testimonial-navigation">
              <button 
                class="nav-button"
                @click="prevTestimonial"
                aria-label="Avis précédent"
              >
                <UIcon name="i-lucide-circle-chevron-left" />
              </button>
              <button 
                class="nav-button"
                @click="nextTestimonial"
                aria-label="Avis suivant"
              >
                <UIcon name="i-lucide-circle-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.testimonial-section {
  padding: 80px 24px;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.testimonial-container {
  max-width: 1216px;
  margin: 0 auto;
}

.testimonial-header {
  text-align: center;
  margin-bottom: 48px;
}

.testimonial-title {
  font-family: var(--font-manrope);
  font-size: 36px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

/* Testimonial Card */
.testimonial-card {
  max-width: 460px;
  margin: 0 auto;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

:global(.light) .testimonial-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.testimonial-quote {
  font-family: var(--font-inter);
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* Author */
.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-gold) 0%, #e8a84c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: 16px;
  color: var(--color-black);
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author-name {
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.author-role {
  font-family: var(--font-inter);
  font-size: 12px;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

/* Navigation */
.testimonial-navigation {
  display: flex;
  gap: 12px;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-button:hover {
  color: var(--color-gold);
}

/* Responsive */
@media (max-width: 480px) {
  .card-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .testimonial-navigation {
    align-self: flex-end;
  }
}
</style>

