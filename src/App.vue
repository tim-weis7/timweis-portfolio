<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-row class="justify-end">
        <NavbarComponent />
      </v-row>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
