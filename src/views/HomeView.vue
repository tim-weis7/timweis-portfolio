<script setup lang="ts">
import { computed } from 'vue';
import homeImage from '../assets/images/home-tim.png';
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";
import TechnologyCarouselComponent from '../components/TechnologyCarouselComponent.vue';

const router = useRouter();
const navigateTo = (path: string) => router.push(path);
const display = useDisplay();
const isMobile = computed(() => display.width.value <= 960);
</script>

<template>
  <v-row>
    <v-col cols="12" md="2"></v-col>
    <v-col class="text-content mt-12" cols="12" md="6">
      <v-chip class="ml-15" :size="isMobile ? 'small' : 'default'" color="success" text-color="white" small>Available for a job</v-chip>
      <h1 class="text-h4 text-md-h3 text-lg-h2 mt-2 ml-15">Code, der läuft.</h1>
      <h1 class="text-h4 text-md-h3 text-lg-h2 ml-15"> Projekte, die zeigen,</h1>
      <h1 class="text-h4 text-md-h3 text-lg-h2 ml-15">was ich kann.</h1>

      <div class="d-flex mt-5 ml-15">
        <v-btn color="primary" class="mr-2" :size="isMobile ? 'small' : 'default'" @click="navigateTo('/projects')">Projekte ansehen</v-btn>
        <v-btn :size="isMobile ? 'small' : 'default'" @click="navigateTo('/contact')" outlined>Kontakt</v-btn>
      </div>

      <div class="mt-4 ml-15">
        <v-chip :size="isMobile ? 'small' : 'default'" class="mr-3">Frontend</v-chip>
        <v-chip :size="isMobile ? 'small' : 'default'" class="mr-3" color="primary">Full-Stack</v-chip>
        <v-chip :size="isMobile ? 'small' : 'default'" color="secondary">Mobile-First</v-chip>
      </div>
    </v-col>

    <v-col cols="12" md="4">
      <v-img :src="homeImage" height="500px" width="400px"></v-img>
    </v-col>
  </v-row>


  <div class="fixed-carousel">
    <TechnologyCarouselComponent></TechnologyCarouselComponent>
  </div>
</template>

<style lang="css" scoped>
.text-content {
  text-align: left;
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