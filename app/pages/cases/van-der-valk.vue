<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">

    <UiIntro
      title="Hotel Van der valk"
      content="Soms weet je meteen dat het goed zit. Na een spontane kennismaking in Van der Valk Hotel Veenendaal was het enthousiasme aan beide kanten direct voelbaar. De klik was er, de ideeën sloten aan en de verwachtingen waren helder. Nog diezelfde middag zijn we aan de slag gegaan om samen iets moois neer te zetten."
    />

    <TextMedia
        title="De uitdaging"
        content="Van der Valk Hotel Veenendaal is een modern en strategisch gelegen hotel, geschikt voor uiteenlopende zakelijke en recreatieve activiteiten. Hoewel het hotel nog relatief nieuw is, waren de eerste renovaties al in volle gang. De uitdaging lag in het krachtig en professioneel vastleggen van de vernieuwde vergader- en meetingruimtes: ruim, strak ingericht en multifunctioneel."
        image="/assets/cases/hotel-vandervalk/Vandervalk-overview2.jpg"
        position="left"
        backgroundColor="#F3F4F6"
        class="mb-16 lg:mb-24"
    />
    <TextMedia
        title="Onze aanpak"
        content="Wij hebben deze vergader- en meetingruimtes tot in detail in beeld gebracht met een hoogwaardige video, waarin ruimte, structuur en sfeer centraal staan. Daarnaast zijn er buitenopnames gemaakt om de bijzondere architectuur en vorm van het hotel visueel te versterken."
        image="/assets/cases/hotel-vandervalk/Vandervalk-binnen.JPG"
        position="right"
    />

    <TextMedia
        title="Buiten opname"
        content="In de buitenopnames staat de uitstraling van het hotel centraal. De video laat het moderne karakter en de opvallende architectuur van Van der Valk Hotel Veenendaal zien, waarbij vorm, lijnen en ligging samenkomen. Door het hotel vanuit verschillende perspectieven vast te leggen, ontstaat een sterke eerste indruk die direct laat zien wat gasten kunnen verwachten bij aankomst."
        videoUrl="nD0rYY_hxiU"
        position="left"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Binnen opname"
        content="De binnenopnames richten zich op de vernieuwde vergader- en meetingruimtes. In de video ligt de focus op ruimte, licht en indeling, zodat duidelijk wordt hoe multifunctioneel en professioneel deze ruimtes zijn. De beelden geven een realistisch en sfeervol beeld van het interieur en laten zien hoe geschikt het hotel is voor zakelijke bijeenkomsten en meetings."
        videoUrl="McHuLUMKfkY"
        position="left"
        backgroundColor="#F3F4F6"
        class="mb-16 lg:mb-24"
    />
    <TextBlock
    title="Resultaat"
    content="Het eindresultaat zijn twee krachtige en representatieve video's die perfect aansluit bij de uitstraling van het hotel. Hiermee kan het hotel laten zien aan potentiele klanten/gasten wat ze te bieden hebben en kunnen verwachten.
Zowel Van der Valk Hotel Veenendaal als wijzelf kijken met trots terug op deze eerste samenwerking."
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