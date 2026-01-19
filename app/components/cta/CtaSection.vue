<script setup lang="ts">
// CTA section data
const ctaSubtitle = 'Notre mission : aider les entrepreneurs et les entreprises à transformer une idée en produit concret'
</script>

<template>
  <section id="contact" class="cta-section">
    <div class="cta-container">
      <!-- Header -->
      <div class="cta-header">
        <h2 class="cta-title ">Parlez nous de <span class="text-gradient">votre Projet</span></h2>
        <p class="cta-subtitle">{{ ctaSubtitle }}</p>
      </div>

      <!-- CTA Image/Visual -->
      <div class="cta-visual">
        <div class="visual-placeholder">
          <iframe 
            src="https://cal.com/mc-studio/discutons-de-votre-projet?embed=true&theme=dark" 
            style="width: 100%; height: 100%; min-height: 700px; border: none;"
            title="Réserver un appel découverte"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.cta-section {
  padding: 80px 24px;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.cta-container {
  max-width: 1216px;
  margin: 0 auto;
}

.cta-header {
  text-align: center;
}

.cta-title {
  font-family: var(--font-manrope);
  font-size: 36px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

.cta-subtitle {
  font-family: var(--font-inter);
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 842px;
  margin: 0 auto;
  transition: color 0.3s ease;
}

/* Visual */
.cta-visual {
  display: flex;
  justify-content: center;
}

.visual-placeholder {
  width: 100%;
  max-width: 100%;
  min-height: 700px;
  background: transparent;
  border-radius: 24px;
  overflow: hidden;
}
</style>

