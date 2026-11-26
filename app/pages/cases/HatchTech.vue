<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        image="/assets/cases/hatchtech/dsc03405-hoek-logo-2.jpg"
        title="Hatchtech nieuwe trolley met hoge capaciteit"
        subtitle="Voor HatchTech mocht ik aan de slag met een nieuwe fotoserie. Hierbij stond het vastleggen van hun nieuwste trolley centraal, aangevuld met fotografie van medewerkers en diverse spareparts."
        :labels="['Fotografie']"
        />

        <TextBlock
      title="Product & bedrijfsfotografie"
      content="Voor HatchTech verzorgde ik een fotoserie waarin product, techniek en mensen samenkomen. Van de nieuwste trolley tot medewerkers en technische spareparts: verschillende aspecten van de organisatie zijn vastgelegd in een reeks professionele beelden."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
        
    <PhotoGrid :items="photos" />

    <TextBlock
      title="Het Resultaat"
      content="HatchTech kan weer vooruit met een mooie, nieuwe serie foto's. Van de nieuwste trolley en spareparts tot de medewerkers van de Care-afdeling: alles is weer fris en professioneel in beeld gebracht. Zo beschikt HatchTech over nieuwe fotografie voor hun communicatie en presentatie."
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
import PhotoGrid from "~/components/ui/Photogrid.vue";

const media = [
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" }
]

const photos = [
  {
    src: "/assets/cases/hatchtech/dsc03396-trollyschuinlinkerzijaanzicht.jpg",
    alt: "Nieuwe trolley van HatchTech",
    colSpan: 2
  },
  {
    src: "/assets/cases/hatchtech/dsc03636.jpg",
    alt: "Medewerker HatchTech"
  },
  {
    src: "/assets/cases/hatchtech/dsc03522.jpg",
    alt: "Spareparts HatchTech"
  },
  {
    src: "/assets/cases/hatchtech/dsc03487.jpg",
    alt: "Detail van de trolley",
    colSpan: 2
  },
  {
    src: "/assets/cases/hatchtech/dsc03607.jpg",
    alt: "Medewerker HatchTech",
    colSpan: 2
  },
  {
    src: "/assets/cases/hatchtech/dsc03496.jpg",
    alt: "Medewerker HatchTech",
    colSpan: 1
  },
  {
    src: "/assets/cases/hatchtech/dsc03657.jpg",
    alt: "Medewerker HatchTech",
    colSpan: 1
  },
  {
    src: "/assets/cases/hatchtech/dsc03447-trollyschuinrechterzijaanzicht.jpg",
    alt: "Medewerker HatchTech",
    colSpan: 2
  }
];
</script>