<script setup lang="ts">
import twLogo from '../assets/icons/twLogo-rounded-32x32.png'

const list = [
    { title: "© 2025 Tim Weis", route: "" },
    { title: "Impressum", route: "" },
    { title: "Privacy Policy", route: "" },
    { title: "Contact", route: "/contact" },
];

const socialMediaLinks = [
    { title: "GitHub", route: "https://github.com/tiwe1001", icon: "mdi-github" },
    { title: "LinkedIn", route: "https://www.linkedin.com/in/tim-weis-59b4951a5/", icon: "mdi-linkedin" },
]
</script>

<template>
  <v-list class="footer-list d-flex justify-center">
    <v-list-item>
        <img
            :src="twLogo"
            height="20px"
            width="20px">
        </img>
    </v-list-item>

    <v-list-item
        v-for="item in list"
        :to="item.route">
            <v-list-item-title>
                {{ item.title }}
            </v-list-item-title>
    </v-list-item>

    <v-list-item
        v-for="link in socialMediaLinks"
        :key="link.title"
        :href="link.route"
        target="_blank">
            <v-icon>
                {{ link.icon }}
            </v-icon>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="css">
.footer-list .v-list-item-title {
    font-size: 13px !important;
}

.footer-list .v-icon {
    font-size: 20px !important;
}
</style>