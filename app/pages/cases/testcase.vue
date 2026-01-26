<template>
  <div class="case-detail-page pb-10 lg:pb-20 xl:pb-24 mt-10 lg:mt-20 xl:mt-24">
    <UiIntro
      title="Testcase"
      content="Ontdek hoe we uitdagingen hebben aangepakt, innovatieve oplossingen hebben ontwikkeld en meetbare resultaten hebben behaald voor onze klant in deze uitgebreide case study."
    />

    <UiLogoCloud />

    <TextMedia
        title="Lorem ipsum"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/services/product-design.jpg"
        position="left"
        url="/services/design"
        backgroundColor="#F3F4F6"
    />
    <TextMedia
        title="Lorem ipsum"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/services/product-design.jpg"
        position="right"
        url="/services/design"
    />
    <TextMedia
        title="Lorem ipsum"
        content="Producten ontwerpen die het leven makkelijker, mooier en beter maken.Of het nu fysiek of digitaal is, een goed doordacht ontwerp is een van mijn grote drijfveren."
        image="/assets/services/product-design.jpg"
        position="left"
        url="/services/design"
        backgroundColor="#F3F4F6"
    />
    <MediaDisplay
        type="video"
        src="/assets/videos/videografie.mp4"
        autoplay
        loop
        muted
        wrapper-class="px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24"
    />
    <MediaDisplay
        type="image"
        src="/assets/content-creatie.png"
        alt="Camera photo"
        wrapper-class="px-6 lg:px-8 pb-10 lg:pb-20 xl:pb-24"
    />

    <MasonryMediaGrid :items="media" />

  </div>
</template>

<script setup lang="ts">
import TextMedia from "~/components/ui/TextMedia.vue";
import MediaDisplay from "~/components/ui/MediaDisplay.vue";
import MasonryMediaGrid from "~/components/ui/MasonryMediaGrid.vue";

const media = [
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "image", src: "/assets/content-creatie.png", alt: "" },
  { type: "video", src: "/assets/videos/videografie.mp4", alt: "" }
]
</script>