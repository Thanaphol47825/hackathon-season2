import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import { loadFonts } from "./plugins/webfontloader";

//Import Vuetify Components
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

loadFonts();

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});

app.use(vuetify);

app.mount("#app");
