<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import html5Icon from '../assets/icons/technologies/html5.svg';
import cssIcon from '../assets/icons/technologies/css.svg';
import tailwindIcon from '../assets/icons/technologies/tailwindcss.svg';
import jsIcon from '../assets/icons/technologies/javascript.svg';
import tsIcon from '../assets/icons/technologies/typescript.svg';
import vueIcon from '../assets/icons/technologies/vuedotjs.svg';
import vuetifyIcon from '../assets/icons/technologies/vuetify.svg';
import springIcon from '../assets/icons/technologies/springboot.svg';
import nodeIcon from '../assets/icons/technologies/nodedotjs.svg';
import postgresIcon from '../assets/icons/technologies/postgresql.svg';
import gitIcon from '../assets/icons/technologies/git.svg';
import githubIcon from '../assets/icons/technologies/github.svg';
import gitkrakenIcon from '../assets/icons/technologies/gitkraken.svg';


const display = useDisplay();
const isMobile = computed(() => display.width.value <= 960);

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'Vuetify', icon: vuetifyIcon },
  { name: 'Spring Boot', icon: springIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'GitKraken', icon: gitkrakenIcon }
];

const repeatedTechnologies = [...technologies, ...technologies];
</script>

<template>
    <v-divider></v-divider>

  <div class="carousel-wrapper">
    <div class="carousel-track">
      <div
        v-for="(tech, index) in repeatedTechnologies"
        :key="index"
        class="carousel-item ma-5"
      >
        <v-avatar :size="isMobile ? 'small' : 'large'">
          <img :src="tech.icon" :alt="tech.name" />
        </v-avatar>
        <div>{{ tech.name }}</div>
      </div>
    </div>
  </div>
  <v-divider></v-divider>
</template>

<style lang="css" scoped>
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