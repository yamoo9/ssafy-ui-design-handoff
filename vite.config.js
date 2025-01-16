import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    host: 'localhost',
    port: 8080,
  },
});
