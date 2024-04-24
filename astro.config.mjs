import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './remark-reading-time.mjs';
// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [sitemap(), tailwind()],
	markdown: {
    remarkPlugins: [remarkReadingTime],
  }
});
