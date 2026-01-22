<script setup lang="ts">

const screenProject = [
  '/img/project/alertes-infos.png',
  '/img/project/arises-saas.png',
  '/img/project/hero-raenergy.png',
  '/img/project/how-it-work-ra.png',
  '/img/project/logo-raenergy.png',
  '/img/project/souji-nova-section.png',
  '/img/project/arises-login.png',
]
</script>

<template>

  <div class="w-[80%%] mx-auto">
    <UMarquee pause-on-hover class="" :overlay="false"       :ui="{
        root: '[--duration:40s]'
      }">
      <div v-for="screen in screenProject">
        <div class="w-[250px] md:w-[400px] lg:w-[500px] border-[10px] rounded-lg border-[#232323]">
          <NuxtImg
              :src="screen"
              alt="Project Screen"
              width="700"
              height="400"
              class="shadow-xl border-[5px] border-primary/40"
              :lazy="true"
          />
        </div>
      </div>
    </UMarquee>
  </div>


</template>

<style scoped>

</style>