import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ssafy-ui-design-handoff/',
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    host: 'localhost',
    port: 8080,
  },
  build: {
    outDir: 'docs'
  }
});
