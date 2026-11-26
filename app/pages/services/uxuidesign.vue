<template>
  <div class="services-detail-page pb-10 lg:pb-20 xl:pb-24">
    <PageBanner
      video="/assets/videos/droppingballsuxui.mp4"
      title="UX-UI Design"
      subtitle="Gebruiksvriendelijke ontwerpen die niet alleen visueel aantrekkelijk zijn, maar ook functioneren. Met de eindgebruiker altijd in gedachten."
    />

    <UiIntro
        title="Eenvoud in design. Kracht in gebruikerservaring."
        content="Goed design gaat verder dan uitstraling alleen. Het creëert een ervaring die soepel aanvoelt, logisch is en aansluit bij wat mensen echt nodig hebben. Of het nu digitale of fysieke producten betreft, gaat eenvoud over het creëren van duidelijkheid en het wegnemen van onnodige obstakels. Zo ontstaat een natuurlijke flow die gebruik gemakkelijk maakt en het doel versterkt.

        Die eenvoud maakt het krachtig. Het verbindt, overtuigt en blijft bij. Zo ontstaat design dat niet alleen mooi is, maar vooral werkt."
    />

    <TextBlock
      title="UX/UI Design"
      content="UX/UI design beperkt zich niet alleen tot websites of apps; het speelt ook een belangrijke rol in fysieke producten. Het gaat erom hoe een gebruiker een product ervaart, zowel digitaal als fysiek, en hoe de interactie daarmee zo intuïtief en prettig mogelijk kan worden gemaakt.

Door UX/UI design te integreren in productontwikkeling zorg ik ervoor dat producten niet alleen functioneel zijn, maar ook fijn aanvoelen in gebruik of het nu een digitaal platform is of een fysiek object. Het resultaat: ontwerpen die echt werken voor mensen.
"

      position="center"
      textColor="#000"
      backgroundColor="#fff"
    />
    <TextMedia
        title="Proces"
        content="Het ontwikkelen van een succesvol product begint met onderzoek naar de gebruiker en de doelen. De verkregen inzichten vertaal ik naar wireframes en prototypes, die ik test om een optimale gebruikerservaring te garanderen. Na het testen werk ik het ontwerp uit tot visueel én functioneel sterke eindproducten, waarbij de gebruiker altijd centraal staat."
        image="/assets/services/ux-ui-design.jpg"
        position="left"
    />
  </div>

  <CTA/>
</template>

<script setup lang="ts">
import CTA from "~/components/ui/CTA.vue";
import TextMedia from "~/components/ui/TextMedia.vue";
import TextBlock from "~/components/ui/TextBlock.vue";
import PageBanner from "~/components/ui/PageBanner.vue";
</script>