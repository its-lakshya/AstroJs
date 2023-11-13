import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  })
});

// site: 'https://its-lakshya.github.io',
//   base: '/AstroJs-Landing-Page',