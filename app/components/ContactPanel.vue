<script setup lang="ts">
const site = useSiteContent()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Demande de renseignement - ${fullName.value || 'Site Château de Rajat'}`)
  const body = encodeURIComponent(
    [
      `Nom: ${fullName.value}`,
      `Email: ${email.value}`,
      `Téléphone: ${phone.value}`,
      '',
      'Message:',
      message.value
    ].join('\n')
  )

  return `${site.emailHref}?subject=${subject}&body=${body}`
})
</script>

<template>
  <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
    <div class="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-panel)] p-8">
      <p class="eyebrow">Coordonnées</p>
      <h2 class="mt-4 font-serif-display text-4xl text-[var(--color-ink)]">Contactez-nous pour présenter votre projet</h2>
      <div class="mt-8 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
        <p v-for="line in site.address" :key="line">{{ line }}</p>
        <p><a :href="site.phoneHref" class="transition hover:text-[var(--color-ink)]">{{ site.phone }}</a></p>
        <p><a :href="site.emailHref" class="transition hover:text-[var(--color-ink)]">{{ site.email }}</a></p>
      </div>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <a :href="site.phoneHref" class="btn-primary text-center">Appeler</a>
        <a :href="site.mapUrl" target="_blank" rel="noreferrer" class="btn-secondary text-center">Voir l’itinéraire</a>
      </div>

      <div class="mt-10 overflow-hidden rounded-[1.25rem]">
        <iframe
          :src="site.mapEmbed"
          title="Carte Château de Rajat"
          class="h-72 w-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    <form class="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_30px_70px_rgba(77,56,33,0.05)]" :action="mailtoHref" method="get">
      <p class="eyebrow">Formulaire</p>
      <h2 class="mt-4 font-serif-display text-4xl text-[var(--color-ink)]">Présenter votre projet</h2>
      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <label class="field">
          <span class="field-label">Nom</span>
          <input v-model="fullName" type="text" name="name" class="field-input" required />
        </label>
        <label class="field">
          <span class="field-label">Email</span>
          <input v-model="email" type="email" name="email" class="field-input" required />
        </label>
        <label class="field">
          <span class="field-label">Téléphone</span>
          <input v-model="phone" type="tel" name="phone" class="field-input" />
        </label>
        <label class="field">
          <span class="field-label">Type d’événement</span>
          <select class="field-input" name="eventType">
            <option>Séminaire ou événement d’entreprise</option>
            <option>Mariage ou réception privée</option>
            <option>Demande d’information générale</option>
          </select>
        </label>
        <label class="field sm:col-span-2">
          <span class="field-label">Votre message</span>
          <textarea v-model="message" name="message" rows="7" class="field-input resize-none" required />
        </label>
      </div>

      <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="max-w-md text-sm leading-7 text-[var(--color-muted)]">
          Le formulaire ouvre votre messagerie avec les informations déjà préparées pour simplifier la prise de contact.
        </p>
        <button type="submit" class="btn-primary">Envoyer la demande</button>
      </div>
    </form>
  </div>
</template>
