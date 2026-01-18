<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });

const modalData = {
  title: "Sprint / MVP",
  result: "Un produit minimal mais réel : utilisable par des vrais utilisateurs, pour apprendre vite et itérer.",
  forWho: [
    "Vous avez une idée et vous voulez valider sans brûler 6 mois",
    "Vous avez besoin d'un prototype \"sérieux\" en production",
    "Vous devez montrer un produit à des partenaires / early users"
  ],
  inclus: [
    "Atelier de cadrage (scope = 1 cœur de valeur)",
    "UI/UX sur Figma (parcours principal)",
    "Dev full-stack (front + back)",
    "Auth + gestion utilisateurs (si nécessaire)",
    "Base de données + CRUD essentiels",
    "Déploiement (staging + prod)",
    "Analytics basique / logs",
    "1 itération post-retours (petite boucle d'amélioration)"
  ],
  nonInclus: [
    "Marketplace complexe / multi-rôles avancés",
    "\"20 features\" / backlog infini",
    "Branding complet (c'est une option)"
  ],
  process: [
    "Cadrage (objectifs, user story, périmètre)",
    "Figma (parcours + UI)",
    "Dev (build)",
    "Mise en prod + retours + itération"
  ],
  delai: "3–6 semaines (selon complexité)",
  options: [
    "Admin dashboard",
    "Paiement Stripe (si le MVP doit monétiser)",
    "Emails transactionnels + onboarding"
  ],
  faq: [
    {
      question: "MVP ou SaaS ?",
      answer: "MVP = valider vite, SaaS = prêt à vendre + scaler (billing, onboarding, infra)"
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

          <!-- Non inclus -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: var(--text-secondary);">Non inclus</h3>
            <ul class="space-y-1.5">
              <li v-for="item in modalData.nonInclus" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-muted);">
                <span>–</span>
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
