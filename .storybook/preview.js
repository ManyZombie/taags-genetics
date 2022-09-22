import { app } from "@storybook/vue3";
import { Quasar } from "quasar";
import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/roboto-font/roboto-font.css";

app.use(Quasar, {});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
