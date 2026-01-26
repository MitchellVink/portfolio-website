<template>
  <div class="home-page pb-10 lg:pb-20 xl:pb-24">
    <UiHeroV2 />
    <UiIntro
      class="mt-10 lg:mt-16"
      title="Waar creativiteit en 
      techniek elkaar ontmoeten."
      content="Bij KNIV-Studios vertaal ik ideeën naar (digitale) belevingen die inspireren, verbinden en overtuigen. Met een mix van strategie, design en technologie bouw ik aan gebruiksvriendelijke oplossingen die indruk maken."
    />
    <LogoCloud/>
  

    <UiServices />
    <div>
      <TextMedia
          title="Portfolio"
          content="Mijn werk is een mix van content, design en technologie, altijd met de eindgebruiker als vertrekpunt. Benieuwd naar een selectie van mijn werk? Ik laat het graag aan je zien!"
          image="/assets/services/content-creatie.jpeg"
          position="right"
          url="/cases"
          backgroundColor="#F3F4F6"
          class="mb-16 lg:mb-24"
          buttonText="Portfolio"
      />

      <TextMedia
          title="Contact"
          content="Heb je een vraag, idee, compliment of behoefte aan even sparren? Ik denk graag met je mee, groot of klein."
          image="/assets/services/ux-ui-design.jpg"
          position="left"
          url="/about"
          buttonText="Contact"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-slide {
  animation: slide 15s linear infinite;
}
</style>

<script setup lang="ts">
import LogoCloud from "~/components/ui/LogoCloud.vue";
import TextMedia from "~/components/ui/TextMedia.vue";
</script>