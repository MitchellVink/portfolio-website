<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <PageBanner
        image="/assets/cases/BruiloftNE/Oranjerie_Drone.JPG"
        title="Bruiloft Nathan & Eva"
        subtitle="Een prachtige dag op beeld, met een unieke presentatie"
        :labels="['2025', 'Bruiloft']"
        />

        <TextBlock
      title="Bruiloft video"
      content="Voor Nathan en Eva had ik de eer om hun prachtige dag vast te leggen. In de video heb ik geprobeerd zoveel mogelijk bijzondere momenten te vangen die zij zelf misschien niet hebben kunnen zien. De ceremonie vond plaats in de Oranjerie Ter Doorn, wat zorgde voor prachtige beelden!"
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <MediaDisplay
      type="video"
      src="WkR4zVxlTfQ"        
      alt="Thumbnail photo"
      wrapper-class="px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24"
    />
        
    <TextBlock
      title="Een Herinnering voor het Leven"
      content="Wat ooit één bijzondere dag was, is nu een blijvende herinnering geworden. Met deze video kunnen ze altijd terug naar die ene blik, die ene lach, dat ene gevoel. Niet alleen om te herinneren, maar om het telkens opnieuw te beleven vandaag, over tien jaar en ver daarna."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />

    <TextMedia
        title="Presentatie"
        content="Omdat een bruiloft zo speciaal is wilde ik de dag op een bijzondere manier laten herrineren. De locatie waarin het ja woord werd gezegd heb ik een 3d scan van gemaakt en 3d geprint. Deze print heb ik op een poster vast gemaakt en een nfc chip toegevoegd die na het scannen door linkt naar de trouwvideo. "
        image="/assets/cases/BruiloftNE/Bruiloft_Print.jpg"
        position="right"
    />
    <TextBlock
      title="Reactie"
      :content="`Het mooiste compliment dat je als creatieveling kunt krijgen, is wanneer je mensen raakt met het werk dat je maakt. De reactie van het echtpaar bij de oplevering herinnert mij er weer aan waarom dit vak zo bijzonder is: door creatie mensen hun mooiste momenten opnieuw laten beleven.`"
      position="center"
      textColor="#000"
      backgroundColor="#fff"
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