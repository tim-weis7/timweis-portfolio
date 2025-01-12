<script setup lang="ts">
import { ref } from "vue";
import deFlag from "../assets/icons/de-flag.png";
import enFlag from "../assets/icons/us-flag.png";
import { useRoute } from "vue-router";

const currentLanguage = ref("de");
const isDropdownOpen = ref(false);
const route = useRoute();

const isActive = (path: string) => route.path === path;

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
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.route"
      :class="{ 'active-item': isActive(item.route) }"
      :ripple="false"
    >
      <div class="cutsom-title">
        {{ item.title }}
        <span class="custom-line">test</span>
      </div>
    </v-list-item>
    <v-list-item>
      <v-menu v-model="isDropdownOpen" bottom>
        <template v-slot:activator="{ props }">
          <div class="icon-wrapper">
            <v-icon class="language-icon ml-5 mr-5" v-bind="props"
              >mdi-web</v-icon
            >
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

<style scoped lang="css">
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

.v-list-item {
  color: white !important;
  font-size: 20px !important;
}

.custom-title {
  position: relative;
  padding-bottom: 5px;
}

.custom-line {
  display: block;
  width: 0;
  height: 1px;
  background-color: white;
  margin: 0 auto;
  margin-top: 7px;
  transition: width 0.6s ease-in-out;
}

.active-item .custom-line {
  width: 100%;
}
</style>
