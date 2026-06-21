import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'no',
    locales: ['no', 'en'],
    routing: {
      prefixDefaultLocale: false, // ESTO hace que el noruego sea la raíz (/)
    },
  },
  experimental: {
    viewTransitions: true,
  },

  
  integrations: [tailwind(), compress()],
});