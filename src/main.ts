import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./router";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import "@mdi/font/css/materialdesignicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme: {
        dark: true,
        colors: {
          background: "#1E1E1E",
          surface: "#1E1E1E",
          primary: "#FFFFFF",
          secondary: "#BDBDBD",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
