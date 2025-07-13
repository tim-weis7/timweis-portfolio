<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="app-wrapper">
    <v-app>
      <NavbarComponent />

      <v-main class="content-wrapper">
        <RouterView />
      </v-main>

        <FooterComponent></FooterComponent>
    </v-app>
  </div>
</template>

<style scoped>
.custom-navbar {
  box-shadow: none !important;
}
</style>
