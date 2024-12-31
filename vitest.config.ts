import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

const alias = {
  '@src': 'src',
  '@shared': 'src/Shared/*',
  '@app/*': 'src/App/*',
  '@auth/*': 'src/Auth/*',
  '@test/*': 'test/*'
};

export default defineConfig({
  test: {
    environment: 'node',
    passWithNoTests: true,
    clearMocks: true,
    globals: true,
    root: './',
    reporters: ['verbose'],
    alias,
    coverage: {
      all: true,
      include: ['src/**/*.{ts,js}'],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: ['src/**/*Module.ts', 'src/main.ts']
    },
    testTimeout: 16000,
    include: ['test/**/*.spec.ts']
  },
  resolve: {
    alias
  },
  plugins: [swc.vite()]
});
