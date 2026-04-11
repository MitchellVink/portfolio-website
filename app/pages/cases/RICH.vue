<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        video="/assets/cases/rich/bannervid-kniv.mp4"
        title="Van slaapkamer tot Mainstage"
        subtitle="Ontdek hoe RICH met zijn eigen 'SCHRANCE' sound de weg vrijmaakt naar de grootste podia. Een unieke blik op zijn groei en de support van de wereldtop."
        :labels="['2026', 'DJ', 'SCHRANZ']"
        />

        <TextBlock
      title="RICH - Ontdek de wereld van SCHRANCE"
      content="Richard, ook wel bekend als RICH, is een DJ die niet stil blijft zitten. Hij maakte de overstap van Hard Techno naar de keiharde energie van Schranz, maar dan wel op zijn eigen manier. Onder zijn motto 'SCHRANCE' combineert hij de rauwe beats van Schranz met de melodische vibe van Dance.
Ik heb hem mogen helpen om dit unieke geluid te vertalen naar een vette videoserie die zijn zichtbaarheid een flinke boost geeft. Van produceren op zijn slaapkamer tot support op de grootste mainstages: de serie laat zijn volledige groei zien. Om ook zijn groeiende internationale publiek te bereiken, heb ik alle video's voorzien van Engelse ondertiteling."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
        
    <TextMedia
        title="Get to know"
        content="Wie is de man achter de muziek? In deze video leer je Richard kennen. Geen ingewikkeld verhaal, maar gewoon zijn passie voor de muziek en de reden waarom hij de overstap naar Schranz maakte."
        videoUrl="rBOJuCkPv_M"
        position="left"
        backgroundColor="#000"
        textColor="#fff"
    />
    <TextMedia
        title="Succesmomenten"
        content="Niets is vetter dan je eigen tracks horen op de grootste stages. In deze video zie je de momenten waarop wereldberoemde DJ’s de tracks van RICH draaien voor duizenden mensen. De ultieme bevestiging dat zijn sound keihard binnenkomt."
        videoUrl="oR_-rah3ITg"
        position="right"
        backgroundColor="#000"
        textColor="#fff"
    />
    <TextMedia
        title="Muziekstijl"
        content="Hard gaan, maar wel met gevoel. Dat is Emotional Schranz. In deze video laten we zien wat zijn motto 'SCHRANCE' precies inhoudt: de perfecte mix tussen techno en de energie van een volle dansvloer."
        videoUrl="aAheiHyZzQg"
        position="left"
        backgroundColor="#000"
        class="mb-16 lg:mb-24"
        textColor="#fff"
    />

    <TextBlock
      title="Het Resultaat"
      content="Met deze drie video's heb ik RICH echt op de kaart gezet. Door zijn unieke stijl en de support van grote namen centraal te stellen, valt hij nu direct op in de scene. Door de toevoeging van Engelse ondertiteling zijn de video's bovendien klaar voor de internationale markt, waardoor RICH zowel nationaal als internationaal veel beter zichtbaar is.
De videoserie laat precies zien waar RICH voor staat: een eigen sound, bakken met energie en een onmiskenbare passie voor de underground. RICH is ready voor de volgende stap.
"
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
      
    <CTA/>
  </div>
</template>

<script setup lang="ts">
import CTA from "~/components/ui/CTA.vue";
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