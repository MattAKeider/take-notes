import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'tests/setup.ts',
    coverage: {
      include: ['src/**/*.tsx'],
      exclude: ['src/main.tsx'],
    },
  },
});