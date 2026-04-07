<script setup lang="ts">
usePageSeo(
  'Contact | Château de Rajat',
  'Contactez le Château de Rajat pour organiser un événement d’entreprise ou une réception privée.',
  '/img/chateau/hero.jpg'
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Contactez-nous pour votre événement, votre réception ou votre demande d’information."
      description="L’équipe du Château de Rajat est à votre disposition pour échanger autour de votre projet et vous orienter vers le format le plus adapté."
      image="/img/chateau/hero.jpg"
      compact
    />

    <section class="section-space">
      <div class="container-site">
        <ContactPanel />
      </div>
    </section>
  </div>
</template>
