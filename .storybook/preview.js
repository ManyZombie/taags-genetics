import { app } from "@storybook/vue3";
import { Quasar } from "quasar";
import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/roboto-font/roboto-font.css";

app.use(Quasar, {});

const i18n = createI18n({
  locale: localStorage.locale || "es",
  messages,
  legacy: false,
});

app.use(i18n);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
