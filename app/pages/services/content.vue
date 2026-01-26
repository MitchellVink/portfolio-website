<template>
  <div class="services-detail-page pb-10 lg:pb-20 xl:pb-24">
    <PageBanner
      image="/assets/services/content-creatie.jpeg"
      title="Content"
      subtitle="Verhalen tot leven brengen. Jouw boodschap helder overbrengen. Jouw merk visueel onvergetelijk maken."
    />

    <UiIntro
        title="Content die verbindt en betekenis geeft"
        content="Content die écht binnenkomt, ontstaat niet alleen door techniek, maar door het oprechte gevoel erachter. Het is die emotie die zorgt voor beelden die spreken, verbinden en blijven hangen.

        Met een doordachte aanpak ontstaat content die niet alleen mooi is, maar ook impact maakt. Want alleen als beelden voelen, maken ze écht indruk."
    />

    <LogoCloud />

    <TextMedia
        title="Beelden die raken"
        content="Of het nu gaat om video, tekst of  beeld: sterke content trekt de aandacht, wekt emotie op en maakt complexe informatie begrijpelijk. Het legt betekenisvolle momenten vast, presenteert ideeën met impact en versterkt merken op een manier die resoneert.

        Ik geloof dat content pas écht werkt als het iets losmaakt. Iets voelt. Want verhalen die binnenkomen, die blijven hangen."
        image="/assets/services/content-creatie.jpeg"
        position="right"
    />

    <TextMedia
        title="Lorem ipsum"
        content="Lorem ipsum dolor sit amet constructeur."
        image="/assets/services/content-foto.jpg"
        position="left"
    />

    <CTA/>
  </div>
</template>
<script setup lang="ts">
import CTA from "~/components/ui/CTA.vue";
import TextMedia from "~/components/ui/TextMedia.vue";
import LogoCloud from "~/components/ui/LogoCloud.vue";
import PageBanner from "~/components/ui/PageBanner.vue";
</script>