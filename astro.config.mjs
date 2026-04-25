import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://karsaswakaryaloka.id',
  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
    }],
  },

  integrations: [sitemap()],
});