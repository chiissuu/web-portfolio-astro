// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://chiissuu.github.io",
  base: "/web-portfolio-astro",
  integrations: [react()],
});