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
  <section id="process" class="process-section">
    <div class="process-container">
      <!-- Header -->
      <div class="process-header">
        <h2 class="process-title">Processus</h2>
        <p class="process-subtitle">
          Un process clair. Des livrables concrets. Zéro friction.
        </p>
      </div>

      <!-- Service Tabs -->
      <div class="process-tabs">
        <button
          v-for="(tab, index) in serviceTabs"
          :key="tab"
          class="tab-button"
          :class="{ 'tab-button--active': activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Timeline Grid -->
      <div class="process-timeline">
        <div class="timeline-grid">
          <!-- Grid lines (visual) -->
          <div class="grid-lines">
            <div v-for="i in 5" :key="`row-${i}`" class="grid-line-horizontal"></div>
            <div v-for="i in 6" :key="`col-${i}`" class="grid-line-vertical"></div>
          </div>

          <!-- Process Steps -->
          <div 
            v-for="step in steps" 
            :key="step.id"
            class="process-step"
            :style="{
              gridRow: step.row,
              gridColumn: step.col
            }"
          >
            <span class="step-title">{{ step.title }}</span>
          </div>
        </div>

        <!-- Duration Badge -->
        <div class="duration-badge">
          <span>Temps du Projet : {{ projectDuration }}</span>
        </div>
      </div>

      <!-- Quote -->
      <div class="process-quote">
        <p class="quote-text">
          Chez MC Studio on a le goût du travail bien fait, on itère vite tout en ayant 
          une attention particulière au travail délivré
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.process-section {
  padding: 80px 24px;
  background: var(--color-black);
}

.process-container {
  max-width: 1216px;
  margin: 0 auto;
}

.process-header {
  margin-bottom: 48px;
}

.process-title {
  font-family: var(--font-manrope);
  font-size: 36px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 12px;
}

.process-subtitle {
  font-family: var(--font-inter);
  font-size: 16px;
  color: var(--color-grey);
}

/* Tabs */
.process-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
}

.tab-button {
  padding: 8px 24px;
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-grey);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-button:hover {
  border-color: var(--color-gold);
  color: var(--color-white);
}

.tab-button--active {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-black);
}

/* Timeline Grid */
.process-timeline {
  position: relative;
  margin-bottom: 64px;
}

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 94px);
  gap: 0;
  position: relative;
  padding: 20px;
}

.grid-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-line-horizontal {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.grid-line-horizontal:nth-child(1) { top: 0; }
.grid-line-horizontal:nth-child(2) { top: 20%; }
.grid-line-horizontal:nth-child(3) { top: 40%; }
.grid-line-horizontal:nth-child(4) { top: 60%; }
.grid-line-horizontal:nth-child(5) { top: 80%; }

.grid-line-vertical {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.grid-line-vertical:nth-child(6) { left: 0; }
.grid-line-vertical:nth-child(7) { left: 16.66%; }
.grid-line-vertical:nth-child(8) { left: 33.33%; }
.grid-line-vertical:nth-child(9) { left: 50%; }
.grid-line-vertical:nth-child(10) { left: 66.66%; }
.grid-line-vertical:nth-child(11) { left: 83.33%; }

/* Process Steps */
.process-step {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  background: var(--color-black-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin: 8px;
  transition: all 0.2s ease;
}

.process-step:hover {
  border-color: var(--color-gold);
  transform: scale(1.02);
}

.step-title {
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-white);
  white-space: nowrap;
}

/* Duration Badge */
.duration-badge {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.duration-badge span {
  padding: 8px 20px;
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gold);
  background: rgba(240, 191, 108, 0.1);
  border: 1px solid var(--color-gold);
  border-radius: 8px;
}

/* Quote */
.process-quote {
  text-align: center;
  padding: 40px;
}

.quote-text {
  font-family: var(--font-manrope);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--color-white);
  max-width: 726px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .process-tabs {
    flex-direction: column;
    align-items: center;
  }

  .timeline-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }

  .process-step {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  .quote-text {
    font-size: 22px;
  }
}
</style>

