<script setup lang="ts">

const screenProject = [
  '/img/project/alertes-infos.png',
  '/img/project/arises-saas.png',
  '/img/project/hero-raenergy.png',
  '/img/project/how-it-work-ra.png',
  '/img/project/logo-raenergy.png',
  '/img/project/souji-nova-section.png',
  '/img/project/arises-login.png',
  '/img/project/arises-before-after.png',
]
</script>

<template>

  <div class="w-[80%%] mx-auto">
    <UMarquee pause-on-hover class="" :overlay="false" :ui="{
        root: '[--duration:40s]'
      }">
      <div v-for="screen in screenProject">
        <div class="w-[300px] md:w-[480px] lg:w-[600px] h-[190px] md:h-[300px] lg:h-[375px] rounded-2xl overflow-hidden bg-[#1a1a1a] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10">
          <NuxtImg
              :src="screen"
              alt="Project Screen"
              width="700"
              height="400"
              class="shadow-lg w-full h-full rounded-xl"
              :lazy="true"
          />
        </div>
      </div>
    </UMarquee>
  </div>


</template>

<style scoped>

</style>