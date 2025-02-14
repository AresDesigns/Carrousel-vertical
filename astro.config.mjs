// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  site: 'https://AresDesigns.github.io',  
  base: '/Carrousel-vertical',
  integrations: [
    tailwind(), ,
]
});
