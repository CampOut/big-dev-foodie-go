import { defineConfig } from 'cypress';
import viteConfig from './vite.config.js';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  projectId: 'f7a4x7',
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on) {
      // implement node event listeners here
      on('file:preprocessor', vitePreprocessor());
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        ...viteConfig,
      },
    },
  },
});
