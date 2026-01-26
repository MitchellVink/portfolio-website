<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        video="/assets/cases/kunstroute-veenendaal/Kunstroute-thumbnail-case.mp4"
        title="Kunstroute Veenendaal"
        subtitle="Een unieke opening en aftermovie voor de Kunstroute Veenendaal 2023, een ervaring van A tot Z."
        :labels="['Aftermovie', '3d Print']"
        />

    <TextMedia
        title="Van idee tot totaalervaring  "
        content="Toen de organisatie van de Kunstroute Veenendaal mij benaderde voor het maken van een aftermovie, werd al snel duidelijk dat de vraag verder ging dan alleen video. Er was behoefte aan een originele opening van de kunstroute én aan een manier om een jonger publiek actief bij het evenement te betrekken.
        Naast het vastleggen van de sfeer heb ik daarom meegedacht over de volledige beleving rondom de opening van de kunstroute."
        image="/assets/cases/kunstroute-veenendaal/Kunstroute-lijst.jpg"
        position="left"
    />
    <TextBlock
      title="De uitdaging"
      content="De uitdaging ging verder dan zichtbaarheid alleen: hoe trekken we nieuwe klanten aan én zorgen we voor langdurige loyaliteit binnen een merk met continu wisselende producten?
"
      position="center"
      textColor="#000"
    />
    <TextMedia
        title="De opening van de kunstroute"
        content="Voor de officiële opening ontwierp ik een uniek kunstzinnig object: een speciaal ontworpen lijst met een 3D-geprinte plattegrond van Veenendaal. Met rode markeringen werden de locaties van 15 verschillende kunstateliers zichtbaar gemaakt, zodat bezoekers in één oogopslag konden zien waar de kunstroute zich afspeelde."
        image="/assets/cases/kunstroute-veenendaal/Kunstroute-opening.jpg"
        position="right"
        backgroundColor="#000"
        textColor="#fff"
    />

    <TextMedia
        title="Interactie & technologie"
        content="Om de ervaring interactief te maken, integreerde ik een NFC-chip in het ontwerp. Door deze te scannen met een smartphone kregen bezoekers tijdens het evenement direct toegang tot een digitale kaart met alle deelnemende locaties. Na afloop van de kunstroute kreeg deze interactie een nieuwe functie: de NFC-chip leidt nu naar de aftermovie, waarmee de kunstroute blijvend onder de aandacht wordt gebracht."
        image="/assets/cases/kunstroute-veenendaal/Nfc-uitleg.jpg"
        position="left"
        backgroundColor="#000"
        textColor="#fff"
        class="mb-16 lg:mb-24"
    />
    <TextMedia
        title="Aftermovie"
        content="De aftermovie brengt de sfeer, kunst en opening tijdens de Kunstroute Veenendaal 2023 samen. Van exposities tot bezoekers en van detail tot totaalbeeld, de video fungeert als herinnering én als promotiemiddel voor toekomstige edities."
        image="/assets/cases/kunstroute-veenendaal/Kunstroute-opening.jpg"
        videoUrl="njd1rtm2ic4"
        position="right"
    />
    <TextBlock
    title="Resultaat"
    content="Met deze aanpak ontstond een complete ervaring waarin kunst, technologie en storytelling samenkomen. De opening werd een opvallend startmoment, de aftermovie vergroot de zichtbaarheid van het evenement en het interactieve ontwerp blijft ook na afloop van waarde."
    position="center"
    textColor="#000"
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