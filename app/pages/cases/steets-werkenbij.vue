<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">

    <UiIntro
      title="Steets Werkenbij"
      content="Steets ontwikkelt voor klanten veel werkenbij-sites, maar merkte intern dat vacatures vaak onderdeel waren van de corporate website. Hierdoor lag de tone of voice vooral op klanten, terwijl potentiële werknemers een andere benadering nodig hebben."
      :tags="['Stage opdracht']"
    />

    <TextMedia
        title="Waarom een werkenbij site?"
        content="De keuze voor een aparte werkenbij-site maakte het mogelijk om de tone of voice volledig te richten op nieuwe medewerkers. Hierdoor kon Steets gerichte employer branding toepassen en ruimte creëren voor specifieke contentmiddelen, zoals medewerkersverhalen en teamcontent. Daarnaast worden vacatures beter vindbaar en aantrekkelijker gepresenteerd, wat bijdraagt aan een sterkere user experience. Met een eigen werkenbij-site heeft Steets meer controle over het werkgeversverhaal en sluit de communicatie beter aan bij de doelgroep."
        image="/assets/cases/steets-werkenbij/SteetsHome.png"
        position="left"
        backgroundColor="#F3F4F6"
        class="mb-16 lg:mb-24"
    />
    <TextBlock
      title="Aanpak"
      content="Om tot een effectief en gebruiksvriendelijk ontwerp te komen is gewerkt volgens een gestructureerd ontwerpproces. Hierbij stonden de doelgroep, hun behoeften en het sollicitatieproces centraal. Het proces bestond uit doelgroeponderzoek, het uitwerken van user flows, het opstellen van een functioneel ontwerp, het maken van een grafisch ontwerp en het testen van de oplossing bij de doelgroep."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <TextBlock
      title="Doelgroep & Onderzoek"
      content="Als eerste stap is onderzoek gedaan naar de doelgroep van Steets. Hierbij is gekeken naar wie de potentiële kandidaten zijn, hoe zij zich oriënteren op een nieuwe baan en welke informatie zij nodig hebben om tot een sollicitatie over te gaan. Deze inzichten vormden de basis voor de structuur, content en tone of voice van de werkenbij-site."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <TextMedia
        title="User flows"
        content="Om tot een zo goed mogelijk ontwerp te komen is het Jesse James model gebruikt als basis voor de structuur en ontwerpkeuzes van de werkenbij-site. Vanuit deze aanpak zijn duidelijke user flows uitgewerkt, afgestemd op verschillende typen kandidaten en hun positie binnen het sollicitatieproces. Bij het uitwerken van deze flows lag de focus op het minimaliseren van het aantal stappen en het inzetten van heldere call-to-actions op iedere pagina."
        image="/assets/cases/steets-werkenbij/SteetsMockup_Userflows.png"
        position="right"
    />

    <TextMedia
        title="Functioneel ontwerp"
        content="Op basis van het onderzoek en de user flows is een functioneel ontwerp opgesteld. Hierin zijn de paginastructuur, functionaliteiten en interacties uitgewerkt. Het functioneel ontwerp vormde de basis voor zowel het grafisch ontwerp als de uiteindelijke realisatie en zorgde ervoor dat de site logisch, overzichtelijk en gebruiksvriendelijk werd opgebouwd."
        image="/assets/cases/steets-werkenbij/Steets-Brainstorm2.jpg"
        position="left"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Grafisch ontwerp"
        content="In het grafisch ontwerp is de bestaande branding van Steets doorvertaald naar een werkgeversgerichte uitstraling. Hierbij is extra aandacht besteed aan beeldgebruik, typografie en kleur, passend bij de cultuur en identiteit van Steets. Het ontwerp is gericht op het creëren van vertrouwen, herkenning en enthousiasme bij potentiële medewerkers."
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
    content="Het resultaat is een overzichtelijke en gebruiksvriendelijke werkenbij-site die volledig is afgestemd op nieuwe medewerkers. De site vertelt een duidelijk werkgeversverhaal, maakt vacatures beter vindbaar en verlaagt de drempel om te solliciteren. Hierdoor sluit de candidate experience beter aan bij de doelgroep en heeft Steets een stevig fundament voor employer branding."
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