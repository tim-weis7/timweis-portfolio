<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';


const display = useDisplay();
const isMobile = computed(() => display.width.value <= 960);

const technologies = [
  { name: 'HTML5', icon: 'src/assets/icons/technologies/html5.svg' },
  { name: 'CSS', icon: 'src/assets/icons/technologies/css.svg' },
  { name: 'Tailwind CSS', icon: 'src/assets/icons/technologies/tailwindcss.svg' },
  { name: 'JavaScript', icon: 'src/assets/icons/technologies/javascript.svg' },
  { name: 'TypeScript', icon: 'src/assets/icons/technologies/typescript.svg' },
  { name: 'Vue.js', icon: 'src/assets/icons/technologies/vuedotjs.svg' },
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