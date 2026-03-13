<script setup lang="ts">
</script>

<template>
  <main class="main-container min-h-screen p-6 transition-colors duration-300">
    <PartnersHeroSection />
    <PartnersFloatingNavbar />

    <!-- Main Content with Border Frame -->
    <div class="relative mx-auto max-w-[1440px]">
      <!-- Left Border Line -->
      <div class="border-line absolute left-0 xl:left-[50px] top-0 bottom-0 w-px"></div>

      <!-- Right Border Line -->
      <div class="border-line absolute right-0 xl:right-[50px] top-0 bottom-0 w-px"></div>

      <!-- Le principe -->
      <PartnersPrincipleSection />

      <!-- À qui s’adresse le programme
      <div class="section-separator"></div>
      <PartnersAudienceSection /> -->

      <!-- Pourquoi rejoindre -->
      <div class="section-separator"></div>
      <PartnersWhySection />

      <!-- Exemple concret -->
      <div class="section-separator"></div>
      <PartnersExampleSection />

      <!-- Suivi et visibilité -->
      <div class="section-separator"></div>
      <PartnersTrackingSection />

      <!-- Paliers & récompenses -->
      <div class="section-separator"></div>
      <PartnersRewardsSection />

      <!-- FAQ Partner -->
      <div class="section-separator"></div>
      <PartnersFaqSection />

      <!-- CTA final -->
      <div class="section-separator"></div>
      <PartnersCtaSection />

      <!-- Cal.com Partner Integration -->
      <div class="section-separator"></div>
      <PartnersCalSection />

      <div class="section-separator mb-10"></div>
    </div>

    <!-- Footer -->
    <FooterSection />

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </main>
</template>

<style scoped>
.main-container {
  background-color: var(--bg-primary);
}

.border-line {
  background: linear-gradient(to bottom, var(--border-color) 0%, var(--border-color) 50%, transparent 100%);
}

:global(.dark) .border-line {
  background: linear-gradient(
    to bottom,
    rgba(240, 191, 108, 0.4) 0%,
    rgba(240, 191, 108, 0.2) 50%,
    transparent 100%
  );
}

:global(.light) .border-line {
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0.15) 0%,
    rgba(26, 26, 26, 0.08) 50%,
    transparent 100%
  );
}

.section-separator {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--border-color) 20%,
    var(--border-color) 80%,
    transparent 100%
  );
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 146px);
}

:global(.dark) .section-separator {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(240, 191, 108, 0.25) 20%,
    rgba(240, 191, 108, 0.25) 80%,
    transparent 100%
  );
}

:global(.light) .section-separator {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(26, 26, 26, 0.12) 20%,
    rgba(26, 26, 26, 0.12) 80%,
    transparent 100%
  );
}

@media (max-width: 1024px) {
  .section-separator {
    max-width: 100%;
  }
}

main > div > section,
main > section {
  scroll-margin-top: 80px;
}
</style>

