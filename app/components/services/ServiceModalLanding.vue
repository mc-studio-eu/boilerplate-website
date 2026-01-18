<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });

const modalData = {
  title: "Launch / Landing Page",
  result: "Une landing page rapide, premium, et mesurable — pensée pour transformer des visiteurs en leads.",
  forWho: [
    "Vous avez une offre claire et vous voulez plus de demandes",
    "Vous lancez un produit/service et vous voulez tester un angle",
    "Vous avez du trafic mais la page ne convertit pas"
  ],
  inclus: [
    "Architecture de page (sections + parcours)",
    "Copywriting structurel (hooks, preuves, CTA)",
    "Design UI premium (Figma)",
    "Intégration front (perf + responsive)",
    "Formulaire (ou Calendly) + routing emails",
    "Tracking : GA4 + events (clic CTA, submit, scroll)",
    "Mise en ligne + QA (mobile/tablet/desktop)"
  ],
  process: [
    "Call 20 min (objectif, cible, offre)",
    "Cadrage 48h (plan de page + messages + assets)",
    "Design → dev → tracking",
    "Mise en ligne + passation"
  ],
  delai: "7–10 jours (selon la réactivité et les assets)",
  options: [
    "A/B test (2 variantes hero)",
    "SEO landing (mots-clés + meta)",
    "Page \"Merci\" + automatisations"
  ],
  faq: [
    {
      question: "Vous écrivez tout le texte ?",
      answer: "On structure + on propose, tu valides (ou option copy complet)"
    },
    {
      question: "Je peux modifier après ?",
      answer: "Oui, livraison + support correctif"
    }
  ]
};

const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <UModal v-model:open="isOpen" class="service-modal">
    <template #content>
      <div class="modal-content rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide" style="background-color: var(--bg-secondary);">
        <!-- Header -->
        <div class="sticky top-0 p-6 pb-4 flex justify-between items-start z-10" style="background-color: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
          <div>
            <h2 class="text-xl font-semibold mb-1" style="color: var(--text-primary);">{{ modalData.title }}</h2>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">{{ modalData.result }}</p>
          </div>
          <button @click="closeModal" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
          </button>
        </div>
        
        <div class="p-6 pt-5 space-y-6">
          <!-- Pour qui -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: #F0BF6C;">Pour qui</h3>
            <ul class="space-y-2">
              <li v-for="item in modalData.forWho" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <span style="color: #F0BF6C;">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Inclus -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: #F0BF6C;">Inclus</h3>
            <ul class="grid grid-cols-1 gap-1.5">
              <li v-for="item in modalData.inclus" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-check" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color: #F0BF6C;" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Process -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: #F0BF6C;">Process</h3>
            <div class="flex flex-col gap-2">
              <div v-for="(step, idx) in modalData.process" :key="step" class="flex items-center gap-3 text-sm" style="color: var(--text-secondary);">
                <span class="w-5 h-5 rounded-full text-xs flex items-center justify-center flex-shrink-0 font-medium" style="background-color: rgba(240, 191, 108, 0.15); color: #F0BF6C;">{{ idx + 1 }}</span>
                <span>{{ step }}</span>
              </div>
            </div>
          </div>

          <!-- Délai -->
          <div class="flex items-center gap-3 py-3 px-4 rounded-lg" style="background-color: var(--bg-card);">
            <UIcon name="i-heroicons-clock" class="w-5 h-5" style="color: #F0BF6C;" />
            <div>
              <span class="text-xs uppercase tracking-wider" style="color: var(--text-secondary);">Délai</span>
              <p class="text-sm font-medium" style="color: var(--text-primary);">{{ modalData.delai }}</p>
            </div>
          </div>

          <!-- Options -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: #F0BF6C;">Options</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="option in modalData.options" :key="option" class="px-3 py-1.5 rounded-lg text-xs" style="background-color: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-subtle);">
                {{ option }}
              </span>
            </div>
          </div>

          <!-- FAQ -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: #F0BF6C;">FAQ</h3>
            <div class="space-y-3">
              <div v-for="faq in modalData.faq" :key="faq.question" class="text-sm">
                <p class="font-medium mb-0.5" style="color: var(--text-primary);">"{{ faq.question }}"</p>
                <p style="color: var(--text-secondary);">→ {{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>
