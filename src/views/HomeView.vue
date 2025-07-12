<script setup lang="ts">
import homeImage from '../assets/images/home-example.png';

const technologies = [
  { name: 'HTML5', icon: 'src/assets/icons/technologies/html5.svg' },
  { name: 'CSS', icon: 'src/assets/icons/technologies/css.svg' },
  { name: 'Tailwind CSS', icon: 'src/assets/icons/technologies/tailwindcss.svg' },
  { name: 'JavaScript', icon: 'src/assets/icons/technologies/javascript.svg' },
  { name: 'TypeScript', icon: 'src/assets/icons/technologies/typescript.svg' },
  { name: 'Vue.js', icon: 'src/assets/icons/technologies/vuedotjs.svg' },
  { name: 'React', icon: 'src/assets/icons/technologies/react.svg' },
  { name: 'Angular', icon: 'src/assets/icons/technologies/angular.svg' },
  { name: 'Vuetify', icon: 'src/assets/icons/technologies/vuetify.svg' },
  { name: 'Spring Boot', icon: 'src/assets/icons/technologies/springboot.svg' },
  { name: 'Node.js', icon: 'src/assets/icons/technologies/nodedotjs.svg' },
  { name: 'PostgreSQL', icon: 'src/assets/icons/technologies/postgresql.svg' },
  { name: 'Git', icon: 'src/assets/icons/technologies/git.svg' },
  { name: 'GitHub', icon: 'src/assets/icons/technologies/github.svg' },
  { name: 'GitKraken', icon: 'src/assets/icons/technologies/gitkraken.svg' }
];

const repeatedTechnologies = [...technologies, ...technologies];
</script>

<template>
  <v-row align="center">
    <v-col class="text-content" cols="12" md="6">
      <v-chip color="success" text-color="white" small>Available for a job</v-chip>
      <h1 class="text-h2 mt-2">Code, der läuft.</h1>
      <h1 class="text-h2"> Projekte, die zeigen,</h1>
      <h1 class="text-h2">was ich kann.</h1>

      <div class="d-flex mt-5">
        <v-btn color="primary" class="mr-2">Projekte ansehen</v-btn>
        <v-btn outlined>Kontakt</v-btn>
      </div>

      <div class="mt-4">
        <v-chip class="mr-3">Frontend</v-chip>
        <v-chip class="mr-3" color="primary">Full-Stack</v-chip>
        <v-chip color="secondary">Mobile-First</v-chip>
      </div>
    </v-col>

    <v-col cols="12" md="6">
      <v-img :src="homeImage" height="auto" width="auto"></v-img>
    </v-col>
  </v-row>

  <div class="carousel-wrapper mt-8">
    <div class="carousel-track">
      <div
        v-for="(tech, index) in repeatedTechnologies"
        :key="index"
        class="carousel-item ma-5"
      >
        <v-avatar size="60">
          <img :src="tech.icon" :alt="tech.name" />
        </v-avatar>
        <div>{{ tech.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.text-content {
  text-align: left;
}

.v-avatar img {
  filter: brightness(0) invert(1);
}

.carousel-wrapper {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: inline-flex;
  animation: scroll 60s linear infinite;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>