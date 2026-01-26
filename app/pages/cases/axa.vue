<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        video="/assets/cases/axa-valleirenners/axa-case-header.mp4"
        title="AXA Valleirenners"
        subtitle="Door video content te maken voor de wielervereniging AXA Valleirenners, heb ik verschillende evenementen op een krachtige manier in beeld gebracht"
        :labels="['Aftermovie', 'Sport']"
        />
        

    <!-- <UiIntro
      title="AXA Valleirenners"
      content="Door toffe video content voor de wielervereniging AXA Valleirenners te maken, heb ik hun evenementen op een krachtige manier in beeld gebracht."
    /> -->

    <!-- <UiLogoCloud /> -->


    <TextBlock
      title="Van toertocht tot wedstrijd"
      content="Voor wielervereniging AXA Valleienners heb ik meerdere evenementen mogen vastleggen. Dit resulteerde in aftermovies die niet alleen de sfeer en hoogtepunten van de gefilmde editie weergeven, maar ook dienen als promotie om toekomstige edities te presenteren en nieuwe deelnemers te enthousiasmeren."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />

    <TextMedia
        title="Veldrit Rhenen"
        content="Modder, actie en adrenaline! Tijdens de veldrit in Rhenen, georganiseerd door de AXA Valleirenners, heb ik een aftermovie gemaakt die de unieke sfeer van het evenement weergeeft. Met deze video hebben toekomstige edities nu een krachtig middel in handen om nog meer deelnemers en sponsoren aan te trekken."
        videoUrl="JGe5AG61KZc"
        image="/assets/cases/axa-valleirenners/Thumbnail-veldrit.png"
        position="right"
    />

    <TextMedia
        title="Veenendaal-Veenendaal"
        content="Van start tot finish: Veenendaal-Veenendaal was een spektakel! Bekijk de hoogtepunten van dit wielerevenement en herbeleef de energie van het peloton."
        image="/assets/cases/axa-valleirenners/Thumbnail-vv.jpg"
        videoUrl="Fz3vek2dhoo"
        position="left"
        backgroundColor="#000"
        class="mb-16 lg:mb-24"
        textColor="#fff"
    />
    <TextMedia
        title="Aftermovie toertocht"
        content="Veenendaal-Veenendaal is een van de mooiste toertochten op de kalender. Met adembenemende routes door de Utrechtse Heuvelrug, de Ginkelse Heide en de Posbank is het een evenement dat elke wielerliefhebber trekt. Dankzij mijn video wordt de unieke sfeer van dit drukbezochte evenement nu nóg beter vastgelegd en gedeeld."
        videoUrl="yPyCksaN778"
        position="right"
    />

    <TextBlock
      title="Resultaten"
      :content="`Voor wielervereniging AXA Valleienners heb ik meerdere evenementen mogen vastleggen. 
      
      Dit resulteerde in aftermovies die niet alleen de sfeer en hoogtepunten van de gefilmde editie weergeven, maar ook dienen als promotie om toekomstige edities te presenteren en nieuwe deelnemers te enthousiasmeren.`"
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
      
    <MediaDisplay
        type="image"
        src="/assets/cases/axa-valleirenners/End-Shot.png"
        alt="Camera photo"
        wrapper-class="px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24"
    />

  </div>
</template>

<script setup lang="ts">
import TextMedia from "~/components/ui/TextMedia.vue";
import TextMediaVideo from "~/components/ui/TextMediaVideo.vue";
import TextBlock from "~/components/ui/TextBlock.vue";
import MediaDisplay from "~/components/ui/MediaDisplay.vue";
import PageBanner from "~/components/ui/PageBanner.vue";
import MasonryMediaGrid from "~/components/ui/MasonryMediaGrid.vue";

const media = [
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" }
]
</script>