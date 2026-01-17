<script setup lang="ts">
// CTA section data
const ctaTitle = 'Parlez nous de votre Projet'
const ctaSubtitle = 'Notre mission : aider les entrepreneurs et les entreprises à transformer une idée en produit concret'
</script>

<template>
  <section class="cta-section">
    <div class="cta-container">
      <!-- Header -->
      <div class="cta-header">
        <h2 class="cta-title">{{ ctaTitle }}</h2>
        <p class="cta-subtitle">{{ ctaSubtitle }}</p>
      </div>

      <!-- CTA Image/Visual -->
      <div class="cta-visual">
        <div class="visual-placeholder">
          <!-- Placeholder for Cal.com embed or contact image -->
          <div class="visual-content">
            <div class="visual-icon">
              <UIcon name="i-lucide-calendar" size="48" />
            </div>
            <h3 class="visual-title">Réservez un appel découverte</h3>
            <p class="visual-text">30 minutes pour discuter de votre projet et voir comment on peut vous aider.</p>
            
            <div class="visual-ctas">
              <UButton 
                size="lg"
                color="primary"
                class="cta-btn-primary"
              >
                Réserver un call
              </UButton>
              <UButton 
                size="lg"
                variant="outline"
                color="neutral"
                class="cta-btn-secondary"
              >
                <UIcon name="i-lucide-message-circle" />
                Discuter sur WhatsApp
              </UButton>
            </div>
          </div>
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
  margin-bottom: 48px;
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
  max-width: 950px;
  background: linear-gradient(135deg, rgba(240, 191, 108, 0.1) 0%, rgba(240, 191, 108, 0.02) 100%);
  border: 1px solid rgba(240, 191, 108, 0.2);
  border-radius: 24px;
  overflow: hidden;
}

.visual-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 64px 32px;
  text-align: center;
}

.visual-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(240, 191, 108, 0.1);
  border-radius: 20px;
  color: var(--color-gold);
}

.visual-title {
  font-family: var(--font-manrope);
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.visual-text {
  font-family: var(--font-inter);
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 400px;
  transition: color 0.3s ease;
}

.visual-ctas {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

@media (min-width: 640px) {
  .visual-ctas {
    flex-direction: row;
  }
}

.cta-btn-primary {
  background: linear-gradient(270deg, var(--color-gold) 0%, white 67.308%);
  color: var(--color-black);
  border: none;
}

.cta-btn-secondary {
  border-color: var(--border-subtle);
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.cta-btn-secondary:hover {
  border-color: var(--color-gold);
}
</style>

