import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    passWithNoTests: true,
    clearMocks: true,
    globals: true,
    root: './',
    reporters: ['verbose'],
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
  plugins: []
});
