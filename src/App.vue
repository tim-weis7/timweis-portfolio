<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="app-wrapper">
    <v-app>
      <v-app-bar class="custom-navbar">
        <v-row class="justify-end">
          <NavbarComponent />
        </v-row>
      </v-app-bar>

      <v-main class="content-wrapper">
        <RouterView />
      </v-main>

      <v-footer>
        <FooterComponent></FooterComponent>
      </v-footer>
    </v-app>
  </div>
</template>

<style scoped>
.custom-navbar {
  box-shadow: none !important;
}
</style>
