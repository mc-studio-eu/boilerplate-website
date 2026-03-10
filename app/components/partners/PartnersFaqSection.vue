<script setup lang="ts">
interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 0,
    question: 'Qui peut rejoindre le programme ?',
    answer:
      "Le programme Partner MC Studio est ouvert à toute personne disposant d’un bon réseau : indépendants, freelances, créatifs, commerciaux, agences, ainsi que votre réseau personnel et professionnel.\n\nL’essentiel : comprendre nos offres, recommander des prospects sérieux et qualifiés, et respecter une posture professionnelle."
  },
  {
    id: 1,
    question: 'Comment fonctionne la commission de 10 % ?',
    answer:
      "Vous nous mettez en relation avec un prospect pour un besoin en design produit, UX/UI ou développement front.\nNous échangeons directement avec lui, cadrons le besoin et réalisons une proposition.\n\nSi le projet est signé, vous touchez 10 % du montant total HT facturé sur la première mission (hors renouvellement, hors abonnements récurrents éventuels)."
  },
  {
    id: 2,
    question: 'Quand la commission est-elle versée ?',
    answer:
      "La commission est versée une fois la facture réglée par le client et les fonds effectivement reçus par MC Studio.\n\nEn pratique, le versement intervient généralement entre 30 et 45 jours après la signature, selon les modalités de paiement du client."
  },
  {
    id: 3,
    question: 'Puis-je suivre mes recommandations et mes gains ?',
    answer:
      "Oui. Chaque partenaire dispose d’un suivi structuré :\n- liste des prospects transmis\n- statut des échanges (en cours, signé, non retenu)\n- montant des projets signés\n- commissions associées.\n\nVous gardez ainsi une vision claire et transparente de la valeur générée."
  },
  {
    id: 4,
    question: 'Y a-t-il des récompenses supplémentaires ?',
    answer:
      "Oui. Au-delà des 10 % de commission par projet signé, nous mettons en place un système de paliers.\n\nPar exemple, à partir de 10 recommandations abouties, vous débloquez une récompense premium pensée pour les partenaires les plus engagés.\n\nL’objectif : construire une relation sur le long terme, gagnant-gagnant."
  }
]

const openFaqItems = ref<number[]>([0])

const toggleFaqItem = (id: number) => {
  if (openFaqItems.value.includes(id)) {
    openFaqItems.value = openFaqItems.value.filter((itemId) => itemId !== id)
  } else {
    openFaqItems.value.push(id)
  }
}

const isFaqOpen = (id: number) => openFaqItems.value.includes(id)
</script>

<template>
  <section
    class="py-16 px-0 sm:px-4 bg-[var(--bg-primary)] transition-colors duration-300"
  >
    <div class="max-w-[1216px] mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
      <div class="flex flex-col gap-4">
        <p class="font-inter text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
          FAQ
        </p>
        <h2
          class="section-title font-manrope font-medium text-2xl sm:text-3xl md:text-[32px] mb-3 transition-colors duration-300 text-[var(--text-primary)]"
        >
          Questions fréquentes sur le programme Partner.
        </h2>
        <p
          class="text-sm sm:text-base max-w-xl leading-relaxed transition-colors duration-300 text-[var(--text-secondary)]"
        >
          Si vous avez d’autres questions, nous pourrons les aborder lors de notre premier échange. Le
          cadre du programme est pensé pour être clair dès le départ.
        </p>
      </div>

      <div class="flex flex-col">
        <div
          v-for="item in faqItems"
          :key="item.id"
          class="border-b border-[var(--border-subtle)] transition-colors duration-300"
        >
          <button
            class="flex items-center justify-between gap-4 w-full py-4 bg-transparent border-none cursor-pointer text-left"
            type="button"
            @click="toggleFaqItem(item.id)"
          >
            <span
              class="font-inter text-[15px] font-medium text-[var(--text-primary)] leading-normal transition-colors duration-300"
            >
              {{ item.question }}
            </span>
            <div
              class="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-200"
              :class="{ '!bg-[var(--color-gold)] !text-[#0f0f0f]': isFaqOpen(item.id) }"
            >
              <UIcon :name="isFaqOpen(item.id) ? 'i-lucide-minus' : 'i-lucide-plus'" />
            </div>
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[260px]"
            leave-from-class="opacity-100 max-h-[260px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="isFaqOpen(item.id)" class="pb-4 overflow-hidden">
              <p
                class="font-inter text-sm leading-relaxed text-[var(--text-secondary)] transition-colors duration-300 whitespace-pre-line"
              >
                {{ item.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

