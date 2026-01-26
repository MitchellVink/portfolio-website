<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">

    <UiIntro
      title="Steets Werkenbij"
      content="Ontdek hoe we uitdagingen hebben aangepakt, innovatieve oplossingen hebben ontwikkeld en meetbare resultaten hebben behaald voor onze klant in deze uitgebreide case study."
      :tags="['Stage opdracht']"
    />

    <TextMedia
        title="Waarom een werkenbij site?"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/cases/steets-werkenbij/SteetsHome.png"
        position="left"
        backgroundColor="#F3F4F6"
        class="mb-16 lg:mb-24"
    />
    <TextMedia
        title="User flows"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/cases/steets-werkenbij/SteetsMockup_Userflows.png"
        position="right"
    />
    <TextBlock
      title="Resultaten"
      content="Voor wielervereniging AXA Valleienners heb ik meerdere evenementen mogen vastleggen. Dit resulteerde in aftermovies die niet alleen de sfeer en hoogtepunten van de gefilmde editie weergeven, maar ook dienen als promotie om toekomstige edities te presenteren en nieuwe deelnemers te enthousiasmeren."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <TextMedia
        title="Wie gaan we benaderen?"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/cases/steets-werkenbij/Steets-Brainstorm2.jpg"
        position="left"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Content middelen"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/cases/steets-werkenbij/Steets-comp.jpg"
        position="left"
        backgroundColor="#F3F4F6"
        class="mb-16 lg:mb-24"
    />
    <MediaDisplay
        type="image"
        src="/assets/cases/steets-werkenbij/SteetsC&P-GO-2.png"
        alt="Camera photo"
        wrapper-class="px-6 lg:px-8 pb-10 lg:pb-16 xl:pb-16"
    />
    <TextBlock
    title="Resultaten"
    content="Voor wielervereniging AXA Valleienners heb ik meerdere evenementen mogen vastleggen. Dit resulteerde in aftermovies die niet alleen de sfeer en hoogtepunten van de gefilmde editie weergeven, maar ook dienen als promotie om toekomstige edities te presenteren en nieuwe deelnemers te enthousiasmeren."
    position="center"
    textColor="#000"
    backgroundColor="#fff"
    />
  </div>
</template>

<script setup lang="ts">
import TextMedia from "~/components/ui/TextMedia.vue";
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