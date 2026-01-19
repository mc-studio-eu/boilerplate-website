<script setup lang="ts">
// Types
interface ProcessStep {
  id: number
  title: string
  row: number
  col: number
}

// Process steps data based on Figma layout
const steps = ref<ProcessStep[]>([
  { id: 1, title: 'Meeting Call', row: 1, col: 1 },
  { id: 2, title: 'Proposition', row: 2, col: 2 },
  { id: 3, title: 'Kick-Off', row: 2, col: 3 },
  { id: 4, title: 'Branding', row: 3, col: 3 },
  { id: 5, title: 'UI & UX', row: 4, col: 3 },
  { id: 6, title: 'Validation', row: 4, col: 4 },
  { id: 7, title: 'Integration', row: 5, col: 4 },
  { id: 8, title: 'Validation', row: 5, col: 5 },
  { id: 9, title: 'Déploiement', row: 5, col: 6 }
])

// Service tabs
const serviceTabs = ['Landing Page', 'Launch : SaaS', 'Sprint : MVP']
const activeTab = ref(0)

// Timeline duration
const projectDuration = ref('15 jours')
</script>

<template>
  <section id="process" class="py-20 px-6 transition-colors duration-300 bg-[var(--bg-primary)]">
    <div class="max-w-[1216px] mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h2 class="font-manrope text-4xl font-semibold mb-3 transition-colors duration-300 text-[var(--text-primary)]">
          Pro<span class="text-gradient">cessus</span>
        </h2>
        <p class="font-inter text-base transition-colors duration-300 text-[var(--text-secondary)]">
          Un process clair. Des livrables concrets. Zéro friction.
        </p>
      </div>

      <!-- Service Tabs -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
        <button
          v-for="(tab, index) in serviceTabs"
          :key="tab"
          class="px-6 py-2 font-inter text-sm font-medium bg-transparent border border-[var(--border-subtle)] rounded-lg cursor-pointer transition-all duration-200 text-[var(--text-secondary)] hover:border-[var(--color-gold)] hover:text-[var(--text-primary)]"
          :class="{ '!bg-[var(--color-gold)] !border-[var(--color-gold)] !text-[#0f0f0f]': activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Timeline Grid -->
      <div class="relative mb-16">
        <div class="grid grid-cols-3 md:grid-cols-6 md:grid-rows-[repeat(5,94px)] gap-0 relative p-5">
          <!-- Grid lines (visual) -->
          <div class="absolute inset-0 pointer-events-none hidden md:block">
            <div v-for="i in 5" :key="`row-${i}`" class="absolute left-0 right-0 h-px bg-[var(--border-subtle)]" :style="{ top: `${(i - 1) * 20}%` }"></div>
            <div v-for="i in 6" :key="`col-${i}`" class="absolute top-0 bottom-0 w-px bg-[var(--border-subtle)]" :style="{ left: `${(i - 1) * 16.66}%` }"></div>
          </div>

          <!-- Process Steps -->
          <div
            v-for="step in steps"
            :key="step.id"
            class="flex items-center justify-center px-6 py-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl m-2 transition-all duration-200 hover:border-[var(--color-gold)] hover:scale-[1.02]"
            :class="{ 'md:!col-auto md:!row-auto': false }"
            :style="{
              gridRow: step.row,
              gridColumn: step.col
            }"
          >
            <span class="font-inter text-sm font-medium whitespace-nowrap transition-colors duration-300 text-[var(--text-primary)]">{{ step.title }}</span>
          </div>
        </div>

        <!-- Duration Badge -->
        <div class="flex justify-center mt-6">
          <span class="px-5 py-2 font-inter text-sm font-medium text-[var(--color-gold)] bg-[rgba(240,191,108,0.1)] border border-[var(--color-gold)] rounded-lg">
            Temps du Projet : {{ projectDuration }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

