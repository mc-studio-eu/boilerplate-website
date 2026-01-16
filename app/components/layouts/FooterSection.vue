<script setup lang="ts">
// Footer data
const currentYear = new Date().getFullYear()

const footerLinks = {
  navigation: [
    { label: 'Projets', href: '/#projets' },
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Avis', href: '/#avis' },
    { label: 'FAQ', href: '/#faq' }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-lucide-linkedin' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'i-lucide-twitter' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'i-lucide-instagram' }
  ],
  legal: [
    { label: 'Mentions légales', href: '/legal' },
    { label: 'Politique de confidentialité', href: '/privacy' }
  ]
}
</script>

<template>
  <footer class="footer-section">
    <div class="footer-container">
      <!-- Top Section -->
      <div class="footer-top">
        <!-- Logo & Description -->
        <div class="footer-brand">
          <div class="brand-logo">
            <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="logo-img" />
            <span class="logo-text">Studio</span>
          </div>
          <p class="brand-description">
            Design & Développement pour lancer vite, et bien.
          </p>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav">
          <h4 class="nav-title">Navigation</h4>
          <ul class="nav-list">
            <li v-for="link in footerLinks.navigation" :key="link.label">
              <NuxtLink :to="link.href" class="nav-link">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="footer-social">
          <h4 class="nav-title">Suivez-nous</h4>
          <div class="social-links">
            <a 
              v-for="social in footerLinks.social" 
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :aria-label="social.label"
            >
              <UIcon :name="social.icon" />
            </a>
          </div>
        </div>

        <!-- CTA -->
        <div class="footer-cta">
          <h4 class="nav-title">Prêt à démarrer ?</h4>
          <UButton 
            size="md"
            color="primary"
            class="cta-button"
          >
            Réserver un call
          </UButton>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} MC Studio. Tous droits réservés.
        </p>
        <div class="legal-links">
          <NuxtLink 
            v-for="link in footerLinks.legal" 
            :key="link.label"
            :to="link.href"
            class="legal-link"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.footer-section {
  padding: 64px 24px 32px;
  background: var(--color-black-light);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-container {
  max-width: 1216px;
  margin: 0 auto;
}

/* Top Section */
.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

@media (min-width: 640px) {
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-top {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 40px;
  height: 38px;
  object-fit: contain;
}

.logo-text {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 16px;
  background: linear-gradient(to left, var(--color-gold) 67.308%, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  font-family: var(--font-inter);
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-grey);
  max-width: 280px;
}

/* Navigation */
.footer-nav,
.footer-social,
.footer-cta {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-title {
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  font-family: var(--font-inter);
  font-size: 14px;
  color: var(--color-grey);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-gold);
}

/* Social */
.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-grey);
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--color-gold);
  color: var(--color-black);
}

/* CTA */
.cta-button {
  width: fit-content;
  background: linear-gradient(270deg, var(--color-gold) 0%, white 67.308%);
  color: var(--color-black);
  border: none;
}

/* Divider */
.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
}

/* Bottom Section */
.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

.copyright {
  font-family: var(--font-inter);
  font-size: 13px;
  color: var(--color-grey);
}

.legal-links {
  display: flex;
  gap: 24px;
}

.legal-link {
  font-family: var(--font-inter);
  font-size: 13px;
  color: var(--color-grey);
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-link:hover {
  color: var(--color-gold);
}
</style>

