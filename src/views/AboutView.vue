<script setup lang="ts">
import aboutImage from '../assets/images/about-tim.jpeg';

import { ref } from 'vue';
import TechnologyCarouselComponent from '../components/TechnologyCarouselComponent.vue';

const aboutText = ref(`Hi, ich bin Tim — ich habe vor kurzem mein Studium der Angewandten Informatik erfolgreich abgeschlossen und arbeite aktuell noch als studentischer Mitarbeiter in der Softwareentwicklung. Dabei unterstütze ich das Team von DBcoach bei der Weiterentwicklung der Lernplattform im Full-Stack-Web-Bereich, mit Schwerpunkt auf dem Frontend mit Vue 3.

In meiner Bachelorarbeit habe ich die Plattform außerdem um eine KI-Komponente erweitert, die automatisch Lerninhalte generiert und bewertet. Durch meine Mitarbeit bei DBcoach konnte ich praktische Erfahrungen mit modernen Webtechnologien sammeln — insbesondere mit Vue 3 im Frontend, Spring Boot (Java) im Backend und PostgreSQL als Datenbank.

Ich lerne gerne Neues, arbeite strukturiert und lösungsorientiert und freue mich darauf, mein Wissen und meine Fähigkeiten in spannenden Projekten weiter einzubringen und auszubauen.
`);

</script>

<template>
  
  <v-row class="mt-4">
    <v-col cols="12" md="5">
    </v-col>
    <v-col cols="12" md="6">
      <h1 class="text-left mb-4 ml-3">Über mich</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="5">
      <v-img :src="aboutImage" height="400px" width="300px"></v-img>  
    </v-col>
    <v-col cols="12" md="6">
      <p v-for="(line, index) in aboutText.split('\n')" class="about-text ma-3" :key="index">
      {{ line }}
    </p>
    </v-col>
  </v-row>
  <div class="fixed-carousel">
    <TechnologyCarouselComponent></TechnologyCarouselComponent>
  </div>
</template>

<style lang="css" scoped>
.about-text {
  font-size: 18px;
  text-align: justify;
}

.v-img {
  justify-self: center;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.fixed-carousel {
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px 0;
}

@media (max-width: 960px) {
  .fixed-carousel {
    position: static;
  }
}
</style>
