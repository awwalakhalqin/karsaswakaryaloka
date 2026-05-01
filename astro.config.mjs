import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');
const STORYBLOK_TOKEN = env.STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN;

export default defineConfig({
  site: 'https://karsaswakaryaloka.id',
  compressHTML: true,

  server: {
    port: 4322,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      }
    ],
  },

  integrations: [
    sitemap(),
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      components: {
        // Kita bakal daftarin komponen di sini nanti
        project: "storyblok/Project",
      },
    })
  ],
});