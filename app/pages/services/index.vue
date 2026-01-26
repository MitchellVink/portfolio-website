<template>
  <div class="section-colored mx-auto max-w-7xl pb-10 lg:pb-20 xl:pb-24 overflow-hidden">
    <UiIntro
        title="Vaardigheden om indruk 
        te maken"
        content="Bij KNIV Studios vertaal ik ideeën naar (digitale) belevingen die inspireren, verbinden en overtuigen. Mijn vaardigheden combineren strategie, design en technologie om merken zichtbaar te maken. Van concept en productdesign tot videoproductie en webdesign, alles wat ik doe is gericht op indruk maken."
    />

    <LogoCloud />

    <div>
      <TextMedia
          title="Product Design"
          content="Producten ontwerpen die het leven makkelijker, mooier en beter maken. Of het nu fysiek of digitaal is, een goed doordacht ontwerp is mijn uitgangspunt."
          image="/assets/services/product-design.jpg"
          position="left"
          url="/services/design"
          buttonText="Lees meer"
      />

      <TextMedia
          title="Content Creatie"
          content="Indruk maken met beeld en verhalen tot leven brengen. Ik combineer creativiteit met strategie om content te maken die mensen echt raakt"
          image="/assets/services/content-creatie.jpeg"
          position="right"
          url="/services/content"
          buttonText="Lees meer"
      />

      <TextMedia
          title="UI/UX Design"
          content="Gebruiksvriendelijke ontwerpen die niet alleen visueel aantrekkelijk zijn, maar ook functioneren. Met de eindgebruiker altijd in gedachten."
          image="/assets/services/ux-ui-design.jpg"
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