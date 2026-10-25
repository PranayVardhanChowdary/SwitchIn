import { defineWorkspace } from 'vitest/config';

/** Backend services/packages (Node environment, `vitest.config.ts`) plus apps/console and apps/web (jsdom + React, each its own `vite.config.ts`) - all run under one `pnpm test`. */
export default defineWorkspace(['vitest.config.ts', 'apps/console/vite.config.ts', 'apps/web/vite.config.ts']);
