import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
const check = process.argv.includes('--CHECK');

const alias = {
  '@src': 'src',
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
      exclude: ['src/**/*Module.ts', 'src/main.ts'],
      ...(check
        ? {
            statements: '100',
            branches: '100',
            functions: '100',
            lines: '100',
          }
        : {}),
    },
    deps: {
      interopDefault: true,
    },
    testTimeout: 16000,
    include: ['test/**/*.spec.ts'],
    exclude: ['src/**/*Module.ts', 'src/main.ts'],
  },
  resolve: {
    alias,
  },
  plugins: [swc.vite()],
});
