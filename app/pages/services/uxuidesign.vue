<template>
  <div class="services-detail-page pb-10 lg:pb-20 xl:pb-24">
    <PageBanner
      video="/assets/videos/DroppingBallsUxUi.mp4"
      title="UX-UI Design"
      subtitle="Verhalen tot leven brengen. Jouw boodschap helder overbrengen. Jouw merk visueel onvergetelijk maken."
    />

    <UiIntro
        title="Eenvoud in design. Kracht in gebruikerservaring."
        content="Goed design gaat verder dan uitstraling alleen. Het creëert een ervaring die soepel aanvoelt, logisch is en aansluit bij wat mensen echt nodig hebben. Of het nu digitale of fysieke producten betreft, gaat eenvoud over het creëren van duidelijkheid en het wegnemen van onnodige obstakels. Zo ontstaat een natuurlijke flow die gebruik gemakkelijk maakt en het doel versterkt.

        Die eenvoud maakt het krachtig. Het verbindt, overtuigt en blijft bij. Zo ontstaat design dat niet alleen mooi is, maar vooral werkt."
    />

    <TextBlock
      title="UX/UI Design"
      content="Sinds het oprichten van mijn eigen onderneming, kreeg ik al snel in de gaten dat ik bijna alle benodigdheden zelf moest vervullen.  Een van de cruciale aspecten in dit tijdperk is het opbouwen van een sterke online aanwezigheid. Direct na de oprichting van mijn bedrijf heb ik actief mijn tijd besteed aan het ontwikkelen van vaardigheden op het gebied van webontwikkeling om deze behoefte te vervullen.

      Gedurende mijn studie kwam ik in aanraking met UX-designopdrachten en leerde ik over invloedrijke principe van Robert Cialdini. Ik heb met succes een app en webpagina’s mogen ontwerpen met aandacht voor functionaliteit en een naadloze gebruikerservaring, waarbij ik de principes van UX-design implementeerde.

      Wat drijft iemand om een bepaalde keuze te maken? Hoe maak je technologie toegankelijk voor iedereen? Dit en nog meer vragen interessen mij enorm."

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