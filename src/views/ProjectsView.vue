<script setup lang="ts">
import imageProjectA1 from '../assets/images/kicks-and-canvas-1.png';
import imageProjectA2 from '../assets/images/kicks-and-canvas-2.png';
import imageProjectA3 from '../assets/images/kicks-and-canvas-3.png';

const projects = [
  {
    name: 'Kicks & Canvas',
    image: [imageProjectA1, imageProjectA2, imageProjectA3],
    description: 'Mobile-first Webseite für Kunst & Sneaker.',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://www.kicks-and-canvas.de'
  },
  {
    name: 'T - Blog',
    image: null,
    description: 'Mal probiert einen Blog zu machen.',
    technologies: 'HTML, CSS, Vue.js 3',
    link: ''
  },
  {
    name: 'Weitere...',
    image: null,
    description: '....................',
    technologies: 'HTML, CSS, JavaScript',
    link: ''
  },
  {
    name: 'Weitere...',
    image: null,
    description: '....................',
    technologies: 'HTML, CSS, JavaScript',
    link: ''
  },
  {
    name: 'Weitere...',
    image: null,
    description: '....................',
    technologies: 'HTML, CSS, JavaScript',
    link: ''
  },
];
</script>

<template>
  <v-container>
    <h1>Meine Projekte</h1>
    <p class="mt-4 mb-4">Ein kleiner Einblick in das, was ich in den letzten Monaten zusammengecodet habe.</p>

    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.name"
        cols="12"
        md="6"
        sm="6"
      >
        <v-card class="project-card">
          <v-carousel hide-delimiter-background height="350">
            <v-carousel-item
              v-for="(img, index) in project.image"
              :key="index"
              :src="img"
            ></v-carousel-item>
          </v-carousel>

          <v-card-title>{{ project.name }}</v-card-title>

          <v-card-text>
            <p>{{ project.description }}</p>
            <p><strong>Technologien:</strong> {{ project.technologies }}</p>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn :href="project.link" target="_blank" color="primary">Website ansehen</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="css" scoped>
.project-card {
  background-color: rgb(61, 60, 60);
}
</style>
