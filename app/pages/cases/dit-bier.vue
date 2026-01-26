<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        image="/assets/cases/dit-bier/Header1.jpg"
        title="Dit Bier"
        subtitle="Hoe kunnen we door middel van online contentcreatie meer bekendheid genereren? Na de rebranding van Dit Bier lag de focus op het inhalen van achterstallige content en het ontwikkelen van een vernieuwde digitale strategie."
        :labels="['Aftermovie', 'Sport']"
        />

    <TextMedia
        title="Context"
        content="Dit Bier werkt samen met huurbrouwers om wekelijks wisselende speciaalbieren aan te bieden in supermarkten. Elk bier heeft een eigen verhaal en vertegenwoordigt het ambacht van kleinschalige brouwers die anders geen podium zouden krijgen."
        image="/assets/cases/dit-bier/Beer-brewing.jpg"
        position="left"
        backgroundColor="#F2F2F2"
        class="mb-16 lg:mb-24"
    />
    <TextBlock
      title="De uitdaging"
      content="De uitdaging ging verder dan zichtbaarheid alleen: hoe trekken we nieuwe klanten aan én zorgen we voor langdurige loyaliteit binnen een merk met continu wisselende producten?"
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <TextBlock
      title="Aanpak"
      content="Ik onderzocht wat merkloyaliteit stimuleert en identificeerde drie kernfactoren: herkenbaarheid, vertrouwen en storytelling. Vanuit deze inzichten ontwikkelde ik een digitale ervaring die content, beleving en loyaliteit samenbrengt."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <TextMedia
        title="Oplossing: personalisatie & interactie"
        content="Er werd een app/webapplicatie ontworpen die toegankelijk is via het scannen van de bierdop. Binnen de applicatie:
          1. Krijgt elk bier zijn eigen verhaal, 2. Worden huurbrouwers uitgelicht, 3. Staat Hopke, een kameleon, centraal als herkenbaar merkpersonage, passend bij de diversiteit van Dit Bier

        Daarnaast introduceerde ik een spaarsysteem waarmee gebruikers bieren kunnen verzamelen en beloningen kunnen vrijspelen, wat herhaalaankopen stimuleert."
        image="/assets/cases/dit-bier/Header1.jpg"
        position="right"
    />

    <TextMedia
        title="Innovatie: NFC in de bierdop"
        content="Tijdens het testen zijn zowel QR-codes als NFC-chips onderzocht. De NFC-chip zorgde voor een duidelijke ‘wow-factor’ en een frictieloze gebruikerservaring. De positieve reacties bevestigden de keuze voor NFC als onderscheidend element."
        image="/assets/cases/dit-bier/Scan2.jpg"
        position="left"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Hopke"
        content="Dit bier had nog een herkenbaar gezicht nodig. Tijdens een brainstormsessie zochten we naar iets dat écht bij het karakter van het merk paste. Zo kwamen we uit bij de kameleon: een dier dat symbool staat voor verandering en veelzijdigheid. Precies zoals elk speciaalbier uniek is en steeds weer anders verrast.
We gaven de kameleon de naam Hopke, een speelse knipoog naar hop, een onmisbaar ingrediënt in bier."
        image="/assets/cases/dit-bier/DitBier-Hopke.png"
        position="left"
        backgroundColor="#F3F4F6"
        class="mb-16 lg:mb-24"
    />
    <TextBlock
    title="Het detail dat het verschil maakt"
    content="Waar veel biermerken focussen op het etiket, werd bij Dit Bier de bierdop ingezet als functioneel en uniek touchpoint. Hierdoor wordt het product zelf een ingang naar het merkverhaal."
    position="center"
    textColor="#000"
    backgroundColor="#fff"
    />
    <MediaDisplay
        type="image"
        src="/assets/cases/dit-bier//Mockup-app.png"
        alt="Camera photo"
        wrapper-class="px-6 lg:px-8 pb-10 lg:pb-16 xl:pb-16"
    />
    <TextBlock
    title="Resultaat"
    content="Het prototype maakte de strategie tastbaar en overtuigend. Gebruikers reageerden enthousiast op de NFC-ervaring en de storytelling achter elk bier. Voor de opdrachtgever bood dit niet alleen inzicht in de werking van de applicatie, maar ook vertrouwen in de schaalbaarheid en potentie van het concept.
Dit Bier werd hiermee meer dan een biermerk: een interactieve merkbeleving."
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