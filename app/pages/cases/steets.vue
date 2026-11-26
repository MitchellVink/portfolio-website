<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">

    <UiIntro
      title="Steets"
      content="Steets helpt organisaties met het versterken van hun merk en zichtbaarheid. Van strategie en branding tot websites, digitale oplossingen en marketingcampagnes. Daarbij staat een sterke merkbeleving centraal, zowel richting klanten als potentiële medewerkers."
      :tags="['Werk onder naam van STEETS']"
    />
    <TextBlock
      title="Showreel"
      content="Ik ben bij STEETS begonnen met een stage die een combinatie was tussen Ux/Ui design en videografie. Na mijn stage heb ik 2 jaar lang de video dienst binnen STEETS opgepakt en heb ik diverse producties mogen maken. Denk aan bedrijfsvideo's, testimonials, productvideo's en nog veel meer. Een samenvatting van mijn werk vind je in de video hieronder."
      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />

    <MediaDisplay
    type="video"
    src="7c5jMcfKWvE" 
    alt="Titel van de video"
    wrapper-class="px-6 lg:px-8 pb-10 lg:pb-16 xl:pb-16"
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