<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        image="/assets/cases/deolijfolieshop/DSC03031.jpg"
        title="Promo met sterrenchef"
        subtitle="Een nieuwe contentserie waarin de producten en expertise van Olijfolieshop samenkomen met de culinaire kennis van De Treeswijkhoeve."
        :labels="['Fotografie']"
        />

        <TextBlock
      title="Product & bedrijfsfotografie"
      content="Voor de samenwerking tussen De Treeswijkhoeve en Olijfolieshop mocht ik aan de slag met het creëren van nieuwe content. Met fotografie en video brachten we de producten en de samenwerking op een aantrekkelijke manier in beeld. Het resultaat is een veelzijdige serie beelden die de kwaliteit en uitstraling van de producten benadrukt en klaar is voor gebruik op verschillende communicatiekanalen."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
        
    <VerticalVideoGrid :items="videos" />

    <TextBlock
      title="Het Resultaat"
      content="Een serie video's die ingezet kan worden voor verschillende campagnes, met als doel de naamsbekendheid van Olijfolieshop te vergroten en het merk sterker te positioneren. Door de samenwerking met de chef wordt niet alleen het product uitgelicht, maar ook de kennis en expertise erachter. Zo bouwt Olijfolieshop verder aan herkenbaarheid en autoriteit binnen de markt."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />

    <PhotoGrid :items="photos" />
      
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
import PhotoGrid from "~/components/ui/Photogrid.vue";
import VerticalVideoGrid from "~/components/ui/VerticalVideoGrid.vue";

const media = [
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" }
]

const photos = [
  {
    src: "/assets/cases/deolijfolieshop/DSC03086.jpg",
    alt: "Olijfolie",
    colSpan: 2
  },
  {
    src: "/assets/cases/deolijfolieshop/DSC03075.jpg",
    alt: "Olijfolie"
  }
];

const videos = [
  {
    videoUrl: "8IwA6xui8jk",
    image: "/assets/cases/deolijfolieshop/DSC03075.jpg",
    title: "Aankondeging",
    alt: "Verticale video"
  },
  {
    videoUrl: "Fpe3---s_X8",
    image: "/assets/cases/deolijfolieshop/DSC03038.jpg",
    title: "Voorstellen",
    alt: "Verticale video"
  },
  {
    videoUrl: "cs6jEfoJGt4",    
    image: "/assets/cases/deolijfolieshop/DSC03028.jpg",
    title: "Uitleg",
    alt: "Verticale video"
  }
];
</script>