<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <UiIntro
      title="AXA Valleirenners"
      content="Door toffe video content voor de wielervereniging AXA Valleirenners te maken, heb ik hun evenementen op een krachtige manier in beeld gebracht."
    />

    <!-- <UiLogoCloud /> -->

    <TextMedia
        title="Van toertocht tot wedstrijd"
        content="Voor wielervereniging AXA Valleienners heb ik meerdere evenementen mogen vastleggen. Dit resulteerde in aftermovies die niet alleen de sfeer en hoogtepunten van de gefilmde editie weergeven, maar ook dienen als promotie om toekomstige edities te presenteren en nieuwe deelnemers te enthousiasmeren."
        image="/assets/cases/axa-valleirenners/axa-vlag.png" 
        position="left"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Veldrit Rhenen"
        content="Modder, actie en adrenaline! Tijdens de veldrit in Rhenen, georganiseerd door de AXA Valleirenners, heb ik een aftermovie gemaakt die de unieke sfeer van het evenement weergeeft. Met deze video hebben toekomstige edities nu een krachtig middel in handen om nog meer deelnemers en sponsoren aan te trekken."
        image="/assets/cases/axa-valleirenners/axa-vlag.png" 
        position="right"
    />
    <TextMedia
        title="Veenendaal-Veenendaal"
        content="Van start tot finish: Veenendaal-Veenendaal was een spektakel! Bekijk de hoogtepunten van dit wielerevenement en herbeleef de energie van het peloton."
        image="/assets/services/product-design.jpg"
        position="left"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Aftermovie toertocht"
        content="Veenendaal-Veenendaal is een van de mooiste toertochten op de kalender. Met adembenemende routes door de Utrechtse Heuvelrug, de Ginkelse Heide en de Posbank is het een evenement dat elke wielerliefhebber trekt. Dankzij mijn video wordt de unieke sfeer van dit drukbezochte evenement nu nóg beter vastgelegd en gedeeld."
        image="/assets/services/product-design.jpg"
        position="right"
    />

      <!-- Title and CTA Buttons -->

      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
           <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">Resultaat</h1>
              <p class="mt-8 text-lg text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                Voor wielervereniging AXA Valleienners heb ik meerdere evenementen mogen vastleggen. Dit resulteerde in aftermovies die niet alleen de sfeer en hoogtepunten van de gefilmde editie weergeven, maar ook dienen als promotie om toekomstige edities te presenteren en nieuwe deelnemers te enthousiasmeren.</p>
           </div>
          </div>
        </div>
      </div>
      
    <MediaDisplay
        type="image"
        src="/assets/content-creatie.png"
        alt="Camera photo"
        wrapper-class="px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24"
    />

  </div>
</template>

<script setup lang="ts">
import TextMedia from "~/components/ui/TextMedia.vue";
import MediaDisplay from "~/components/ui/MediaDisplay.vue";
import MasonryMediaGrid from "~/components/ui/MasonryMediaGrid.vue";

const media = [
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" }
]
</script>