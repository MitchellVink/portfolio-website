<template>
  <div class="services-detail-page pb-10 lg:pb-20 xl:pb-24">
    <PageBanner
      video="/assets/videos/ProductDesign.mp4"
      title="Product design"
      subtitle="Van prototype tot producten. Goed ontworpen producten gaan lang mee en zijn prettig in gebruik"
    />

    <UiIntro
        title="Design met gevoel, functie en karakter"
        content="Ik ontwerp producten met een sterke focus op vorm, gebruik en maakbaarheid. Vanuit mijn achtergrond in 3D-ontwerp vertaal ik ideeën naar doordachte concepten en visuele ontwerpen die opvallen en een blijvende indruk achterlaten."
    />

    <TextMedia
        title="Producten die spreken"
        content="Of het nu gaat om fysieke prototypes, interactieve interfaces of slimme systeemoplossingen: goed ontwerp trekt de aandacht en helpt de gebruiker."
        image="/assets/services/PO/PrintSriLanka.jpg"
        position="right"
    />

    <TextMedia
        title="Producten met karakter"
        content="Mijn doel is om met elk ontwerp indruk te maken, visueel én functioneel. Door iteratief te werken en oog te hebben voor detail ontstaan producten die niet alleen prettig zijn in gebruik, maar ook karakter hebben en blijven hangen."
        image="/assets/services/PO/KunstrouteLijst.jpg"
        position="left"
    />

    <CTA/>
  </div>
</template>
<script setup lang="ts">
import CTA from "~/components/ui/CTA.vue";
import TextMedia from "~/components/ui/TextMedia.vue";
import LogoCloud from "~/components/ui/LogoCloud.vue";
import PageBanner from "~/components/ui/PageBanner.vue";
</script>