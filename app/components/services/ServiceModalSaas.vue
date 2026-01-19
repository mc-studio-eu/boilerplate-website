<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { required: true });
const emit = defineEmits(['next', 'prev']);
const colorMode = useColorMode();

const modalData = {
    id: "saas",
    title: "Launch : SaaS",
    result: "Un produit complet, robuste et prêt à scaler (foundation solide).",
    forWho: [
      "Vous avez validé l’intérêt et vous voulez accélérer la mise sur le marché",
      "Vous voulez une base propre (sécurité, perf, maintenance) dès le départ",
      "Vous avez besoin de paiements, rôles, admin, onboarding"
    ],
    inclus: [
      "Cadrage produit (MVP++ : roadmap courte + priorités)",
      "Design system + UI/UX (écrans clés + composants)",
      "Dev full-stack complet (front + back)",
      "Auth + rôles/permissions",
      "Back-office / admin (gestion users, contenu, etc.)",
      "Paiements (Stripe) : checkout + abonnements (si nécessaire)",
      "Emails transactionnels + onboarding",
      "CI/CD + déploiement (staging + prod) + monitoring",
      "Sécurité baseline + sauvegardes + docs de handover"
    ],
    delai: "6–10+ semaines (selon scope)",
    scope: ["Produit complet", "fondations tech solides", "scalabilité"],
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
          <div class="flex items-center gap-3">
            <NuxtLink 
              to="#contact"
              @click="closeModal"
              :class="[
                'hidden sm:flex items-center gap-2 border-none rounded-full py-1 pr-3 pl-1 cursor-pointer transition-all duration-200 shrink-0 hover:scale-[1.02]',
                colorMode.value === 'dark' ? 'bg-[linear-gradient(to_right,white_50%,#f0bf6c)] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_10px_10px_rgba(11,32,103,0.05)] hover:brightness-105' : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'
              ]"
            >
              <NuxtImg src="/img/main/founder.png" alt="MC Studio" class="w-6 h-6 rounded-full bg-gradient-to-br from-[#f0bf6c] to-[#e8a84c] flex items-center justify-center font-inter font-semibold text-[9px] text-[#0f0f0f] object-contain" />
              <div class="flex flex-col items-start gap-px">
                <span :class="['font-inter font-semibold text-[11px] leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]' : 'text-white']">Réserver un appel</span>
                <span :class="['font-inter font-normal text-[9px] leading-tight', colorMode.value === 'dark' ? 'text-[#1a1a1a]/60' : 'text-white/60']">Discussion gratuite</span>
              </div>
            </NuxtLink>

            <div class="flex items-center gap-1">
              <button @click="emit('prev')" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
              </button>
              <button @click="emit('next')" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </button>
              <div class="w-px h-4 mx-1" style="background-color: var(--border-subtle);"></div>
              <button @click="closeModal" class="p-1.5 rounded-lg transition-colors hover:opacity-70" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
         
        <div class="p-6 pt-5 space-y-6">
          <!-- Pour qui -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3">Pour qui</h3>
            <ul class="space-y-2">
              <li v-for="item in modalData.forWho" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <span style="color: #F0BF6C;">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Inclus -->
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider mb-3">Inclus</h3>
            <ul class="grid grid-cols-1 gap-1.5">
              <li v-for="item in modalData.inclus" :key="item" class="flex items-start gap-2 text-sm" style="color: var(--text-secondary);">
                <UIcon name="i-heroicons-check" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color: #F0BF6C;" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Délai -->
          <div class="flex items-center gap-3 py-3 px-4 rounded-lg" style="background-color: var(--bg-card);">
            <div>
              <span class="text-xs uppercase tracking-wider" style="color: var(--text-secondary);">Délai</span>
              <p class="text-sm font-medium" style="color: var(--text-primary);">{{ modalData.delai }}</p>
            </div>
          </div>

        </div>
      </div>
    </template>
  </UModal>
</template>
