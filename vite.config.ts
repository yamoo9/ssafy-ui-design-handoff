import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// HTML 페이지 폴더 지정
const pageFileInputs = await readAllPages('./pages');

// 페이지 별 JavaScript 폴더 지정
const pageScripts = await readAllPageScripts('./src/scripts/pages');

// Vite 구성
const viteConfig = defineConfig({
  base: '/ssafy-ui-design-handoff/',
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    host: 'localhost',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path('./src'),
    },
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        index: path('./index.html'),
        ...pageFileInputs,
      },
      output: {
        manualChunks: {
          ...pageScripts,
        },
      },
    },
  },
});

export default viteConfig;

// 지정된 폴더 경로의 모든 HTML 페이지 가져오기 함수
async function readAllPages(dirPath: string) {
  const pageFilePath = await readdir(path(dirPath), { encoding: 'utf-8' });
  const input = pageFilePath.map((filePath) => {
    const fileName: string = filePath.split('.').at(0)!;
    return [[fileName], path(`${dirPath}/${filePath}`)];
  });

  return Object.fromEntries(input);
}

// 지정된 폴더 경로의 모든 페이지 별 JavaScript 파일 가져오기 함수
async function readAllPageScripts(dirPath: string) {
  const pageFilePath = await readdir(path(dirPath), {
    encoding: 'utf-8',
  });
  const input = pageFilePath.map((filePath) => {
    const fileName: string = filePath.split('.').at(0)!;
    return [[fileName], [path(`${dirPath}/${filePath}`)]];
  });

  return Object.fromEntries(input);
}

// 절대 경로 설정 함수
function path(filePath: string) {
  return fileURLToPath(new URL(filePath, import.meta.url));
}
