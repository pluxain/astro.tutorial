import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://candid-semolina-e10565.netlify.app",
  integrations: [vue()],
});
