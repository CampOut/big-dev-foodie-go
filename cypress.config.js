import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  projectId: '9uyf7u',
  viewportHeight: 900,
  viewportWidth: 1200,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-[hash].xml',
    toConsole: true,
  },
  e2e: {
    supportFile: false,
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
    },
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-undef
    },
  },
});
