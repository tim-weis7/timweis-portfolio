<script setup lang="ts">
import { ref } from "vue";
import deFlag from "../assets/icons/de-flag.png";
import enFlag from "../assets/icons/us-flag.png";

const currentLanguage = ref("de");
const isDropdownOpen = ref(false);

const items = [
  { title: "HOME", route: "/" },
  { title: "ABOUT", route: "/about" },
  { title: "PROJECTS", route: "/projects" },
  { title: "CONTACT", route: "/contact" },
];

const languageFlags = {
  de: deFlag,
  en: enFlag,
};

const changeLanguage = (lang: string) => {
  currentLanguage.value = lang;
  isDropdownOpen.value = false;
};
</script>

<template>
  <v-list class="display-flex d-flex">
    <v-list-item v-for="item in items" :key="item.title" :to="item.route">
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-menu v-model="isDropdownOpen" bottom>
        <template v-slot:activator="{ props }">
          <div class="icon-wrapper">
            <v-icon class="language-icon mr-5" v-bind="props">mdi-web</v-icon>
            <img :src="languageFlags[currentLanguage]" class="language-flag" />
          </div>
        </template>
        <v-list>
          <v-list-item @click="changeLanguage('de')">
            <v-list-item-title
              ><img :src="languageFlags['de']" alt="Deutsch" /> 🇩🇪
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="changeLanguage('en')">
            <v-list-item-title
              ><img :src="languageFlags['en']" alt="Deutsch" /> 🇺🇸
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
  </v-list>
</template>

<style lang="css">
.icon-wrapper {
  position: relative;
  display: inline-block;
}

.language-icon {
  font-size: 32px;
  position: relative;
  z-index: 1;
}

.language-flag {
  position: absolute;
  right: 12px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
