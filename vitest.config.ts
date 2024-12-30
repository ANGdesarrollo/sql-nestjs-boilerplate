import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    passWithNoTests: true,
    clearMocks: true,
    include: ['test/**/*.{test,spec}.{ts,js}'],
    exclude: ['src/**/*Module.ts', 'src/main.ts'],
    reporters: ['verbose'],
    testTimeout: 60000,
    coverage: {
      enabled: true,
      include: ['src/**/*.{ts,js}'],
      exclude: ['src/**/*Module.ts', 'src/main.ts'],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
});
