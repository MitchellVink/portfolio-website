<template>
  <div class="section-colored mx-auto max-w-7xl pb-10 lg:pb-20 xl:pb-24 overflow-hidden">
    <UiIntro
        title="Vaardigheden om indruk 
        te maken"
        content="Alles wat ik doe, begint met één gedachte: ik wil iets maken dat blijft hangen. Of ik nu met een camera in mijn handen sta om een oprecht verhaal vast te leggen, een digitaal interface ontwerp, of mijn 3D-printers aanzet om een digitale herinnering tastbaar te maken, het draait altijd om de impact."
    />

    <LogoCloud />

    <div>
      <TextMedia
          title="Video producties en Content Creatie"
          content="Indruk maken met beeld en verhalen tot leven brengen. Ik combineer creativiteit met strategie om content te maken die mensen echt raakt"
          image="/assets/services/content-creatie.jpeg"
          position="left"
          url="/services/content"
          buttonText="Lees meer"
      />
      <TextMedia
          title="Creative Engineering"
          content="Producten ontwerpen die het leven makkelijker, mooier en beter maken. Of het nu fysiek of digitaal is, een goed doordacht ontwerp is mijn uitgangspunt."
          image="/assets/services/product-design.webp"
          position="right"
          url="/services/design"
          buttonText="Lees meer"
      />


      <TextMedia
          title="UI/UX Design"
          content="Gebruiksvriendelijke ontwerpen die niet alleen visueel aantrekkelijk zijn, maar ook functioneren. Met de eindgebruiker altijd in gedachten."
          image="/assets/services/ux-ui-design.webp"
          position="left"
          url="/services/uxuidesign"
          buttonText="Lees meer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoCloud from "~/components/ui/LogoCloud.vue";
import TextMedia from "~/components/ui/TextMedia.vue";
</script>