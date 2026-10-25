import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      'packages/**/src/**/*.test.ts',
      'services/**/src/**/*.test.ts',
      'connectors/**/src/**/*.test.ts',
      'providers/**/src/**/*.test.ts',
    ],
  },
});
