import path from 'node:path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const runbook = path.resolve('src/lib/layouts/runbook.svelte');

/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
const config = {
  extensions: ['.svelte', '.svx'],
  compilerOptions: {
    css: 'injected',
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layoutPropForwarding: 'runes',
      layout: {
        runbook,
      },
    }),
  ],
};

export default config;
